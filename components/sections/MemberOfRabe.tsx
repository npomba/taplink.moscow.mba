import stls from '@/styles/components/sections/MemberOfRabe.module.sass'
import PdfDocument from '@/components/general/PdfDocument'

const MemberOfRABE = () => {
  const rabeClassNames = [stls.legalSection, stls.memberOfRabe]

  return (
    <section className={rabeClassNames.join(' ')}>
      <div className={stls.descRabe}>
        <h2 className={stls.subHeading}>Членство в РАБО</h2>
        <p>
          Moscow Business Academy является членом Российской Ассоциации
          Бизнес-образования, что подтвеждает высокий уровень образовательных
          программ.
        </p>
        <p>
          В России членство РАБО имеют ограниченное количество организаций,
          которые соответствуют требованиям качества образовательных программ.
        </p>
        <p>
          В настоящий момент за РАБО закрепился статус признанного лидера,
          инициатора и координатора программ подготовки кадров для
          предпринимательства и бизнеса.
        </p>
      </div>
      <PdfDocument
        fileSrc='/legaldocuments/doc-25.pdf'
        fileName='Свидетельство РАБО'
        pageNum={1}
      />
    </section>
  )
}

export default MemberOfRABE
