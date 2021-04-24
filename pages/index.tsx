import Head from 'next/head'

import JumbotronMain from '@/components/sections/JumbotronMain'
import About from '@/components/sections/About'
import ConferencesInEurope from '@/components/sections/ConferencesInEurope'
import ForeignAffiliates from '@/components/sections/ForeignAffiliates'
import StudentsInternational from '@/components/sections/StudentsInternational'
import CorporateClients from '@/components/sections/CorporateClients'
import Programs from '@/components/sections/Programs'
import Executive from '@/components/sections/Executive'
import ContactUs from '@/components/sections/ContactUs'

// import Lang from '../components/hooks/Lang'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

export default function Home({ programs }) {
  const { data } = programs
  // useEffect(() => {
  //   loadJs(
  //     [
  //       '/assets/js/slick.min.js',
  //       '/assets/js/lazysizes.min.js',
  //       '/assets/js/jquery.magnific-popup.min.js',
  //       '/assets/js/myjs.js',
  //     ],
  //     {
  //       async: false,
  //     }
  //   )
  // }, [])
  // Lang.init('ru')

  return (
    <>
      <Head>
        <title>Moscow Business Academy</title>
      </Head>

      <JumbotronMain />

      <div className='container'>
        <About />
        <ConferencesInEurope />
        <ForeignAffiliates />
        <StudentsInternational />
        <CorporateClients />

        <Programs programs={data} />
        <Executive />

        <ContactUs />
      </div>
    </>
  )
}
