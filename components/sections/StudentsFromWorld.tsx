import setString from '../hooks/setString'
import lang from '../../translation/data/index'

const StudentsFromWorld = () => {
  return (
    <section className='world-mba-section'>
      <div className='world-mba-flex'>
        <div className='world-mba-text'>
          <h2>{setString(lang.mbaWorldTitle)}</h2>
          <p className='title-desc'>{setString(lang.mbaWorldDics)}</p>
        </div>
        <div className='world-mba-image'>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/world_mba_1.jpg'
              alt=''
            />
          </div>
          <div className='info'>
            <span>{setString(lang.mbaWorldMoreThan)}</span>
            <strong>20</strong>
            <span>{setString(lang.mbaWorldCountries)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsFromWorld
