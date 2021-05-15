import Link from 'next/link'
import { useRouter } from 'next/router'
// import PopulateWithPrograms from './hooks/populateWithPrograms'
import lang from '@/data/translation/header'
import langMenu from '@/data/translation/menu'
import setString from '@/components/hooks/setString'

import HeaderLangLink from '@/components/HeaderLangLink'
import Until from '@/components/dates/Until'
import Price from '@/components/prices/Price'

import useAt from '@/components/hooks/useAt'

import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import ProgramsQt from '@/components/hooks/ProgramsQt'

import { useEffect } from 'react'
import loadJs from 'loadjs'

const Header = ({ programs }) => {
  const { data } = programs.programs

  const router = useRouter()

  const at = useAt()

  useEffect(() => {
    loadJs(['/assets/js/header.js'], {
      async: false
    })
  }, [])

  return (
    <header>
      <div className='container'>
        <div className='header-top'>
          <Link href='/'>
            <a className='main-logo'>
              <span className='pic'>
                <img src='/assets/images/logo_mba.svg' alt='' />
              </span>
              <span className='text'>
                <img src='/assets/images/logo_mba_text.svg' alt='' />
              </span>
            </a>
          </Link>
          <div className='header-logos'>
            <span className='rabo'>
              <img src='/assets/images/logo_rabo.png' alt='' />
            </span>
            <span className='dep'>
              <img src='/assets/images/logo_department.png' alt='' />
            </span>
          </div>
          <div className='header-place'>
            <img src='/assets/images/marker_black.svg' alt='' />
            {setString(lang.address)}
          </div>
          <div className='header-phones'>
            <a href='tel:+7-800-500-27-47'>+7 (800) 500-27-47</a>
            <a href='tel:+7-495-149-00-20'>+7 (495) 149-00-20</a>
          </div>
          <div className='header-buter'>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div className='header-bottom'>
          <div className='header-podmenu-outer'>
            <div className='header-podmenu-toggle'>
              <div className='pic'>
                <i></i>
                <i></i>
              </div>
              <span>{setString(lang.programsBtn)}</span>
            </div>
          </div>
          <ul className='header-menu'>
            <li>
              <Link href='/about'>
                <a className={at.about ? 'red' : ''}>
                  {setString(lang.linkAbout)}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/teachers' locale='ru'>
                <a className={at.teachers ? 'red' : ''}>
                  {setString(lang.linkTeachers)}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/webinars' locale='ru'>
                <a className={at.webinars ? 'red' : ''}>
                  {setString(lang.linkWebinars)}
                </a>
              </Link>
            </li>
            {/* <li>
              <a href=''>Журнал</a>
            </li> */}
            {/* <li>
              <a href=''>Контакты</a>
            </li> */}
            <li>
              <Link href='/articles' locale='ru'>
                <a className={at.articles ? 'red' : ''}>
                  {setString(lang.linkNews)}
                </a>
              </Link>
            </li>

            {at.index || at.about ? <HeaderLangLink /> : null}
          </ul>
        </div>
      </div>
      <div className='header-podmenu'>
        <div className='container'>
          <div className='header-podmenu-flex'>
            <div className='header-podmenu-left'>
              <ul className='header-podmenu-tabs'>
                <li>
                  <Link href='/programs/mini/online' locale='ru'>
                    <a data-tab='#header-podmenu-1' className='active-tab'>
                      Mini MBA
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/programs/professional/online' locale='ru'>
                    <a data-tab='#header-podmenu-2'>Professional MBA</a>
                  </Link>
                </li>
                <li>
                  <Link href='/programs/industry/online' locale='ru'>
                    <a data-tab='#header-podmenu-3'>Industry MBA</a>
                  </Link>
                </li>
              </ul>
              <div className='header-podmenu-premium'>
                <div className='label'>
                  <span>Premium</span>
                </div>
                <Link href='/programs/executive' locale='ru'>
                  <a>Executive MBA</a>
                </Link>
              </div>
            </div>
            <div className='header-podmenu-right'>
              <ul
                id='header-podmenu-1'
                className='header-podmenu-content visible'>
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      {setString(langMenu.onlineTitle)}
                      <div className='discount'>
                        <div className='size'>-30%</div>
                        <span>
                          <Until />
                        </span>
                      </div>
                    </div>
                    <div className='directions-count'>
                      <ProgramsQt
                        programs={data}
                        type={'mini'}
                        format={'online'}
                      />{' '}
                      {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='new-price'>
                        {' '}
                        <Price
                          discount={true}
                          type={'mini'}
                          format={'online'}
                        />{' '}
                        &#8381;
                      </i>{' '}
                      <i className='old-price'>
                        {' '}
                        <Price
                          discount={false}
                          type={'mini'}
                          format={'online'}
                        />{' '}
                        &#8381;
                      </i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatRemote)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects type='mini' sum={true} />{' '}
                          {setString(langMenu.qtSubjects)}
                        </span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {/* {PopulateWithPrograms(data, 'professional', 'online')} */}
                      {data.map(item => {
                        if (
                          item.mbaTypeOfProgram === 'mini' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li key={item._id}>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                locale='ru'>
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      {setString(langMenu.blendedTitle)}
                    </div>
                    <div className='directions-count'>
                      <ProgramsQt
                        programs={data}
                        type={'mini'}
                        format={'blended'}
                      />{' '}
                      {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='simple-price'>
                        {' '}
                        <Price
                          discount={false}
                          type={'mini'}
                          format={'blended'}
                        />{' '}
                        &#8381;
                      </i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatBlended)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects type='mini' sum={true} />{' '}
                          {setString(langMenu.qtSubjects)}
                        </span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map(item => {
                        if (
                          item.mbaTypeOfProgram === 'mini' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li key={item._id}>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                locale='ru'>
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className='header-podmenu-info'>
                    {/* <div className='image'>
                      <img src='/assets/images/podmenu_info_1.jpg' alt='' />
                    </div> */}
                    <div className='name'>Mini MBA</div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_clock.svg' alt='' />
                      </div>
                      <span>
                        1 {setString(langMenu.categoryYear)} 6{' '}
                        {setString(langMenu.categoryMonth)}
                      </span>
                    </div>
                    <p>{setString(langMenu.categoryDiscMini)}</p>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_list.svg' alt='' />
                      </div>
                      <span>
                        <ProgramSubjects type='mini' subjects='base' />{' '}
                        {setString(langMenu.categoryAboutManagement)}
                      </span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img
                          src='/assets/images/icon_check_circle.svg'
                          alt=''
                        />
                      </div>
                      <span>
                        <ProgramSubjects type='mini' subjects='specialty' />{' '}
                        {setString(langMenu.categorySpecializedSubjects)}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul id='header-podmenu-2' className='header-podmenu-content'>
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      {setString(langMenu.onlineTitle)}
                      <div className='discount'>
                        <div className='size'>-25%</div>
                        <span>
                          <Until />
                        </span>
                      </div>
                    </div>
                    <div className='directions-count'>
                      <ProgramsQt
                        programs={data}
                        type={'professional'}
                        format={'online'}
                      />{' '}
                      {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='new-price'>
                        {' '}
                        <Price
                          discount={true}
                          type={'professional'}
                          format={'online'}
                        />{' '}
                        &#8381;
                      </i>{' '}
                      <i className='old-price'>
                        {' '}
                        <Price
                          discount={false}
                          type={'professional'}
                          format={'online'}
                        />{' '}
                        &#8381;
                      </i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatRemote)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects type='professional' sum={true} />{' '}
                          {setString(langMenu.qtSubjects)}
                        </span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map(item => {
                        if (
                          item.mbaTypeOfProgram === 'professional' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li key={item._id}>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                locale='ru'>
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      {setString(langMenu.blendedTitle)}
                    </div>
                    <div className='directions-count'>
                      <ProgramsQt
                        programs={data}
                        type={'professional'}
                        format={'blended'}
                      />{' '}
                      {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='simple-price'>
                        {' '}
                        <Price
                          discount={false}
                          type={'professional'}
                          format={'blended'}
                        />{' '}
                        &#8381;
                      </i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatBlended)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects type='professional' sum={true} />{' '}
                          {setString(langMenu.qtSubjects)}
                        </span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map(item => {
                        if (
                          item.mbaTypeOfProgram === 'professional' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li key={item._id}>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                locale='ru'>
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className='header-podmenu-info'>
                    {/* <div className='image'>
                      <img src='/assets/images/podmenu_info_1.jpg' alt='' />
                    </div> */}
                    <div className='name'>Professional MBA</div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_clock.svg' alt='' />
                      </div>
                      <span>
                        1 {setString(langMenu.categoryYear)} 6{' '}
                        {setString(langMenu.categoryMonth)}
                      </span>
                    </div>
                    <p>{setString(langMenu.categoryDiscProfessional)}</p>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_list.svg' alt='' />
                      </div>
                      <span>
                        <ProgramSubjects type='professional' subjects='base' />{' '}
                        {setString(langMenu.categoryAboutManagement)}
                      </span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img
                          src='/assets/images/icon_check_circle.svg'
                          alt=''
                        />
                      </div>
                      <span>
                        <ProgramSubjects
                          type='professional'
                          subjects='specialty'
                        />{' '}
                        {setString(langMenu.categorySpecializedSubjects)}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul id='header-podmenu-3' className='header-podmenu-content'>
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      {setString(langMenu.onlineTitle)}
                      <div className='discount'>
                        <div className='size'>-20%</div>
                        <span>
                          <Until />
                        </span>
                      </div>
                    </div>
                    <div className='directions-count'>
                      <ProgramsQt
                        programs={data}
                        type={'industry'}
                        format={'online'}
                      />{' '}
                      {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='new-price'>
                        {' '}
                        <Price
                          discount={true}
                          type={'industry'}
                          format={'online'}
                        />{' '}
                        &#8381;
                      </i>{' '}
                      <i className='old-price'>
                        {' '}
                        <Price
                          discount={false}
                          type={'industry'}
                          format={'online'}
                        />{' '}
                        &#8381;
                      </i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatRemote)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects type='industry' sum={true} />{' '}
                          {setString(langMenu.qtSubjects)}
                        </span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map(item => {
                        if (
                          item.mbaTypeOfProgram === 'industry' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li key={item._id}>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                locale='ru'>
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      {setString(langMenu.blendedTitle)}
                    </div>
                    <div className='directions-count'>
                      <ProgramsQt
                        programs={data}
                        type={'industry'}
                        format={'blended'}
                      />{' '}
                      {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='simple-price'>
                        {' '}
                        <Price
                          discount={false}
                          type={'industry'}
                          format={'blended'}
                        />{' '}
                        &#8381;
                      </i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatBlended)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects type='industry' sum={true} />{' '}
                          {setString(langMenu.qtSubjects)}
                        </span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map(item => {
                        if (
                          item.mbaTypeOfProgram === 'industry' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li key={item._id}>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                locale='ru'>
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className='header-podmenu-info'>
                    {/* <div className='image'>
                      <img src='/assets/images/podmenu_info_1.jpg' alt='' />
                    </div> */}
                    <div className='name'>Industry MBA</div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_clock.svg' alt='' />
                      </div>
                      <span>
                        1 {setString(langMenu.categoryYear)} 6{' '}
                        {setString(langMenu.categoryMonth)}
                      </span>
                    </div>
                    <p>{setString(langMenu.categoryDiscIndustry)}</p>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_list.svg' alt='' />
                      </div>
                      <span>
                        <ProgramSubjects type='industry' subjects='base' />{' '}
                        {setString(langMenu.categoryAboutManagement)}
                      </span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img
                          src='/assets/images/icon_check_circle.svg'
                          alt=''
                        />
                      </div>
                      <span>
                        <ProgramSubjects type='industry' subjects='specialty' />{' '}
                        {setString(langMenu.categorySpecializedSubjects)}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='header-overlay'></div>

      {/* mobile menu */}
      <div className='header-mobile-podmenu'>
        {/* first */}
        <div className='header-mobile-first'>
          <div className='container'>
            <ul className='header-mobile-menu'>
              <li>
                <a href='' className='mobile-second-toggle'>
                  <strong>{setString(lang.programsBtn)}</strong>
                </a>
              </li>
              <li>
                <Link href='/about'>
                  <a>{setString(lang.linkAbout)}</a>
                </Link>
              </li>
              <li>
                <Link href='/teachers' locale='ru'>
                  <a>{setString(lang.linkTeachers)}</a>
                </Link>
              </li>
              <li>
                <Link href='/webinars' locale='ru'>
                  <a>{setString(lang.linkWebinars)}</a>
                </Link>
              </li>
              {/* <li>
                <a href=''>Журнал</a>
              </li>
              <li>
                <a href=''>Контакты</a>
              </li> */}
              <li>
                <Link href='/articles' locale='ru'>
                  <a>{setString(lang.linkNews)}</a>
                </Link>
              </li>

              <li>
                <a href='' className='mobile-lang-toggle'>
                  {router.pathname === '/' || router.pathname === '/about'
                    ? setString(lang.linkLang)
                    : ''}
                </a>
              </li>
            </ul>
            <div className='header-logos'>
              <span className='rabo'>
                <img src='/assets/images/logo_rabo.png' alt='' />
              </span>
              <span className='dep'>
                <img src='/assets/images/logo_department.png' alt='' />
              </span>
            </div>
            <div className='header-place'>
              <img src='/assets/images/marker_black.svg' alt='' />
              <span>{setString(lang.address)}</span>
            </div>
          </div>
        </div>
        {/* //first */}

        {/* second */}
        <div className='header-mobile-second js-header-mobile'>
          <div className='container'>
            <div className='menu-back-link'>
              <i></i>
              {setString(langMenu.backBtn)}
            </div>
            <h3>{setString(lang.programsBtn)}</h3>
            <ul className='header-mobile-menu'>
              <li>
                <a href='' className='mobile-third-toggle'>
                  Mini MBA
                </a>

                {/* third */}
                <div className='header-mobile-third js-header-mobile'>
                  <div className='container'>
                    <div className='menu-back-link'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                    <h3>Mini MBA</h3>
                    <div className='program-tabs-content'>
                      <ul className='program-options-block-tabs'>
                        <li>
                          <a href='#program-mobile-1-1' className='active'>
                            ONLINE
                          </a>
                        </li>
                        <li>
                          <a href='#program-mobile-1-2'>BLENDED</a>
                        </li>
                      </ul>
                      <div className='program-options-detail'>
                        <div
                          id='program-mobile-1-1'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.onlineTitle)}
                            <div className='discount'>
                              <div className='size'>-30%</div>
                              <span>
                                <Until />
                              </span>
                            </div>
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'mini'}
                              format={'online'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='new-price'>
                              {' '}
                              <Price
                                discount={true}
                                type={'mini'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>{' '}
                            <i className='old-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'mini'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>{setString(langMenu.formatRemote)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>
                                <ProgramSubjects type='mini' sum={true} />{' '}
                                {setString(langMenu.qtSubjects)}
                              </span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            {data.map(item => {
                              if (
                                item.mbaTypeOfProgram === 'mini' &&
                                item.mbaFormat === 'online'
                              ) {
                                return (
                                  <li key={item._id}>
                                    <Link
                                      href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                      locale='ru'>
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                        <div
                          id='program-mobile-1-2'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.blendedTitle)}
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'mini'}
                              format={'blended'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='simple-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'mini'}
                                format={'blended'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>{setString(langMenu.formatBlended)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>
                                <ProgramSubjects type='mini' sum={true} />{' '}
                                {setString(langMenu.qtSubjects)}
                              </span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            {data.map(item => {
                              if (
                                item.mbaTypeOfProgram === 'mini' &&
                                item.mbaFormat === 'blended'
                              ) {
                                return (
                                  <li key={item._id}>
                                    <Link
                                      href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                      locale='ru'>
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='header-podmenu-info'>
                      {/* <div className='image'>
                        <img src='/assets/images/podmenu_info_1.jpg' alt='' />
                      </div> */}
                      <div className='name'>Mini MBA</div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_clock.svg' alt='' />
                        </div>
                        <span>
                          1 {setString(langMenu.categoryYear)} 6{' '}
                          {setString(langMenu.categoryMonth)}
                        </span>
                      </div>
                      <p>{setString(langMenu.categoryDiscMini)}</p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_list.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects type='mini' subjects='base' />{' '}
                          {setString(langMenu.categoryAboutManagement)}
                        </span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>
                          <ProgramSubjects type='mini' subjects='specialty' />{' '}
                          {setString(langMenu.categorySpecializedSubjects)}
                        </span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                  </div>
                </div>
                {/* //third */}
              </li>
              <li>
                <a href='' className='mobile-third-toggle'>
                  Professional MBA
                </a>

                {/*third */}
                <div className='header-mobile-third js-header-mobile'>
                  <div className='container'>
                    <div className='menu-back-link'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                    <h3>Professional MBA</h3>
                    <div className='program-tabs-content'>
                      <ul className='program-options-block-tabs'>
                        <li>
                          <a href='#program-mobile-2-1' className='active'>
                            ONLINE
                          </a>
                        </li>
                        <li>
                          <a href='#program-mobile-2-2'>BLENDED</a>
                        </li>
                      </ul>
                      <div className='program-options-detail'>
                        <div
                          id='program-mobile-2-1'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.onlineTitle)}
                            <div className='discount'>
                              <div className='size'>-30%</div>
                              <span>
                                <Until />
                              </span>
                            </div>
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'professional'}
                              format={'online'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='new-price'>
                              {' '}
                              <Price
                                discount={true}
                                type={'professional'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>{' '}
                            <i className='old-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'professional'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>{setString(langMenu.formatRemote)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>
                                <ProgramSubjects
                                  type='professional'
                                  sum={true}
                                />{' '}
                                {setString(langMenu.qtSubjects)}
                              </span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            {data.map(item => {
                              if (
                                item.mbaTypeOfProgram === 'professional' &&
                                item.mbaFormat === 'online'
                              ) {
                                return (
                                  <li key={item._id}>
                                    <Link
                                      href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                      locale='ru'>
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                        <div
                          id='program-mobile-2-2'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.blendedTitle)}
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'professional'}
                              format={'blended'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='simple-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'professional'}
                                format={'blended'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>{setString(langMenu.formatBlended)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>
                                <ProgramSubjects
                                  type='professional'
                                  sum={true}
                                />{' '}
                                {setString(langMenu.qtSubjects)}
                              </span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            {data.map(item => {
                              if (
                                item.mbaTypeOfProgram === 'professional' &&
                                item.mbaFormat === 'blended'
                              ) {
                                return (
                                  <li key={item._id}>
                                    <Link
                                      href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                      locale='ru'>
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='header-podmenu-info'>
                      {/* <div className='image'>
                        <img src='/assets/images/podmenu_info_1.jpg' alt='' />
                      </div> */}
                      <div className='name'>Professional MBA</div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_clock.svg' alt='' />
                        </div>
                        <span>
                          1 {setString(langMenu.categoryYear)} 6{' '}
                          {setString(langMenu.categoryMonth)}
                        </span>
                      </div>
                      <p>{setString(langMenu.categoryDiscProfessional)}</p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_list.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects
                            type='professional'
                            subjects='base'
                          />{' '}
                          {setString(langMenu.categoryAboutManagement)}
                        </span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>
                          <ProgramSubjects
                            type='professional'
                            subjects='specialty'
                          />{' '}
                          {setString(langMenu.categorySpecializedSubjects)}
                        </span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                  </div>
                </div>
                {/* //third */}
              </li>
              <li>
                <a href='' className='mobile-third-toggle'>
                  Industry MBA
                </a>

                {/* third */}
                <div className='header-mobile-third js-header-mobile'>
                  <div className='container'>
                    <div className='menu-back-link'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                    <h3>Industry MBA</h3>
                    <div className='program-tabs-content'>
                      <ul className='program-options-block-tabs'>
                        <li>
                          <a href='#program-mobile-3-1' className='active'>
                            ONLINE
                          </a>
                        </li>
                        <li>
                          <a href='#program-mobile-3-2'>BLENDED</a>
                        </li>
                      </ul>
                      <div className='program-options-detail'>
                        <div
                          id='program-mobile-3-1'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.onlineTitle)}
                            <div className='discount'>
                              <div className='size'>-30%</div>
                              <span>
                                <Until />
                              </span>
                            </div>
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'industry'}
                              format={'online'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='new-price'>
                              {' '}
                              <Price
                                discount={true}
                                type={'industry'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>{' '}
                            <i className='old-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'industry'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>{setString(langMenu.formatRemote)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>
                                <ProgramSubjects type='industry' sum={true} />{' '}
                                {setString(langMenu.qtSubjects)}
                              </span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            {data.map(item => {
                              if (
                                item.mbaTypeOfProgram === 'industry' &&
                                item.mbaFormat === 'online'
                              ) {
                                return (
                                  <li key={item._id}>
                                    <Link
                                      href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                      locale='ru'>
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                        <div
                          id='program-mobile-3-2'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.blendedTitle)}
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'industry'}
                              format={'blended'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='simple-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'industry'}
                                format={'blended'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>{setString(langMenu.formatBlended)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>
                                <ProgramSubjects type='industry' sum={true} />{' '}
                                {setString(langMenu.qtSubjects)}
                              </span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            {data.map(item => {
                              if (
                                item.mbaTypeOfProgram === 'industry' &&
                                item.mbaFormat === 'blended'
                              ) {
                                return (
                                  <li key={item._id}>
                                    <Link
                                      href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                      locale='ru'>
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='header-podmenu-info'>
                      {/* <div className='image'>
                        <img src='/assets/images/podmenu_info_1.jpg' alt='' />
                      </div> */}
                      <div className='name'>Industry MBA</div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_clock.svg' alt='' />
                        </div>
                        <span>
                          1 {setString(langMenu.categoryYear)} 6{' '}
                          {setString(langMenu.categoryMonth)}
                        </span>
                      </div>
                      <p>{setString(langMenu.categoryDiscIndustry)}</p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_list.svg' alt='' />
                        </div>
                        <span>
                          <ProgramSubjects type='industry' subjects='base' />{' '}
                          {setString(langMenu.categoryAboutManagement)}
                        </span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>
                          <ProgramSubjects
                            type='industry'
                            subjects='specialty'
                          />{' '}
                          {setString(langMenu.categorySpecializedSubjects)}
                        </span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                  </div>
                </div>
                {/* //third */}
              </li>
            </ul>
          </div>
        </div>
        {/* //second */}

        {/* header-mobile-lang */}
        <div className='header-mobile-lang js-header-mobile'>
          <div className='container'>
            <div className='menu-back-link'>
              <i></i>
              {setString(langMenu.backBtn)}
            </div>
            <ul className='header-mobile-menu'>
              <li>
                <Link href={`${router.pathname}`} locale='ru'>
                  <a id='switchToRuBtn'>🇷🇺&nbsp;Русский</a>
                </Link>
              </li>
              <li>
                <Link href={`${router.pathname}`} locale='en-US'>
                  <a id='switchToEnBtn'>🇺🇸&nbsp;English</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* //header-mobile-lang */}
      </div>
      {/* //Мобильное меню */}
    </header>
  )
}

export default Header
