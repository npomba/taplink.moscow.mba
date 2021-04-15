import setString from '../hooks/setString'
import lang from '../../translation/data/index'
import Link from 'next/link'

const JumbotronMain = () => {
  return (
    <section className='jumbotron-section main-jumbotron'>
      <div className='image'>
        <img src='/assets/images/jumbotron_1.jpg' alt='' />
      </div>
      <div className='container'>
        <div className='jumbotron-content'>
          <div className='jumbotron-flex'>
            <div className='jumbotron-text'>
              <div className='image-text'>
                <img src='/assets/images/mba_text.png' alt='' />
              </div>
              <h1>Moscow Business Academy</h1>
              <div className='desc main-desc'>
                {setString(lang.headerSubtitle)}
              </div>
            </div>
          </div>
          <Link href='/programs' locale='ru'>
            <a className='jumbotron-squad'>
              <p>{setString(lang.redCubeLink)}</p>
              <div className='arrow'>
                <img src='/assets/images/arrow_diagonal.svg' alt='' />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JumbotronMain
