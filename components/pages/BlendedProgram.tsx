import Head from 'next/head'
import Reviews from '@/components/sections/Reviews'
import Rules from '@/components/sections/Rules'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import ProgramGoal from '@/components/sections/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramsModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Faq from '@/components/sections/Faq'
import Students from '@/components/sections/Students'
import Teachers from '@/components/sections/Teachers'
import RelevantContent from '@/components/sections/RelevantContent'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '@/components/sections/CorporateClients'
import Accreditation from '@/components/sections/Accreditation'
import Pros from '@/components/sections/Pros'
import BlendedMetups from '@/components/sections/BlendedMetups'
import CostOfStudy from '@/components/sections/CostOfStudy'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

const PageBlendedProgram = ({ program }) => {
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
  const data = program

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <JumbotronProgram data={data} format={'blended'} />

      <div className='container'>
        <ProgramGoal data={data} />
        <WhatWillYouLearn data={data} />
        <ProgramDesc />
        <BlendedMetups />
        <Pros format={'blended'} />
        <HowProcessGoes />
        <ProgramsModules />
        <ContactUs title={'Получите консультацию по программе'} />
        <Teachers />
        <RelevantContent />
        <CorporateClients />
        <Accreditation />
        <Rules prices={{ lowerPrice: '300 000', higherPrice: '1 500 000' }} />
        <Diploma />
        <Students />
        <Reviews />
        <CostOfStudy />
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

export default PageBlendedProgram
