import stls from '@/styles/components/sections/MemberOfRabe.module.sass'
import ImageContainer from '@/components/general/ImageContainer'
import rabeP1 from '@/public/legaldocuments/rabe-p1.jpg'
import rabeP1HighRes from '@/public/legaldocuments/rabe-p1-high-res.jpg'

const rabeImage = {
  regularRes: rabeP1,
  highRes: rabeP1HighRes,
  name: 'Свидетельство РАБО',
  width: 342,
  height: 483
}

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
      <ImageContainer
        image={rabeImage}
        imageWidth={rabeImage.width}
        imageHeight={rabeImage.height}
      />
    </section>
  )
}

export default MemberOfRABE
