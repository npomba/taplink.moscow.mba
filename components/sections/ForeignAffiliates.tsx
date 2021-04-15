import setString from '../hooks/setString'
import lang from '../../translation/data/index'

const ForeignAffiliates = () => {
  return (
    <section className='branches-section section-pl'>
      <h2>{setString(lang.foreignAffiliatesTitle)}</h2>
      <p className='title-desc'>{setString(lang.foreignAffiliatesDisc)}</p>
      <div className='branches-flex'>
        <ul className='branches-images'>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/campuses/campus-1.jpg'
                alt=''
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/campuses/campus-2.jpg'
                alt=''
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/campuses/campus-3.jpg'
                alt=''
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
          <img
            className='lazyload'
            data-src='/assets/images/branches_map.png'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default ForeignAffiliates
