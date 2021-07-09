import stls from '@/styles/components/sections/CurrentLicenses.module.sass'
import ImageContainer from '@/components/general/ImageContainer'
import CheckLicenses from '@/components/sections/CheckLicenses'
import licenseP1 from '@/public/legaldocuments/license-p1.jpg'
import licenseP1HighRes from '@/public/legaldocuments/license-p1-high-res.jpg'
import licenseP2HighRes from '@/public/legaldocuments/license-p2-high-res.jpg'
import charterP1 from '@/public/legaldocuments/charter-p1.jpg'
import charterP1HighRes from '@/public/legaldocuments/charter-p1-high-res.jpg'

const licenses = [
  {
    regularRes: licenseP1,
    highRes: licenseP1HighRes,
    name: 'Лицензия (стр. 1)',
    width: 342,
    height: 508
  },
  {
    regularRes: licenseP2HighRes,
    highRes: licenseP2HighRes,
    name: 'Лицензия (стр. 2)',
    width: 342,
    height: 508
  },
  {
    regularRes: charterP1,
    highRes: charterP1HighRes,
    name: 'Положение № 1.1',
    width: 342,
    height: 508
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
      <div className={stls.licensesContainer}>
        {licenses.map((license, idx) => (
          <ImageContainer
            key={license.name + idx}
            image={license}
            imageWidth={license.width}
            imageHeight={license.height}
          />
        ))}
      </div>
      <CheckLicenses />
    </section>
  )
}

export default CurrentLicenses
