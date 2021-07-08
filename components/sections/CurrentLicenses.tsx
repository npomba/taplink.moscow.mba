import stls from '@/styles/components/sections/CurrentLicenses.module.sass'
import PdfDocument from '@/components/general/PdfDocument'
import CheckLicenses from '@/components/sections/CheckLicenses'

const licenses = [
  {
    fileSrc: '/legaldocuments/doc-1.pdf',
    fileName: 'Лицензия (стр. 1)',
    pageNum: 1,
    landscape: false
  },
  {
    fileSrc: '/legaldocuments/doc-1.pdf',
    fileName: 'Лицензия (стр. 2)',
    pageNum: 2,
    landscape: false
  },
  {
    fileSrc: '/legaldocuments/doc-2.pdf',
    fileName: 'Положение № 1.1',
    pageNum: 1,
    landscape: false
  }
]

const CurrentLicenses = () => {
  const currentLicensesClasses = [stls.legalSection, stls.currentLicenses]

  return (
    <section className={currentLicensesClasses.join(' ')}>
      <h2 className={stls.subHeading}>Действующие лицензии</h2>
      <p>
        Лицензия Департамента образования города Москвы на осуществление
        образовательной деятельности:
      </p>
      <div className={stls.pdfContainer}>
        {licenses.map((license, idx) => (
          <PdfDocument
            key={license.fileSrc + idx}
            fileSrc={license.fileSrc}
            fileName={license.fileName}
            pageNum={license.pageNum}
            landscape={license.landscape}
          />
        ))}
      </div>
      <CheckLicenses />
    </section>
  )
}

export default CurrentLicenses
