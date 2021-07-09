import stls from '@/styles/components/sections/Accreditation.module.sass'
import Image from 'next/image'
import imgData from '@/data/images/accreditation'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/about'
import { IconPaperCorner } from '@/components/icons'
import { base64pixel } from '@/config/index'

const Accreditation = () => {
  return (
    <section className='accreditations-section small-mb'>
      <div className='image'>
        <Image
          src={imgData.accreditationImageAlt.src}
          alt={SetString(imgData.accreditationImageAlt.alt)}
          width={644}
          height={664}
          placeholder='blur'
          blurDataURL={base64pixel}
          layout='responsive'
        />
      </div>
      <div className='accreditations-content'>
        <h2>{SetString(lang.accreditationTitle)}</h2>
        <div className='title-desc'>{SetString(lang.accreditationDics)}</div>
        <ul className='accreditations-list'>
          <li>{SetString(lang.accreditationItemOne)}</li>
          <li>{SetString(lang.accreditationItemTwo)}</li>
        </ul>
        <a
          href='https://isga.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
          target='_blank'
          rel='noopener noreferrer'
          className='accreditations-link'>
          <div className='pic'>
            <IconPaperCorner fill={'#C7C7C7'} />
          </div>
          <span>{SetString(lang.accreditationLicenseLink)}</span>
        </a>
      </div>
    </section>
  )
}

export default Accreditation
