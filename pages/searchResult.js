import Layout from '../components/organisms/Layout'
import SearchFiltersModal from '../components/molecules/SearchFiltersModal'
import SearchHeader from '../components/molecules/SearchHeader'

import { getAEMFragments, getLocalBenefits } from './api/getData'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { CardList } from '../components/molecules/CardList'

import en from '../locales/en'
import fr from '../locales/fr'

export default function SearchResult(props) {
  const t = props.locale === 'en' ? en : fr
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const [benefitList, setbenefitList] = useState(props.benefits)

  useEffect(() => {
    if (router.query.search) {
      setSearch(router.query.search)
    }
  }, [router.query.search])

  return (
    <Layout locale={props.locale} title="searchResult">
      <SearchFiltersModal
        filterHeader={t.filters}
        submitText={t.submit}
        isOpen={modalShow}
        setModalShow={setModalShow}
      />
      <SearchHeader
        lang={props.locale}
        headerText={'Search Benefits'}
        inputText={search ?? ''}
        searchBarPlaceholder={t.searchPlaceholder}
        searchBarText={t.search}
        btnClearText={t.clearResults}
        btnClearLabel={t.clearResults}
        btnFilterText={t.filterResults}
        btnFilterLabel={t.filterResults}
        setModalShow={setModalShow}
        onSubmitHref="/searchResult"
      />
      <h1 className="layout-container text-3xl">
        Search results page placeholder.
      </h1>
      <h2 className="layout-container text-2xl">
        Locale selected: {props.locale}.
      </h2>
      <h2 className="layout-container text-2xl">
        Current search: {search ? search : 'No search specified'}.
      </h2>
      <CardList cardList={benefitList} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  let benefits = []
  let errorCode = false

  //
  // IF content enabled get the data from the api
  //

  if (process.env.NEXT_CONTENT_API) {
    let AEMbenefits = await getAEMFragments('benefits.json')
    errorCode = AEMbenefits.error
    if (AEMbenefits.apiData && !errorCode) {
      benefits = AEMbenefits.apiData.entities
    }
  } else {
    //
    // Else get the content from the local file
    //
    const { localData } = getLocalBenefits()

    benefits = localData
    errorCode = false
  }

  return {
    props: {
      benefits,
      errorCode,
      locale,
    },
  }
}
