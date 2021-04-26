import Link from 'next/link'
import Image from 'next/image'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'

const JumbotronMain = () => {
  return (
    <section className='jumbotron-section main-jumbotron'>
      <div className='image'>
        <Image src='/assets/images/jumbotron_1.jpg' layout='fill' />
      </div>
      <div className='container'>
        <div className='jumbotron-content'>
          <div className='jumbotron-flex'>
            <div className='jumbotron-text'>
              <div className='image-text'>
                <Image
                  src='/assets/images/mba_text.png'
                  alt='Moscow Business Academy'
                  width={482}
                  height={146}
                />
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
                <img src='/assets/images/arrow_diagonal.svg' />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JumbotronMain
