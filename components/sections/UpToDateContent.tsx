import stls from '@/styles/components/sections/UpToDateContent.module.sass'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/about'
import Image from 'next/image'

const UpToDateContent = ({ noBottomLine = false }) => {
  const upToDateContentClasses = [stls.actualSection]

  if (noBottomLine) upToDateContentClasses.push(stls.noLine)

  return (
    <section className={upToDateContentClasses.join(' ')}>
      <div className='section-pl'>
        <h2>{SetString(lang.uptodateTitle)}</h2>
      </div>
      <div className={stls.actualContent}>
        <div className={stls.actualContentTop}>
          <div className={stls.desc}>
            {SetString(lang.uptodateDicsFirst)}{' '}
            <strong className='red'>{SetString(lang.uptodateDicsRed)} </strong>
            {SetString(lang.uptodateDicsSecond)}
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
        <div className={stls.actualRightImage}>
          <Image
            src={'/assets/images/actual_pic_2.jpg'}
            alt='Оператор снимает конференцию'
            width={410}
            height={635}
          />
        </div>
      </div>
      <div className='section-pl'>
        <ul className={stls.actualContentList}>
          <li>
            <div className={stls.number}>
              2021 {SetString(lang.uptodateYear)}
            </div>
            <p>
              {SetString(lang.uptodateBenefitOneDics)} 2021{' '}
              {SetString(lang.uptodateYearV2)}
            </p>
          </li>
          <li>
            <div className={stls.number}>
              53 {SetString(lang.uptodateBenefitTwoTitle)}
            </div>
            <p>{SetString(lang.uptodateBenefitTwoDics)}</p>
          </li>
          <li>
            <div className={stls.number}>
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
