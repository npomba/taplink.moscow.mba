import setString from '@/components/hooks/setString'
import lang from '@/data/translation/about'
import Image from 'next/image'

const UpToDateContent = () => {
  return (
    <section className='actual-section no-line'>
      <div className='section-pl'>
        <h2>{setString(lang.uptodateTitle)}</h2>
      </div>
      <div className='actual-content'>
        <div className='actual-content-top'>
          <div className='desc'>
            {setString(lang.uptodateDicsFirst)}{' '}
            <strong className='red'>{setString(lang.uptodateDicsRed)} </strong>
            {setString(lang.uptodateDicsSecond)}
          </div>
          <div className='right-image'>
            <Image
              src={'/assets/images/actual_pic_2.jpg'}
              alt='Оператор снимает конференцию'
              width={410}
              height={635}
            />
          </div>
        </div>
        <div className='actual-bottom-image'>
          <Image
            src={'/assets/images/actual_pic_1.jpg'}
            alt='Студенты обучаются на конференции'
            width={850}
            height={366}
          />
        </div>
      </div>
      <div className='section-pl'>
        <ul className='actual-content-list'>
          <li>
            <div className='number'>2021 {setString(lang.uptodateYear)}</div>
            <p>
              {setString(lang.uptodateBenefitOneDics)} 2021{' '}
              {setString(lang.uptodateYearV2)}
            </p>
          </li>
          <li>
            <div className='number'>
              53 {setString(lang.uptodateBenefitTwoTitle)}
            </div>
            <p>{setString(lang.uptodateBenefitTwoDics)}</p>
          </li>
          <li>
            <div className='number'>
              {setString(lang.uptodateBenefitThreeTitle)}
            </div>
            <p>{setString(lang.uptodateBenefitThreeDics)}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UpToDateContent
