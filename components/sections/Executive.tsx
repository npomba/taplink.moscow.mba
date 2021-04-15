import setString from '../hooks/setString'
import lang from '../../translation/data/index'
import langMenu from '../../translation/data/menu'

const Executive = () => {
  return (
    <section className='executive-section'>
      <div className='executive-flex'>
        <div className='executive-detail'>
          <div className='label'>
            <span>Premium</span>
          </div>
          <h2>Executive MBA</h2>
          <p className='title-desc'>{setString(lang.executiveMBADicsFirst)}</p>
          <p className='title-desc'>{setString(lang.executiveMBADicsSecond)}</p>
          <ul className='count-list'>
            <li>
              1 {setString(lang.executiveMBAYear)} 6{' '}
              {setString(lang.executiveMBAMonth)}
            </li>
            <li>2 {setString(lang.executiveOfflineModules)}</li>
            <li>27 {setString(langMenu.qtSubjects)}</li>
          </ul>
          <div className='price'>
            {setString(langMenu.price)}:{' '}
            <i className='new-price'> 1 900 000 Р.</i>
            <i className='old-price'> 2 500 000 Р.</i>
          </div>
          <a href='' className='button empty-button'>
            {setString(lang.learnMoreBtn)}
          </a>
        </div>
        <div className='dobble-images executive-images'>
          <div className='image pic-1'>
            <img
              className='lazyload'
              data-src='/assets/images/executive_pic_1.jpg'
              alt=''
            />
          </div>
          <div className='image pic-2'>
            <img
              className='lazyload'
              data-src='/assets/images/executive_pic_2.jpg'
              alt=''
            />
          </div>
          <div className='count'>
            <strong>200+</strong>
            <span>{setString(lang.graduates)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Executive
