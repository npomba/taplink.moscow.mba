import Link from 'next/link'
// import PopulateWithPrograms from './hooks/populateWithPrograms'

const Header = ({ programs }) => {
  // const Header = () => {
  const { data } = programs.programs

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
            <span>Москва, Дербеневская набережная 11</span>
          </div>
          <div className='header-phones'>
            <a href='tel:8-495-648-62-26'>+7 (495) 648-62-26</a>
            <a href='tel:8-800-648-62-26'>+7 (800) 648-62-26</a>
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
              <span>Программы</span>
            </div>
          </div>
          <ul className='header-menu'>
            <li>
              <Link href='/about'>
                <a>О школе</a>
              </Link>
            </li>
            <li>
              <Link href='/teachers'>
                <a>Преподаватели</a>
              </Link>
            </li>
            <li>
              <Link href='/webinars'>
                <a>Вебинары</a>
              </Link>
            </li>
            {/* <li>
              <a href=''>Журнал</a>
            </li> */}
            {/* <li>
              <a href=''>Контакты</a>
            </li> */}
            <li>
              <Link href='/articles'>
                <a>Новости</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='header-podmenu'>
        <div className='container'>
          <div className='header-podmenu-flex'>
            <div className='header-podmenu-left'>
              <ul className='header-podmenu-tabs'>
                <li>
                  <Link href='/programs/mini/online'>
                    <a data-tab='#header-podmenu-1' className='active-tab'>
                      Mini MBA
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/programs/professional/online'>
                    <a data-tab='#header-podmenu-2'>Professional MBA</a>
                  </Link>
                </li>
                <li>
                  <Link href='/programs/industry/online'>
                    <a data-tab='#header-podmenu-3'>Industry MBA</a>
                  </Link>
                </li>
              </ul>
              <div className='header-podmenu-premium'>
                <div className='label'>
                  <span>Premium</span>
                </div>
                <Link href='/programs/executive'>
                  <a>Executive MBA</a>
                </Link>
              </div>
            </div>
            <div className='header-podmenu-right'>
              <ul
                id='header-podmenu-1'
                className='header-podmenu-content visible'
              >
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      Формат ONLINE
                      <div className='discount'>
                        <div className='size'>-30%</div>
                        <span>до 20 ноября</span>
                      </div>
                    </div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость: <i className='new-price'> 490 000 Р.</i>
                      <i className='old-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>Дистанционно</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 дисциплин</span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {/* {PopulateWithPrograms(data, 'professional', 'online')} */}
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'mini' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                              >
                                <a>{item.title}</a>
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
                    <div className='name'>Формат BLENDED</div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость: <i className='simple-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>С очными модулями</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 дисциплин</span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'mini' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                              >
                                <a>{item.title}</a>
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
                      <span>1 год 6 месяцев</span>
                    </div>
                    <p>
                      Программа профессиональной переподготовки Mini MBA
                      разработана для специалистов и руководителей среднего
                      звена, которые хотят систематизировать имеющиеся знания
                      или познакомиться с ключевыми аспектами новой для себя
                      сферы управленческой деятельности.
                    </p>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_list.svg' alt='' />
                      </div>
                      <span>40 об управлениии</span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img
                          src='/assets/images/icon_check_circle.svg'
                          alt=''
                        />
                      </div>
                      <span>27 дисциплин специализации</span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul id='header-podmenu-2' className='header-podmenu-content'>
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      Формат ONLINE
                      <div className='discount'>
                        <div className='size'>-25%</div>
                        <span>до 20 ноября</span>
                      </div>
                    </div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость: <i className='new-price'> 490 000 Р.</i>
                      <i className='old-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>Дистанционно</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 дисциплин</span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'professional' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                              >
                                <a>{item.title}</a>
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
                    <div className='name'>Формат BLENDED</div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость: <i className='simple-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>С очными модулями</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 дисциплин</span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'professional' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                              >
                                <a>{item.title}</a>
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
                      <span>1 год 6 месяцев</span>
                    </div>
                    <p>
                      Программа профессиональной переподготовки Mini MBA
                      разработана для специалистов и руководителей среднего
                      звена, которые хотят систематизировать имеющиеся знания
                      или познакомиться с ключевыми аспектами новой для себя
                      сферы управленческой деятельности.
                    </p>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_list.svg' alt='' />
                      </div>
                      <span>40 об управлениии</span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img
                          src='/assets/images/icon_check_circle.svg'
                          alt=''
                        />
                      </div>
                      <span>27 дисциплин специализации</span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul id='header-podmenu-3' className='header-podmenu-content'>
                <li>
                  <div className='program-detail-list'>
                    <div className='name'>
                      Формат ONLINE
                      <div className='discount'>
                        <div className='size'>-20%</div>
                        <span>до 20 ноября</span>
                      </div>
                    </div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость: <i className='new-price'> 490 000 Р.</i>
                      <i className='old-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>Дистанционно</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 дисциплин</span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'industry' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                              >
                                <a>{item.title}</a>
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
                    <div className='name'>Формат BLENDED</div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость: <i className='simple-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>С очными модулями</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 дисциплин</span>
                      </div>
                    </div>
                    <ul className='program-directions-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'industry' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                              >
                                <a>{item.title}</a>
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
                      <span>1 год 6 месяцев</span>
                    </div>
                    <p>
                      Программа профессиональной переподготовки Mini MBA
                      разработана для специалистов и руководителей среднего
                      звена, которые хотят систематизировать имеющиеся знания
                      или познакомиться с ключевыми аспектами новой для себя
                      сферы управленческой деятельности.
                    </p>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img src='/assets/images/icon_list.svg' alt='' />
                      </div>
                      <span>40 об управлениии</span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <img
                          src='/assets/images/icon_check_circle.svg'
                          alt=''
                        />
                      </div>
                      <span>27 дисциплин специализации</span>
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
                  <strong>Программы</strong>
                </a>
              </li>
              <li>
                <Link href='/about'>
                  <a>О школе</a>
                </Link>
              </li>
              <li>
                <Link href='/teachers'>
                  <a>Преподаватели</a>
                </Link>
              </li>
              <li>
                <Link href='/webinars'>
                  <a>Вебинары</a>
                </Link>
              </li>
              {/* <li>
                <a href=''>Журнал</a>
              </li>
              <li>
                <a href=''>Контакты</a>
              </li> */}
              <li>
                <Link href='/articles'>
                  <a>Новости</a>
                </Link>
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
              <span>Москва, Дербеневская набережная 11</span>
            </div>
          </div>
        </div>
        {/* //first */}

        {/* second */}
        <div className='header-mobile-second js-header-mobile'>
          <div className='container'>
            <div className='menu-back-link'>
              <i></i>Назад
            </div>
            <h3>Программы</h3>
            <ul className='header-mobile-menu'>
              <li>
                <a href='' className='mobile-third-toggle'>
                  Mini MBA
                </a>

                {/* third */}
                <div className='header-mobile-third js-header-mobile'>
                  <div className='container'>
                    <div className='menu-back-link'>
                      <i></i>к программам
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
                          className='program-options-block'
                        >
                          <div className='name'>
                            Формат ONLINE
                            <div className='discount'>
                              <div className='size'>-30%</div>
                              <span>до 20 ноября</span>
                            </div>
                          </div>
                          <div className='directions-count'>18 направлений</div>
                          <div className='price'>
                            Стоимость: <i className='new-price'> 490 000 Р.</i>
                            <i className='old-price'> 540 000 Р.</i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>Дистанционно</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>27 дисциплин</span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                            <li>
                              <a href=''>Управление в банковской сфере</a>
                            </li>
                            <li>
                              <a href=''>Управление производством</a>
                            </li>
                            <li>
                              <a href=''>Управление проектами</a>
                            </li>
                            <li>
                              <a href=''>Управление персоналом</a>
                            </li>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                          </ul>
                        </div>
                        <div
                          id='program-mobile-1-2'
                          className='program-options-block'
                        >
                          <div className='name'>Формат BLENDED</div>
                          <div className='directions-count'>18 направлений</div>
                          <div className='price'>
                            Стоимость:{' '}
                            <i className='simple-price'> 540 000 Р.</i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>С очными модулями</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>27 дисциплин</span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                            <li>
                              <a href=''>Управление в банковской сфере</a>
                            </li>
                            <li>
                              <a href=''>Управление производством</a>
                            </li>
                            <li>
                              <a href=''>Управление проектами</a>
                            </li>
                            <li>
                              <a href=''>Управление персоналом</a>
                            </li>
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
                        <span>1 год 6 месяцев</span>
                      </div>
                      <p>
                        Программа профессиональной переподготовки Mini MBA
                        разработана для специалистов и руководителей среднего
                        звена, которые хотят систематизировать имеющиеся знания
                        или познакомиться с ключевыми аспектами новой для себя
                        сферы управленческой деятельности.
                      </p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_list.svg' alt='' />
                        </div>
                        <span>40 об управлениии</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>27 дисциплин специализации</span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>к программам
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
                      <i></i>к программам
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
                          className='program-options-block'
                        >
                          <div className='name'>
                            Формат ONLINE
                            <div className='discount'>
                              <div className='size'>-30%</div>
                              <span>до 20 ноября</span>
                            </div>
                          </div>
                          <div className='directions-count'>18 направлений</div>
                          <div className='price'>
                            Стоимость: <i className='new-price'> 490 000 Р.</i>
                            <i className='old-price'> 540 000 Р.</i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>Дистанционно</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>27 дисциплин</span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                            <li>
                              <a href=''>Управление в банковской сфере</a>
                            </li>
                            <li>
                              <a href=''>Управление производством</a>
                            </li>
                            <li>
                              <a href=''>Управление проектами</a>
                            </li>
                            <li>
                              <a href=''>Управление персоналом</a>
                            </li>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                          </ul>
                        </div>
                        <div
                          id='program-mobile-2-2'
                          className='program-options-block'
                        >
                          <div className='name'>Формат BLENDED</div>
                          <div className='directions-count'>18 направлений</div>
                          <div className='price'>
                            Стоимость:{' '}
                            <i className='simple-price'> 540 000 Р.</i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>С очными модулями</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>27 дисциплин</span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                            <li>
                              <a href=''>Управление в банковской сфере</a>
                            </li>
                            <li>
                              <a href=''>Управление производством</a>
                            </li>
                            <li>
                              <a href=''>Управление проектами</a>
                            </li>
                            <li>
                              <a href=''>Управление персоналом</a>
                            </li>
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
                        <span>1 год 6 месяцев</span>
                      </div>
                      <p>
                        Программа профессиональной переподготовки Mini MBA
                        разработана для специалистов и руководителей среднего
                        звена, которые хотят систематизировать имеющиеся знания
                        или познакомиться с ключевыми аспектами новой для себя
                        сферы управленческой деятельности.
                      </p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_list.svg' alt='' />
                        </div>
                        <span>40 об управлениии</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>27 дисциплин специализации</span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>к программам
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
                      <i></i>к программам
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
                          className='program-options-block'
                        >
                          <div className='name'>
                            Формат ONLINE
                            <div className='discount'>
                              <div className='size'>-30%</div>
                              <span>до 20 ноября</span>
                            </div>
                          </div>
                          <div className='directions-count'>18 направлений</div>
                          <div className='price'>
                            Стоимость: <i className='new-price'> 490 000 Р.</i>
                            <i className='old-price'> 540 000 Р.</i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>Дистанционно</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>27 дисциплин</span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                            <li>
                              <a href=''>Управление в банковской сфере</a>
                            </li>
                            <li>
                              <a href=''>Управление производством</a>
                            </li>
                            <li>
                              <a href=''>Управление проектами</a>
                            </li>
                            <li>
                              <a href=''>Управление персоналом</a>
                            </li>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                          </ul>
                        </div>
                        <div
                          id='program-mobile-3-2'
                          className='program-options-block'
                        >
                          <div className='name'>Формат BLENDED</div>
                          <div className='directions-count'>18 направлений</div>
                          <div className='price'>
                            Стоимость:{' '}
                            <i className='simple-price'> 540 000 Р.</i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_check_circle.svg'
                                  alt=''
                                />
                              </div>
                              <span>С очными модулями</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <img
                                  src='/assets/images/icon_monitor.svg'
                                  alt=''
                                />
                              </div>
                              <span>27 дисциплин</span>
                            </div>
                          </div>
                          <ul className='program-options-block-list'>
                            <li>
                              <a href=''>Антикризисное управление</a>
                            </li>
                            <li>
                              <a href=''>Управление финансами</a>
                            </li>
                            <li>
                              <a href=''>Управление в банковской сфере</a>
                            </li>
                            <li>
                              <a href=''>Управление производством</a>
                            </li>
                            <li>
                              <a href=''>Управление проектами</a>
                            </li>
                            <li>
                              <a href=''>Управление персоналом</a>
                            </li>
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
                        <span>1 год 6 месяцев</span>
                      </div>
                      <p>
                        Программа профессиональной переподготовки Mini MBA
                        разработана для специалистов и руководителей среднего
                        звена, которые хотят систематизировать имеющиеся знания
                        или познакомиться с ключевыми аспектами новой для себя
                        сферы управленческой деятельности.
                      </p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_list.svg' alt='' />
                        </div>
                        <span>40 об управлениии</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>27 дисциплин специализации</span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>к программам
                    </div>
                  </div>
                </div>
                {/* //third */}
              </li>
            </ul>
          </div>
        </div>
        {/* //second */}
      </div>
      {/* //Мобильное меню */}
    </header>
  )
}

export default Header
