import Image from 'next/image'
import imgData from '@/data/images/accreditation'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/about'

const Accreditation = () => {
  return (
    <section className='accreditations-section small-mb'>
      <div className='image'>
        <Image
          src={imgData.accreditationImageAlt.src}
          alt={setString(imgData.accreditationImageAlt.alt)}
          width={644}
          height={664}
          layout='responsive'
        />
      </div>
      <div className='accreditations-content'>
        <h2>{setString(lang.accreditationTitle)}</h2>
        <div className='title-desc'>{setString(lang.accreditationDics)}</div>
        <ul className='accreditations-list'>
          <li>{setString(lang.accreditationItemOne)}</li>
          <li>{setString(lang.accreditationItemTwo)}</li>
        </ul>
        <a
          href='https://isga.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
          target='_blank'
          rel='noopener noreferrer'
          className='accreditations-link'
        >
          <div className='pic'>
            <img src='/assets/images/icon_list.svg' alt='' />
          </div>
          <span>{setString(lang.accreditationLicenseLink)}</span>
        </a>
      </div>
    </section>
  )
}

export default Accreditation
