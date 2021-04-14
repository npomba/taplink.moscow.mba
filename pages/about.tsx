import Head from 'next/head'
import Link from 'next/link'

import setString from '../components/hooks/setString'
import lang from '../translation/data/about'
import langIndex from '../translation/data/index'
import langMenu from '../translation/data/menu'
import langHeader from '../translation/data/header'
import langMonths from '../translation/data/months'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

const about = () => {
  // useEffect(() => {
  //   loadJs(
  //     [
  //       '/assets/js/slick.min.js',
  //       '/assets/js/lazysizes.min.js',
  //       '/assets/js/jquery.magnific-popup.min.js',
  //       '/assets/js/myjs.js',
  //     ],
  //     {
  //       async: false,
  //     }
  //   )
  // }, [])

  return (
    <>
      <Head>
        <title>{setString(lang.title)}</title>
      </Head>

      {/* jumbotron-section */}
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
                  {setString(langIndex.headerSubtitle)}
                </div>
              </div>
            </div>
            <Link href='/programs' locale='ru'>
              <a className='jumbotron-squad'>
                <p>{setString(langIndex.redCubeLink)}</p>
                <div className='arrow'>
                  <img src='/assets/images/arrow_diagonal.svg' alt='' />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <div className='container'>
        {/* about-section */}
        <section className='about-section section-pl'>
          <div className='title-pl'>{setString(langIndex.aboutTitle)}</div>
          <div className='about-flex'>
            <div className='title-desc'>
              <p>{setString(langIndex.aboutTxtFirst)}</p>
              <p>{setString(langIndex.aboutTxtSecond)}</p>
            </div>
            <ul className='about-list'>
              <li>
                <div className='number'>
                  {setString(langIndex.aboutBenefitTitleFirst)}
                </div>
                <p>{setString(langIndex.aboutBenefitDicsFirst)}</p>
              </li>
              <li>
                <div className='number'>9000+</div>
                <p>{setString(langIndex.aboutBenefitDicsSecond)}</p>
              </li>
              <li>
                <div className='number'>25%</div>
                <p>{setString(langIndex.aboutBenefitDicsThird)}</p>
              </li>
              <li>
                <div className='number'>150+</div>
                <p>{setString(langIndex.aboutBenefitDicsFourth)}</p>
              </li>
            </ul>
          </div>
        </section>

        {/* organization-section */}
        <section className='organization-section section-pl'>
          <div className='circle'></div>
          <div className='organization-flex'>
            <div className='organization-text'>
              <h2>
                {setString(langIndex.orgTitleFirst)}{' '}
                <span className='red'>
                  {setString(langIndex.orgTitleSecond)}
                </span>
              </h2>
              <p className='title-desc'>{setString(langIndex.orgDisc)}</p>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/organization_1.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='organization-image'>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/organization_2.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>

        {/* branches-section */}
        <section className='branches-section section-pl'>
          <h2>{setString(langIndex.foreignAffiliatesTitle)}</h2>
          <p className='title-desc'>
            {setString(langIndex.foreignAffiliatesDisc)}
          </p>
          <div className='branches-flex'>
            <ul className='branches-images'>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/simple_image.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/campuses/simple_image.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/simple_image.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='circle'>
                  <div className='number'>
                    5 000 м<sup>2</sup>
                  </div>
                  <div className='line'></div>
                  <p>{setString(langIndex.foreignAffiliatesSurfaceArea)}</p>
                </div>
              </li>
            </ul>
            <div className='branches-map'>
              <img
                className='lazyload'
                data-src='/assets/images/branches_map.png'
                alt=''
              />
            </div>
          </div>
        </section>

        {/* world-mba-section */}
        <section className='world-mba-section'>
          <div className='world-mba-flex'>
            <div className='world-mba-text'>
              <h2>{setString(langIndex.mbaWorldTitle)}</h2>
              <p className='title-desc'>{setString(langIndex.mbaWorldDics)}</p>
            </div>
            <div className='world-mba-image'>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/world_mba_1.jpg'
                  alt=''
                />
              </div>
              <div className='info'>
                <span>{setString(langIndex.mbaWorldMoreThan)} </span>
                <strong>20</strong>
                <span>{setString(langIndex.mbaWorldCountries)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* clients-section */}
        <section className='clients-section'>
          <div className='section-pl'>
            <div className='clients-text'>
              <h2>
                {setString(langIndex.corporateClientsTitleTop)} <br />
                {setString(langIndex.corporateClientsTitleBottom)}
              </h2>
              <p>{setString(langIndex.corporateClientsDics)}</p>
            </div>
          </div>
          <div className='clients-slider js-slick'>
            <ul className='clients-slider-block'>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_1.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_2.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_3.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_4.jpg'
                    alt=''
                  />
                </div>
              </li>
            </ul>
            <ul className='clients-slider-block'>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_5.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_6.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_7.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_8.jpg'
                    alt=''
                  />
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* about-detail-section */}
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

        {/* actual-section */}
        <section className='actual-section no-line'>
          <div className='section-pl'>
            <h2>{setString(lang.uptodateTitle)}</h2>
          </div>
          <div className='actual-content'>
            <div className='actual-content-top'>
              <div className='desc'>
                {setString(lang.uptodateDicsFirst)}{' '}
                <strong className='red'>
                  {setString(lang.uptodateDicsRed)}{' '}
                </strong>
                {setString(lang.uptodateDicsSecond)}
              </div>
              <div className='right-image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/actual_pic_2.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='actual-bottom-image'>
              <img
                className='lazyload'
                data-src='/assets/images/actual_pic_1.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='section-pl'>
            <ul className='actual-content-list'>
              <li>
                <div className='number'>
                  2021 {setString(lang.uptodateYear)}
                </div>
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

        {/* accreditations-section */}
        <section className='accreditations-section small-mb'>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/accreditations_pic_1.jpg'
              alt=''
            />
          </div>
          <div className='accreditations-content'>
            <h2>{setString(lang.accreditationTitle)}</h2>
            <div className='title-desc'>
              {setString(lang.accreditationDics)}
            </div>
            <ul className='accreditations-list'>
              <li>{setString(lang.accreditationItemOne)}</li>
              <li>{setString(lang.accreditationItemTwo)}</li>
            </ul>
            <a href='' className='accreditations-link'>
              <div className='pic'>
                <img src='/assets/images/icon_list.svg' alt='' />
              </div>
              <span>{setString(lang.accreditationLicenseLink)}</span>
            </a>
          </div>
        </section>

        {/* support-section */}
        <section className='support-section'>
          <h2>{setString(langIndex.helpToChooseTitle)}</h2>
          <div className='text'>{setString(langIndex.helpToChooseDics)}</div>
          <form action='#' method='post' className='simple-form support-form'>
            <div className='inputs-flex'>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>
                  {setString(langIndex.inputName)}
                </div>
              </div>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>
                  {setString(langIndex.inputPhone)}
                </div>
              </div>
              <div className='input-block width-33'>
                <button type='submit' className='button white-button'>
                  {setString(langIndex.inputSubmit)}
                </button>
              </div>
            </div>
            <div className='personal-datas'>
              {setString(langIndex.privacyPolicyFirst)}{' '}
              <a href=''>{setString(langIndex.privacyPolicySecond)}</a>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default about
