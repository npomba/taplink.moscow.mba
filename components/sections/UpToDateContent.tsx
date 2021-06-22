import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/about'
import Image from 'next/image'

const UpToDateContent = () => {
  return (
    <section className='actual-section no-line'>
      <div className='section-pl'>
        <h2>{SetString(lang.uptodateTitle)}</h2>
      </div>
      <div className='actual-content'>
        <div className='actual-content-top'>
          <div className='desc'>
            {SetString(lang.uptodateDicsFirst)}{' '}
            <strong className='red'>{SetString(lang.uptodateDicsRed)} </strong>
            {SetString(lang.uptodateDicsSecond)}
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
            <div className='number'>2021 {SetString(lang.uptodateYear)}</div>
            <p>
              {SetString(lang.uptodateBenefitOneDics)} 2021{' '}
              {SetString(lang.uptodateYearV2)}
            </p>
          </li>
          <li>
            <div className='number'>
              53 {SetString(lang.uptodateBenefitTwoTitle)}
            </div>
            <p>{SetString(lang.uptodateBenefitTwoDics)}</p>
          </li>
          <li>
            <div className='number'>
              {SetString(lang.uptodateBenefitThreeTitle)}
            </div>
            <p>{SetString(lang.uptodateBenefitThreeDics)}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UpToDateContent
