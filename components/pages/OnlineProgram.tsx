import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import Reviews from '@/components/sections/Reviews'
import ProgramGoal from '@/components/sections/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Qna from '@/components/sections/Qna'
import Students from '@/components/sections/Students'
import Teachers from '@/components/sections/Teachers'
import RelevantContent from '@/components/sections/RelevantContent'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '@/components/sections/CorporateClients'
import Accreditation from '@/components/sections/Accreditation'
import Pros from '@/components/sections/Pros'

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
  const data = program

  return (
    <>
      <NextSeo
        title={data.title}
        description={truncate(program.goalsOfProgram, 120)}
      />

      <JumbotronProgram data={data} format={'online'} />

      <div className='container'>
        <ProgramGoal data={data} />
        <WhatWillYouLearn data={data} />
        <ProgramDesc />
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
        <Qna />

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
