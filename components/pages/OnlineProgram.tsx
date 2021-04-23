import Head from 'next/head'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import Reviews from '@/components/sections/Reviews'
import ProgramGoal from '@/components/sections/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Faq from '@/components/sections/Faq'
import Students from '@/components/sections/Students'
import Teachers from '@/components/sections/Teachers'
import RelevantContent from '@/components/sections/RelevantContent'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '../sections/CorporateClients'
import Accreditation from '../sections/Accreditation'
import Pros from '../sections/Pros'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

const PageOnlineProgram = ({ program }) => {
  // useEffect(() => {

  //   loadJs([
  //     '/assets/js/slick.min.js',
  //     '/assets/js/lazysizes.min.js',
  //     '/assets/js/circle-progress.min.js',
  //     '/assets/js/jquery.magnific-popup.min.js',
  //     '/assets/js/myjs.js'
  //   ], {
  //     async: false
  //   })
  // }, [])
  const data = program.data

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <JumbotronProgram data={data} format={'online'} />

      <div className='container'>
        <ProgramGoal data={data} />
        <WhatWillYouLearn data={data} />
        <ProgramDesc data={data} />
        <Pros format={'online'} />
        <HowProcessGoes />
        <ProgramModules />
        <Teachers />
        <RelevantContent />
        <CorporateClients />
        <Accreditation />
        <Diploma />
        <Students />
        <Reviews />
        <Faq />

        <ContactUs
          title={
            'Не знаете что выбрать? Получите консультацию по программам MBA'
          }
        />
      </div>
    </>
  )
}

export default PageOnlineProgram
