import stls from '@/styles/modules/UpToDateContent.module.sass'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/about'
import Image from 'next/image'

const UpToDateContent = () => {
  return (
    <section className={[stls.actualSection, stls.noLine].join(' ')}>
      <div className='section-pl'>
        <h2>{setString(lang.uptodateTitle)}</h2>
      </div>
      <div className={stls.actualContent}>
        <div className={stls.actualContentTop}>
          <div className={stls.desc}>
            {setString(lang.uptodateDicsFirst)}{' '}
            <strong className='red'>{setString(lang.uptodateDicsRed)} </strong>
            {setString(lang.uptodateDicsSecond)}
          </div>
          
        </div>
        <div className={stls.rightImage}>
            <Image
              src={'/assets/images/actual_pic_2.jpg'}
              alt='Оператор снимает конференцию'
              width={410}
              height={635}
            />
          </div>
        <div className={stls.actualBottomImage}>
          <Image
            src={'/assets/images/actual_pic_1.jpg'}
            alt='Студенты обучаются на конференции'
            width={850}
            height={366}
          />
        </div>
      </div>
      <div className='section-pl'>
        <ul className={stls.actualContentList}>
          <li>
            <div className={stls.number}>2021 {setString(lang.uptodateYear)}</div>
            <p>
              {setString(lang.uptodateBenefitOneDics)} 2021{' '}
              {setString(lang.uptodateYearV2)}
            </p>
          </li>
          <li>
            <div className={stls.number}>
              53 {setString(lang.uptodateBenefitTwoTitle)}
            </div>
            <p>{setString(lang.uptodateBenefitTwoDics)}</p>
          </li>
          <li>
            <div className={stls.number}>
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
