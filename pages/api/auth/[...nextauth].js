import NextAuth from 'next-auth'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    {
      id: 'customProvider',
      name: 'customProvider',
      clientId: 'dc-dashboard',
      clientSecret: '',
      type: 'oauth',
      wellKnown: process.env.KEYCLOAK_OPENID,
      authorization: { params: { scope: 'openid email profile' } },
      idToken: true,
      checks: ['state'],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        }
      },
    },
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin'
      return token
    },
  },
})
