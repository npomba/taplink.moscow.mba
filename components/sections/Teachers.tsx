import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import PopupForm from '@/components/popups/PopupForm'
import SetString from '@/components/hooks/SetString'
import lang from 'data/translation/about'
import imagesData from '@/data/images/teachers'
import { base64pixel } from '@/config/index'
import stls from '@/styles/modules/Teachers.module.sass'

const Teachers = ({
  programTitle = null,
  programId = null,
  atStandAlonePage = false
}) => {
  const detailSectionClasses = [stls.aboutDetailSection]

  if (atStandAlonePage) detailSectionClasses.push(stls.standalonePage)

  return (
    <>
      <section className={detailSectionClasses.join(' ')}>
        <div className={stls.sectionPl}>
          <div className={stls.titlePl}>
            {SetString(lang.teachersTitleLabel)}
          </div>
          <div className={stls.aboutDetailContent}>
            <h2>
              {SetString(lang.teachersTitleFirst)}{' '}
              <span className='red'>{SetString(lang.teachersTitleRed)} </span>
              {SetString(lang.teachersTitleSecond)}
            </h2>
            <div className={stls.text}>{SetString(lang.teachersDics)}</div>
            <div className={`${stls.dobbleImages} ${stls.aboutDetailImages}`}>
              <div className={`${stls.image} ${stls.pic1}`}>
                <Image
                  src={imagesData.circleSpeakerOne.src}
                  alt={SetString(imagesData.circleSpeakerOne.alt)}
                  width={425}
                  height={422}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div className={`${stls.image} ${stls.pic2}`}>
                <Image
                  src={imagesData.circleSpeakerTwo.src}
                  alt={SetString(imagesData.circleSpeakerTwo.alt)}
                  width={236}
                  height={236}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
            </div>
            <ul className={stls.aboutDetailList}>
              <li>
                <div className={stls.circle}>
                  <img src='/assets/images/icon_check.svg' />
                </div>
                <div>
                  <h5>{SetString(lang.teachersListItemTitle)}</h5>
                  <p>{SetString(lang.teachersListItemDisc)}</p>
                </div>
              </li>
              <li>
                <div className={stls.circle}>
                  <img src='/assets/images/icon_check.svg' />
                </div>
                <div>
                  <h5>{SetString(lang.teachersListItemTitleSecond)}</h5>
                  <p>{SetString(lang.teachersListItemDiscSecond)}</p>
                </div>
              </li>
              <li>
                <div className={stls.circle}>
                  <img src='/assets/images/icon_check.svg' />
                </div>
                <div>
                  <h5>{SetString(lang.teachersListItemTitleThird)}</h5>
                  <p>{SetString(lang.teachersListItemDiscThird)}</p>
                </div>
              </li>
            </ul>
            <h3>{SetString(lang.teachersProsTitle)}</h3>
          </div>
        </div>
        <ul className={stls.aboutTeachersList}>
          <li>
            <div className={stls.aboutTeachersBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-1.jpg'
                  alt={SetString(lang.teachersTeacherOneTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherOneTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherOneDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.aboutTeachersBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-2.jpg'
                  alt={SetString(lang.teachersTeacherTwoTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherTwoTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherTwoDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.aboutTeachersBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-3.jpg'
                  alt={SetString(lang.teachersTeacherThreeTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherThreeTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherThreeDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.aboutTeachersBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-4.jpg'
                  alt={SetString(lang.teachersTeacherFourTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherFourTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherFourDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.aboutTeachersBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-5.jpg'
                  alt={SetString(lang.teachersTeacherFiveTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherFiveTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherFiveDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.aboutTeachersBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-6.jpg'
                  alt={SetString(lang.teachersTeacherSixTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherSixTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherSixDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.aboutTeachersBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-7.jpg'
                  alt={SetString(lang.teachersTeacherSevenTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherSevenTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherSevenDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.aboutTeachersBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-8.jpg'
                  alt={SetString(lang.teachersTeacherEightTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherEightTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherEightDics)}</p>
              </div>
            </div>
          </li>
        </ul>
        <div className='about-teachers-link'>
          <Popup
            trigger={
              <button className='button'>
                {SetString(lang.teachersCtaBtn)}
              </button>
            }
            modal
            nested>
            {close => (
              <PopupForm
                programId={programId}
                programTitle={programTitle}
                closePopUpForm={close}
                title={SetString(lang.teachersPopupFormTitle)}
                disc={SetString(lang.teachersPopupFormDics)}
              />
            )}
          </Popup>
        </div>
      </section>
    </>
  )
}

export default Teachers
