import setString from '../hooks/setString'
import lang from '../../translation/data/index'

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
            <img
              className='lazyload'
              data-src='/assets/images/organization_1.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='organization-image'>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/organization_2.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConferencesInEurope
