import Image from 'next/image'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'
import imageData from '@/components/images/data/conferencesInEurope'

const ConferencesInEurope = () => {
  return (
    <section className='organization-section section-pl'>
      <div className='circle'></div>
      <div className='organization-flex'>
        <div className='organization-text'>
          <h2>
            {setString(lang.orgTitleFirst)}{' '}
            <span className='red'>{setString(lang.orgTitleSecond)}</span>
          </h2>
          <p className='title-desc'>{setString(lang.orgDisc)}</p>
          <div className='image'>
            <Image
              src={imageData.shorterImage.src}
              alt={setString(imageData.shorterImage.alt)}
              width={623}
              height={364}
              layout='responsive'
            />
          </div>
        </div>
        <div className='organization-image'>
          <div className='image'>
            <Image
              src={imageData.higherImage.src}
              alt={setString(imageData.higherImage.alt)}
              width={415}
              height={690}
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConferencesInEurope
