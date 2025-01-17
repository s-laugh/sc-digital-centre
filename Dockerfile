FROM node:18.5.0-alpine3.15 AS base
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS build

# Build Envs
ARG NEXT_BUILD_DATE
ENV NEXT_PUBLIC_BUILD_DATE=$NEXT_BUILD_DATE

ARG NEXT_PUBLIC_ADOBE_ANALYTICS_URL
ENV NEXT_PUBLIC_ADOBE_ANALYTICS_URL=$NEXT_PUBLIC_ADOBE_ANALYTICS_URL

ARG NEXT_CONTENT_API
ENV NEXT_CONTENT_API=$NEXT_CONTENT_API

ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:18.5.0-alpine3.15 AS production
ENV NODE_ENV=production
SHELL ["/bin/sh", "-c"]
RUN apk add --no-cache bash
ARG user=joker
ARG home=/home/node
ARG group=thejokers
RUN addgroup -S $group
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home $home \
    --ingroup $group \
    $user

ENV NODE_ENV=production
WORKDIR $home
COPY --from=build --chown=55:$group /build/next.config.js ./
COPY --from=build --chown=55:$group /build/package*.json ./
COPY --from=build --chown=55:$group /build/.next ./.next
COPY --from=build --chown=55:$group /build/public ./public
RUN VERSION_NEXT=`node -p -e "require('./package.json').dependencies.next"`&& npm install --no-package-lock --no-save next@"$VERSION_NEXT"
USER $user

# Runtime Envs
ARG OCP_APIM_SUBSCRIPTION_KEY
ENV OCP_APIM_SUBSCRIPTION_KEY=$OCP_APIM_SUBSCRIPTION_KEY

ARG CPP_ACTIVE_BENEFIT_URL
ENV CPP_ACTIVE_BENEFIT_URL=$CPP_ACTIVE_BENEFIT_URL

ARG EI_ACTIVE_BENEFIT_URL
ENV EI_ACTIVE_BENEFIT_URL=$EI_ACTIVE_BENEFIT_URL

ARG CLIENT_SECRET
ENV CLIENT_SECRET=$CLIENT_SECRET

ARG CLIENT_ID
ENV CLIENT_ID=$CLIENT_ID

ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET

ARG NEXTAUTH_URL
ENV NEXTAUTH_URL=$NEXTAUTH_URL

ARG WELL_KNOWN
ENV WELL_KNOWN=$WELL_KNOWN

ARG AUTH_DISABLED
ENV AUTH_DISABLED=$AUTH_DISABLED

ARG NEXT_CONTENT_API
ENV NEXT_CONTENT_API=$NEXT_CONTENT_API

CMD npm run start
