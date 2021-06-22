import Image from 'next/image'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'
import imageData from '@/data/images/foreignAffiliates'

const ForeignAffiliates = () => {
  return (
    <section className='branches-section section-pl'>
      <h2>{setString(lang.foreignAffiliatesTitle)}</h2>
      <p className='title-desc'>{setString(lang.foreignAffiliatesDisc)}</p>
      <div className='branches-flex'>
        <ul className='branches-images'>
          <li>
            <div className='image'>
              <Image
                src={imageData.circleOne.src}
                alt={setString(imageData.circleOne.alt)}
                width={191}
                height={191}
                priority={true}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.circleTwo.src}
                alt={setString(imageData.circleTwo.alt)}
                width={191}
                height={191}
                priority={true}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.circleThree.src}
                alt={setString(imageData.circleThree.alt)}
                width={191}
                height={191}
              />
            </div>
          </li>
          <li>
            <div className='circle'>
              <div className='number'>
                5 000 м<sup>2</sup>
              </div>
              <div className='line'></div>
              <p>{setString(lang.foreignAffiliatesSurfaceArea)}</p>
            </div>
          </li>
        </ul>
        <div className='branches-map'>
          {/*TODO: swap fixed layout with default, fix up the css for an image */}
          <Image
            src='/assets/images/branches_map-alt.png'
            alt={setString(lang.foreignAffiliatesDisc)}
            width={659}
            height={394}
            layout='fixed'
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default ForeignAffiliates
