import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import { apiProgramsReqUrl, backendUrl } from '@/config/index'

const Home = ({ programs }) => {
  return (
    <>
      <NextSeo
        title={'Moscow Business Academy'}
        description={truncate(
          `${SetString(lang.headerTitlePreHighlight)} ${SetString(
            lang.headerTitleHighlight
          )} ${SetString(lang.headerTitlePostHighlight)}`,
          120
        )}
        canonical={'https://promo.moscow.mba/'}
      />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default Home
