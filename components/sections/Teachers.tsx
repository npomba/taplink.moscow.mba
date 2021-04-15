import setString from '../../components/hooks/setString'
import lang from '../../translation/data/about'

const Teachers = () => {
  return (
    <>
      <section className='about-detail-section'>
        <div className='section-pl'>
          <div className='title-pl'>{setString(lang.aboutTitle)}</div>
          <div className='about-detail-content'>
            <h2>
              {setString(lang.teachersTitleFirst)}{' '}
              <span className='red'>{setString(lang.teachersTitleRed)} </span>
              {setString(lang.teachersTitleSecond)}
            </h2>
            <div className='text'>{setString(lang.teachersDics)}</div>
            <div className='dobble-images about-detail-images'>
              <div className='image pic-1'>
                <img
                  className='lazyload'
                  data-src='/assets/images/speaker_1.jpg'
                  alt=''
                />
              </div>
              <div className='image pic-2'>
                <img
                  className='lazyload'
                  data-src='/assets/images/speaker_2.jpg'
                  alt=''
                />
              </div>
            </div>
            <ul className='about-detail-list'>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check.svg' alt='' />
                </div>
                <div>
                  <h5>{setString(lang.teachersListItemTitle)}</h5>
                  <p>{setString(lang.teachersListItemDisc)}</p>
                </div>
              </li>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check.svg' alt='' />
                </div>
                <div>
                  <h5>{setString(lang.teachersListItemTitleSecond)}</h5>
                  <p>{setString(lang.teachersListItemDiscSecond)}</p>
                </div>
              </li>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check.svg' alt='' />
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
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/teacher_1.jpg'
                  alt=''
                />
              </a>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherOneTitle)}
                </div>
                <p>{setString(lang.teachersTeacherOneDics)}</p>
                <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/teacher_2.jpg'
                  alt=''
                />
              </a>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherTwoTitle)}
                </div>
                <p>{setString(lang.teachersTeacherTwoDics)}</p>
                <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/teacher_3.jpg'
                  alt=''
                />
              </a>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherThreeTitle)}
                </div>
                <p>{setString(lang.teachersTeacherThreeDics)}</p>
                <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/teacher_4.jpg'
                  alt=''
                />
              </a>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherFourTitle)}
                </div>
                <p>{setString(lang.teachersTeacherFourDics)}</p>
                <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/teacher_3.jpg'
                  alt=''
                />
              </a>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherFiveTitle)}
                </div>
                <p>{setString(lang.teachersTeacherFiveDics)}</p>
                <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/teacher_4.jpg'
                  alt=''
                />
              </a>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherSixTitle)}
                </div>
                <p>{setString(lang.teachersTeacherSixDics)}</p>
                <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/teacher_1.jpg'
                  alt=''
                />
              </a>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherSevenTitle)}
                </div>
                <p>{setString(lang.teachersTeacherSevenDics)}</p>
                <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className='about-teachers-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/teacher_2.jpg'
                  alt=''
                />
              </a>
              <div>
                <div className='name'>
                  {setString(lang.teachersTeacherEightTitle)}
                </div>
                <p>{setString(lang.teachersTeacherEightDics)}</p>
                <a href='' className='link'>
                  <span>{setString(lang.teachersBiographyLink)}</span>
                  <img src='/assets/images/arrow_right.svg' alt='' />
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className='about-teachers-link'>
          <a href='' className='button'>
            {setString(lang.teachersCtaBtn)}
          </a>
        </div>
      </section>
    </>
  )
}

export default Teachers
