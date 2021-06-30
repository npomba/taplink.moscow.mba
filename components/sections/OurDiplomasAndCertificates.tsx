import Script from 'next/script'
import Accordion from '@/components/general/Accordion'
import stls from '@/styles/modules/LegalPage.module.sass'

const profIndDiplomas = [
  {
    fileSrc: '/assets/diplomas/pro-ind/doc-1.pdf',
    fileName: 'Диплом академии',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/pro-ind/doc-2.pdf',
    fileName: 'Диплом уст. образца',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/pro-ind/doc-3.pdf',
    fileName: 'Приложение к диплому',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/pro-ind/doc-4.pdf',
    fileName: 'Diploma Supplement',
    pageNum: 1,
    landscape: false
  }
]

const miniDiplomas = [
  {
    fileSrc: '/assets/diplomas/mini/doc-1.pdf',
    fileName: 'Диплом академии',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/mini/doc-2.pdf',
    fileName: 'Диплом уст. образца',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/mini/doc-3.pdf',
    fileName: 'Приложение к диплому',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/mini/doc-4.pdf',
    fileName: 'Diploma Supplement',
    pageNum: 1,
    landscape: false
  }
]

const professionDiplomas = [
  {
    fileSrc: '/assets/diplomas/prof/doc-1.pdf',
    fileName: 'Диплом академии',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/prof/doc-2.pdf',
    fileName: 'Диплом уст. образца',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/prof/doc-3.pdf',
    fileName: 'Приложение к диплому',
    pageNum: 1,
    landscape: true
  }
]

const courseDiplomas = [
  {
    fileSrc: '/assets/diplomas/mini/doc-1.pdf',
    fileName: 'Диплом академии',
    pageNum: 1,
    landscape: true
  },
  {
    fileSrc: '/assets/diplomas/mini/doc-2.pdf',
    fileName: 'Удостоверение о повышении квалификации',
    pageNum: 1,
    landscape: true
  }
]

const diplomasBasedOnProgram = [
  {
    programType: 'MBA Professional / Industry',
    diplomas: profIndDiplomas
  },
  {
    programType: 'MBA Mini',
    diplomas: miniDiplomas
  },
  {
    programType: 'Профессия',
    diplomas: professionDiplomas
  },
  {
    programType: 'Курс',
    diplomas: courseDiplomas
  }
]

const OurDiplomasAndCertificates = () => {
  const ourDiplomasAndCertificatesClasses = [
    stls.legalSection,
    stls.diplomasAndCertificates
  ]

  return (
    <section className={ourDiplomasAndCertificatesClasses.join(' ')}>
      <h2 className={stls.subHeading}>Выдаваемые дипломы и сертификаты</h2>
      <p>
        Мы производим обучение на основании государственной лицензии №041221.
        После окончания обучения в Moscow Business Academy Вы получите диплом о
        профессиональной переподготовке установленного образца, диплом академии
        и международный диплом Supplement, которые можно добавить в портфолио и
        показать работодателю.
      </p>
      {diplomasBasedOnProgram.map(({ programType, diplomas }, idx) => (
        <Accordion
          key={idx}
          title={programType}
          accordionContent={diplomas}
          isPdf={true}
        />
      ))}
      <Script src='/assets/js/accordion.js' strategy='lazyOnload' />
    </section>
  )
}

export default OurDiplomasAndCertificates
