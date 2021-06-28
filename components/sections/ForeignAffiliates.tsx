import Image from 'next/image'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import imageData from '@/data/images/foreignAffiliates'
import { base64pixel } from '@/config/index'

const ForeignAffiliates = () => {
  return (
    <section className='branches-section section-pl'>
      <h2>{SetString(lang.foreignAffiliatesTitle)}</h2>
      <p className='title-desc'>{SetString(lang.foreignAffiliatesDisc)}</p>
      <div className='branches-flex'>
        <ul className='branches-images'>
          <li>
            <div className='image'>
              <Image
                src={imageData.circleOne.src}
                alt={SetString(imageData.circleOne.alt)}
                width={191}
                height={191}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.circleTwo.src}
                alt={SetString(imageData.circleTwo.alt)}
                width={191}
                height={191}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.circleThree.src}
                alt={SetString(imageData.circleThree.alt)}
                width={191}
                height={191}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li>
            <div className='circle'>
              <div className='number'>
                5 000 м<sup>2</sup>
              </div>
              <div className='line'></div>
              <p>{SetString(lang.foreignAffiliatesSurfaceArea)}</p>
            </div>
          </li>
        </ul>
        <div className='branches-map'>
          {/*TODO: swap fixed layout with default, fix up the css for an image */}
          <Image
            src='/assets/images/branches_map-alt.png'
            alt={SetString(lang.foreignAffiliatesDisc)}
            width={659}
            height={394}
            layout='fixed'
            placeholder='blur'
            blurDataURL={base64pixel}
          />
        </div>
      </div>
    </section>
  )
}

export default ForeignAffiliates
