import Head from 'next/head'

import JumbotronMain from '../components/sections/JumbotronMain'
import About from '../components/sections/About'
import ConferencesInEurope from '../components/sections/ConferencesInEurope'
import ForeignAffiliates from '../components/sections/ForeignAffiliates'
import StudentsFromWorld from '../components/sections/StudentsFromWorld'
import CorporateClients from '../components/sections/CorporateClients'
import Teachers from '../components/sections/Teachers'
import UpToDateContent from '../components/sections/UpToDateContent'
import Accreditation from '../components/sections/Accreditation'
import ContactUs from '../components/sections/ContactUs'

import setString from '../components/hooks/setString'
import lang from '../translation/data/about'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

const about = () => {
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

  return (
    <>
      <Head>
        <title>{setString(lang.title)}</title>
      </Head>

      <JumbotronMain />

      <div className='container'>
        <About />
        <ConferencesInEurope />
        <ForeignAffiliates />
        <StudentsFromWorld />
        <CorporateClients />
        <Teachers />
        <UpToDateContent />
        <Accreditation />
        <ContactUs />
      </div>
    </>
  )
}

export default about
