import Head from 'next/head'

import JumbotronMain from '@/components/sections/JumbotronMain'
import About from '@/components/sections/About'
import ConferencesInEurope from '@/components/sections/ConferencesInEurope'
import ForeignAffiliates from '@/components/sections/ForeignAffiliates'
import StudentsInternational from '@/components/sections/StudentsInternational'
import CorporateClients from '@/components/sections/CorporateClients'
import Teachers from '@/components/sections/Teachers'
import UpToDateContent from '@/components/sections/UpToDateContent'
import Accreditation from '@/components/sections/Accreditation'
import ContactUs from '@/components/sections/ContactUs'

import setString from '@/components/hooks/setString'
import lang from '@/data/translation/about'
import { apiProgramsReqUrl, server } from '@/config/index'

const about = ({ programs }) => {
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
        <StudentsInternational />
        <CorporateClients />
        <Teachers />
        <UpToDateContent />
        <Accreditation />
        <ContactUs />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default about
