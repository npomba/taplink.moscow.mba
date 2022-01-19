import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import Heading from '@/components/general/Heading'
import Pros from '@/components/sections/Pros'
import Cta from '@/components/sections/Cta'

const Home = () => {
  const program = {
    title: 'Об академии',
    _id: '123',
    goalsOfProgram: []
  }
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
      <Heading />
      <Pros />
      <Cta />
    </>
  )
}

export default Home
