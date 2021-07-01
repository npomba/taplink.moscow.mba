import stls from '@/styles/components/sections/StudentsInternational.module.sass'
import Image from 'next/image'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import imageData from '@/data/images/studentsInternational'
import { base64pixel } from '@/config/index'

const StudentsInternational = () => {
  return (
    <section className='world-mba-section'>
      <div className='world-mba-flex'>
        <div className='world-mba-text'>
          <h2>{SetString(lang.mbaWorldTitle)}</h2>
          <p className='title-desc'>{SetString(lang.mbaWorldDics)}</p>
        </div>
        <div className='world-mba-image'>
          <div className='image'>
            <Image
              src={imageData.image.src}
              alt={SetString(imageData.image.alt)}
              width={769}
              height={597}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
          <div className='info'>
            <span>{SetString(lang.mbaWorldMoreThan)}</span>
            <strong>15</strong>
            <span>{SetString(lang.mbaWorldCountries)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsInternational
