import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import AboutExecutive from '@/components/sections/AboutExecutive'
import ResultsExecutive from '@/components/sections/ResultsExecutive'
import InPersonWithExperts from '@/components/sections/InPersonWithExperts'
import ModulesAbroad from '@/components/sections/ModulesAbroad'
import WhoStudies from '@/components/sections/WhoStudies'
import ProgramsModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Accreditation from '@/components/sections/Accreditation'
import Teachers from '@/components/sections/Teachers'
import Rules from '@/components/sections/Rules'
import ExecutiveRequirements from '@/components/sections/ExecutiveRequirements'
import Students from '@/components/sections/Students'
import Reviews from '@/components/sections/Reviews'
import CostOfStudy from '@/components/sections/CostOfStudy'
import Qna from '@/components/sections/Qna'
import { server, apiProgramsReqUrl } from '@/config/index'

const executive = ({ programs }) => {
  const data = {
    picture: 'bg-executive.jpg',
    title: 'Executive MBA',
    _id: '1acc50fc-ab61-436f-959a-600676a99f17',
    desc: 'Программа Executive MBA разработана для амбициозных предпринимателей и топ-менеджеров крупных компаний, которые привыкли быть лучшими и не готовы останавливаться на достигнутом',
    specializedSubjects: [
      'Принципы командообразования в различных сферах бизнеса',
      'Навыки лидера',
      'Нетворкинг',
      'Основы глобальной экономики',
      'Маркетинг',
      'Стратегия продвижения бренда',
      'Анализ бизнес-процессов и стратегическое мышление',
      'Финансы',
      'Инвестиционные стратегии мирового рынка',
      'HR-стратегии и методы подбора персонала',
      'Методы управления организацией',
      'Личный бренд как стратегия лидера',
      'Современные бизнес-модели',
      'Управление рисками'
    ]
  }

  return (
    <>
      <NextSeo title={data.title} description={truncate(data.desc, 120)} />

      <JumbotronProgram data={data} />
      <div className='container'>
        <AboutExecutive />
        <ResultsExecutive />
        <InPersonWithExperts />
        <ModulesAbroad />
        <WhoStudies />

        <ProgramsModules data={data} />
        <ContactUs
          programId={data._id}
          programTitle={data.title}
          title={'Получите консультацию'}
          titleNewStr={'по программе обучения'}
        />
        <Accreditation />
        <Teachers programId={data._id} programTitle={data.title} />
        <Rules prices={{ lowerPrice: '600 000', higherPrice: '2 000 000' }} />
        <ExecutiveRequirements />
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

export async function getStaticProps() {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default executive
