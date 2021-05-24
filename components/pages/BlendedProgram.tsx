import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import Reviews from '@/components/sections/Reviews'
import Rules from '@/components/sections/Rules'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import ProgramGoal from '@/components/sections/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramsModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Qna from '@/components/sections/Qna'
import Students from '@/components/sections/Students'
import Teachers from '@/components/sections/Teachers'
import UpToDateContent from '@/components/sections/UpToDateContent'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '@/components/sections/CorporateClients'
import Accreditation from '@/components/sections/Accreditation'
import Pros from '@/components/sections/Pros'
import BlendedMetups from '@/components/sections/BlendedMetups'
import CostOfStudy from '@/components/sections/CostOfStudy'

const PageBlendedProgram = ({ program }) => {
  const data = program

  return (
    <>
      <NextSeo
        title={data.title}
        description={truncate(program.goalsOfProgram, 120)}
      />

      <JumbotronProgram data={data} />

      <div className='container'>
        <ProgramGoal data={data} />
        <WhatWillYouLearn data={data} />
        <ProgramDesc />
        <BlendedMetups />
        <Pros format={'blended'} />
        <HowProcessGoes />
        <ProgramsModules data={data} />
        <ContactUs
          programId={data._id}
          programTitle={data.title}
          title={'Получите консультацию'}
          titleNewStr={'по программе обучения'}
        />
        <Teachers programId={data._id} programTitle={data.title} />
        <UpToDateContent />
        <CorporateClients />
        <Accreditation />
        <Diploma />
        <Students />
        <Reviews />
        <CostOfStudy programId={data._id} programTitle={data.title} />
        <Qna />
        <ContactUs
          programId={data._id}
          programTitle={data.title}
          title={'Не знаете что выбрать?'}
          titleNewStr={'Получите консультацию по программам MBA'}
        />
      </div>
    </>
  )
}

export default PageBlendedProgram
