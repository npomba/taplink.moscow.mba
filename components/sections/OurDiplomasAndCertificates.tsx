import stls from '@/styles/components/sections/OurDiplomasAndCertificates.module.sass'
import Script from 'next/script'
import Accordion from '@/components/general/Accordion'

import academyDiplomaProfInd from '@/public/assets/diplomas/profind/diploma-profind.jpg'
import academyDiplomaProfIndHighRes from '@/public/assets/diplomas/profind/diploma-profind-high-res.jpg'
import qualificationDiplomaProfInd from '@/public/assets/diplomas/profind/qualification-diploma-profind.jpg'
import qualificationDiplomaProfIndHighRes from '@/public/assets/diplomas/profind/qualification-diploma-profind-high-res.jpg'
import diplomaAddendumProfInd from '@/public/assets/diplomas/profind/diploma-addendum-profind.jpg'
import diplomaAddendumProfIndHighRes from '@/public/assets/diplomas/profind/diploma-addendum-profind-high-res.jpg'
import diplomaSupplementProfInd from '@/public/assets/diplomas/profind/diploma-supplement-profind.jpg'
import diplomaSupplementProfIndHighRes from '@/public/assets/diplomas/profind/diploma-supplement-profind-high-res.jpg'

import academyDiplomaMini from '@/public/assets/diplomas/mini/diploma-mini.jpg'
import academyDiplomaMiniHighRes from '@/public/assets/diplomas/mini/diploma-mini-high-res.jpg'
import qualificationDiplomaMini from '@/public/assets/diplomas/mini/qualification-diploma-mini.jpg'
import qualificationDiplomaMiniHighRes from '@/public/assets/diplomas/mini/qualification-diploma-mini-high-res.jpg'
import diplomaAddendumMini from '@/public/assets/diplomas/mini/diploma-addendum-mini.jpg'
import diplomaAddendumMiniHighRes from '@/public/assets/diplomas/mini/diploma-addendum-mini-high-res.jpg'
import diplomaSupplementMini from '@/public/assets/diplomas/mini/diploma-supplement-mini.jpg'
import diplomaSupplementMiniHighRes from '@/public/assets/diplomas/mini/diploma-supplement-mini-high-res.jpg'

import certificateProfession from '@/public/assets/diplomas/profession/certificate-profession.jpg'
import certificateProfessionHighRes from '@/public/assets/diplomas/profession/certificate-profession-high-res.jpg'
import qualificationDiplomaProfession from '@/public/assets/diplomas/profession/qualification-diploma-profession.jpg'
import qualificationDiplomaProfessionHighRes from '@/public/assets/diplomas/profession/qualification-diploma-profession-high-res.jpg'
import diplomaAddendumProfession from '@/public/assets/diplomas/profession/diploma-addendum-profession.jpg'
import diplomaAddendumProfessionHighRes from '@/public/assets/diplomas/profession/diploma-addendum-profession-high-res.jpg'

import certificateCourses from '@/public/assets/diplomas/courses/certificate-courses.jpg'
import certificateCoursesHighRes from '@/public/assets/diplomas/courses/certificate-courses-high-res.jpg'
import qualificationCertificateCourses from '@/public/assets/diplomas/courses/qualification-certificate-courses.jpg'
import qualificationCertificateCoursesHighRes from '@/public/assets/diplomas/courses/qualification-certificate-courses-high-res.jpg'

const profIndDocuments = [
  {
    regularRes: academyDiplomaProfInd,
    highRes: academyDiplomaProfIndHighRes,
    name: 'Диплом академии',
    width: 370,
    height: 261
  },
  {
    regularRes: qualificationDiplomaProfInd,
    highRes: qualificationDiplomaProfIndHighRes,
    name: 'Диплом уст. образца',
    width: 370,
    height: 261
  },
  {
    regularRes: diplomaAddendumProfInd,
    highRes: diplomaAddendumProfIndHighRes,
    name: 'Приложение к диплому',
    width: 370,
    height: 261
  },
  {
    regularRes: diplomaSupplementProfInd,
    highRes: diplomaSupplementProfIndHighRes,
    name: 'Диплом Supplement',
    width: 268,
    height: 378
  }
]

const miniDocuments = [
  {
    regularRes: academyDiplomaMini,
    highRes: academyDiplomaMiniHighRes,
    name: 'Диплом академии',
    width: 370,
    height: 261
  },
  {
    regularRes: qualificationDiplomaMini,
    highRes: qualificationDiplomaMiniHighRes,
    name: 'Диплом уст. образца',
    width: 370,
    height: 261
  },
  {
    regularRes: diplomaAddendumMini,
    highRes: diplomaAddendumMiniHighRes,
    name: 'Приложение к диплому',
    width: 370,
    height: 261
  },
  {
    regularRes: diplomaSupplementMini,
    highRes: diplomaSupplementMiniHighRes,
    name: 'Диплом Supplement',
    width: 268,
    height: 378
  }
]

const professionDocuments = [
  {
    regularRes: certificateProfession,
    highRes: certificateProfessionHighRes,
    name: 'Сертификат академии',
    width: 370,
    height: 261
  },
  {
    regularRes: qualificationDiplomaProfession,
    highRes: qualificationDiplomaProfessionHighRes,
    name: 'Диплом уст. образца',
    width: 370,
    height: 261
  },
  {
    regularRes: diplomaAddendumProfession,
    highRes: diplomaAddendumProfessionHighRes,
    name: 'Приложение к диплому',
    width: 370,
    height: 261
  }
]

const coursesDocuments = [
  {
    regularRes: certificateCourses,
    highRes: certificateCoursesHighRes,
    name: 'Сертификат академии',
    width: 370,
    height: 261
  },
  {
    regularRes: qualificationCertificateCourses,
    highRes: qualificationCertificateCoursesHighRes,
    name: 'Удостоверение уст. образца',
    width: 370,
    height: 261
  }
]

const documentsBasedOnProgram = [
  {
    programType: 'MBA Professional / Industry',
    documents: profIndDocuments
  },
  {
    programType: 'MBA Mini',
    documents: miniDocuments
  },
  {
    programType: 'Профессия',
    documents: professionDocuments
  },
  {
    programType: 'Курс',
    documents: coursesDocuments
  }
]

const OurDiplomasAndCertificates = () => {
  const diplomasClassNames = [stls.legalSection, stls.diplomasAndCertificates]

  return (
    <section className={diplomasClassNames.join(' ')}>
      <h2 className={stls.subHeading}>Выдаваемые дипломы и сертификаты</h2>
      <p>
        Мы производим обучение на основании государственной лицензии №041221.
        После окончания обучения в Moscow Business Academy Вы получите диплом о
        профессиональной переподготовке установленного образца, диплом академии
        и международный диплом Supplement, которые можно добавить в портфолио и
        показать работодателю.
      </p>
      {documentsBasedOnProgram.map(({ programType, documents }, idx) => (
        <Accordion
          key={programType + idx}
          title={programType}
          accordionContent={documents}
          isImage={true}
          idx={idx}
        />
      ))}
      <Script src='/assets/js/accordion.js' strategy='lazyOnload' />
    </section>
  )
}

export default OurDiplomasAndCertificates
