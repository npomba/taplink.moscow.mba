import stls from '@/styles/modules/sections/ConferencesInEurope.module.sass'
import Image from 'next/image'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import imageData from '@/data/images/conferencesInEurope'
import { base64pixel } from '@/config/index'

const ConferencesInEurope = () => {
  return (
    <section className='organization-section section-pl'>
      <div className='circle'></div>
      <div className='organization-flex'>
        <div className='organization-text'>
          <h2>
            {SetString(lang.orgTitleFirst)}{' '}
            <span className='red'>{SetString(lang.orgTitleSecond)}</span>
          </h2>
          <p className='title-desc'>{SetString(lang.orgDisc)}</p>
          <div className='image'>
            <Image
              src={imageData.shorterImage.src}
              alt={SetString(imageData.shorterImage.alt)}
              width={623}
              height={364}
              layout='responsive'
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
        </div>
        <div className='organization-image'>
          <div className='image'>
            <Image
              src={imageData.higherImage.src}
              alt={SetString(imageData.higherImage.alt)}
              width={415}
              height={690}
              layout='responsive'
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConferencesInEurope
