import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import PopUpForm from '@/components/popups/Form'
import setString from '@/components/hooks/setString'
import lang from 'data/translation/about'
import imagesData from '@/data/images/teachers'

const Teachers = ({
  programTitle = null,
  programId = null,
  atStandAlonePage = false
}) => {
  return (
    <>
      <section
        className={`about-detail-section ${
          atStandAlonePage && 'about-detailt-section--stand-alone-page'
        }`}>
        <div className='section-pl'>
          <div className='title-pl'>{setString(lang.teachersTitleLabel)}</div>
          <div className='about-detail-content'>
            <h2>
              {setString(lang.teachersTitleFirst)}{' '}
              <span className='red'>{setString(lang.teachersTitleRed)} </span>
              {setString(lang.teachersTitleSecond)}
            </h2>
            <div className='text'>{setString(lang.teachersDics)}</div>
            <div className='dobble-images about-detail-images'>
              <div className='image pic-1'>
                <Image
                  src={imagesData.circleSpeakerOne.src}
                  alt={setString(imagesData.circleSpeakerOne.alt)}
                  width={425}
                  height={422}
                  layout='responsive'
                />
              </div>
              <div className='image pic-2'>
                <Image
                  src={imagesData.circleSpeakerTwo.src}
                  alt={setString(imagesData.circleSpeakerTwo.alt)}
                  width={236}
                  height={236}
                  layout='responsive'
                />
              </div>
            </div>
            <ul className='about-detail-list'>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check.svg' />
                </div>
                <div>
                  <h5>{setString(lang.teachersListItemTitle)}</h5>
                  <p>{setString(lang.teachersListItemDisc)}</p>
                </div>
              </li>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check.svg' />
                </div>
                <div>
                  <h5>{setString(lang.teachersListItemTitleSecond)}</h5>
                  <p>{setString(lang.teachersListItemDiscSecond)}</p>
                </div>
              </li>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check.svg' />
                </div>
                <div>
                  <h5>{setString(lang.teachersListItemTitleThird)}</h5>
                  <p>{setString(lang.teachersListItemDiscThird)}</p>
                </div>
              </li>
            </ul>
            <h3>{setString(lang.teachersProsTitle)}</h3>
          </div>
        </div>
        <ul className='about-teachers-list'>
          <li>
            <div className='about-teachers-block'>
              <div className='image'>
                <Image
                  src='/assets/images/teachers/teacher-1.jpg'
                  alt={setString(lang.teachersTeacherOneTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                />
              </div>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherOneTitle)}
                </div>
                <p>{setString(lang.teachersTeacherOneDics)}</p>
                {/* <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a> */}
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <div className='image'>
                <Image
                  src='/assets/images/teachers/teacher-2.jpg'
                  alt={setString(lang.teachersTeacherTwoTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                />
              </div>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherTwoTitle)}
                </div>
                <p>{setString(lang.teachersTeacherTwoDics)}</p>
                {/* <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a> */}
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <div className='image'>
                <Image
                  src='/assets/images/teachers/teacher-3.jpg'
                  alt={setString(lang.teachersTeacherThreeTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                />
              </div>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherThreeTitle)}
                </div>
                <p>{setString(lang.teachersTeacherThreeDics)}</p>
                {/* <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a> */}
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <div className='image'>
                <Image
                  src='/assets/images/teachers/teacher-4.jpg'
                  alt={setString(lang.teachersTeacherFourTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                />
              </div>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherFourTitle)}
                </div>
                <p>{setString(lang.teachersTeacherFourDics)}</p>
                {/* <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a> */}
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <div className='image'>
                <Image
                  src='/assets/images/teachers/teacher-5.jpg'
                  alt={setString(lang.teachersTeacherFiveTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                />
              </div>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherFiveTitle)}
                </div>
                <p>{setString(lang.teachersTeacherFiveDics)}</p>
                {/* <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a> */}
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <div className='image'>
                <Image
                  src='/assets/images/teachers/teacher-6.jpg'
                  alt={setString(lang.teachersTeacherSixTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                />
              </div>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherSixTitle)}
                </div>
                <p>{setString(lang.teachersTeacherSixDics)}</p>
                {/* <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a> */}
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <div className='image'>
                <Image
                  src='/assets/images/teachers/teacher-7.jpg'
                  alt={setString(lang.teachersTeacherSevenTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                />
              </div>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherSevenTitle)}
                </div>
                <p>{setString(lang.teachersTeacherSevenDics)}</p>
                {/* <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a> */}
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <div className='image'>
                <Image
                  src='/assets/images/teachers/teacher-8.jpg'
                  alt={setString(lang.teachersTeacherEightTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                />
              </div>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherEightTitle)}
                </div>
                <p>{setString(lang.teachersTeacherEightDics)}</p>
                {/* <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a> */}
              </div>
            </div>
          </li>
        </ul>
        <div className='about-teachers-link'>
          <Popup
            trigger={
              <button className='button'>
                {setString(lang.teachersCtaBtn)}
              </button>
            }
            modal
            nested>
            {close => (
              <PopUpForm
                programId={programId}
                programTitle={programTitle}
                closePopUpForm={close}
                title={setString(lang.teachersPopupFormTitle)}
                disc={setString(lang.teachersPopupFormDics)}
              />
            )}
          </Popup>
        </div>
      </section>
    </>
  )
}

export default Teachers
