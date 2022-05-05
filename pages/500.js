import { ErrorPage } from '@dts-stn/decd-design-system'
import DSHeader from '../components/molecules/DSHeader'

export default function Error500(props) {
  const errorPageLink = props.locale === 'en' ? '/dashboard' : '/fr/dashboard'
  return (
    <>
      <DSHeader locale={props.locale} langToggleLink={props.langToggleLink} />
      <ErrorPage
        errType="500"
        lang={props.locale}
        accountPageLink={errorPageLink}
        isAuth={true}
      />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const langToggleLink = locale === 'en' ? '/fr/500' : '/500'
  return {
    props: { locale, langToggleLink },
  }
}