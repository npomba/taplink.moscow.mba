import Link from 'next/link'
import Image from 'next/image'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'
import langMenu from '@/data/translation/menu'
import imageData from '@/data/images/executive'

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
          <Link href='/programs/executive/'>
            <a className='button empty-button'>
              {setString(lang.learnMoreBtn)}
            </a>
          </Link>
        </div>
        <div className='dobble-images executive-images'>
          <div className='image pic-1'>
            <Image
              src={imageData.largerCircle.src}
              alt={setString(imageData.largerCircle.alt)}
              width={401}
              height={400}
            />
          </div>
          <div className='image pic-2'>
            <Image
              src={imageData.smallerCircle.src}
              alt={setString(imageData.smallerCircle.alt)}
              width={221}
              height={221}
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
