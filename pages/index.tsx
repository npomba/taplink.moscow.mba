import Head from 'next/head'
import Link from 'next/link'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

export default function Home() {
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
        <title>Moscow Business Academy</title>
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
                  Международное бизнес-образование. У нас есть всё для раскрытия
                  вашего&nbsp;потенциала!
                </div>
              </div>
            </div>
            <Link href='/programs'>
              <a className='jumbotron-squad'>
                <p>Подобрать направление</p>
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
          <div className='title-pl'>о компании</div>
          <div className='about-flex'>
            <div className='title-desc'>
              <p>
                Moscow Business Academy вляется одной из ведущих бизнес-школ
                на территории СНГ и одной из немногих бизнес-школ, которая
                экспортирует отечественные MBA на Запад и работает на глобальном
                рынке.
              </p>
              <p>
                Ежегодно сотни топ-менеджеров и владельцев компаний получают
                здесь образование международного уровня и завязывают новые
                знакомства.
              </p>
            </div>
            <ul className='about-list'>
              <li>
                <div className='number'>11 лет</div>
                <p>На рынке образования</p>
              </li>
              <li>
                <div className='number'>9000+</div>
                <p>Выпускников по всему миру</p>
              </li>
              <li>
                <div className='number'>25%</div>
                <p>студентов – это иностранцы из стран дальнего зарубежья.</p>
              </li>
              <li>
                <div className='number'>150+</div>
                <p>профессоров международного уровня готовят программы</p>
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
                Организация конференций <span className='red'>в Европе</span>
              </h2>
              <p className='title-desc'>
                Несколько раз в год мы проводим конференции на актуальные темы
              </p>
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
          <h2>Филиалы за рубежом</h2>
          <p className='title-desc'>
            У Moscow Business Academy работают филиалы в Барселоне, Берлине и
            Нью-Йорке
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
                    data-src='/assets/images/simple_image.jpg'
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
                  <p>площадь всех кампусов</p>
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
              <h2>MBA за которым едут со всего МИРА</h2>
              <p className='title-desc'>
                В Moscow Business Academy обучаются студенты из более чем 20
                стран мира, среди которых Россия, Великобритания, США, Германия,
                Бельгия, Франция, Китай, Греция, Швейцария, Италия, Южная
                Африка, Япония, Канада, Австралия, Чили, Вьетнам и многие
                другие!
              </p>
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
                <span>более чем </span>
                <strong>20</strong>
                <span>стран мира</span>
              </div>
            </div>
          </div>
        </section>

        {/* clients-section */}
        <section className='clients-section'>
          <div className='section-pl'>
            <div className='clients-text'>
              <h2>
                Корпоративные <br />
                клиенты в России
              </h2>
              <p>
                Опыт наших экспертов используют многие ведущие компании России и
                стран СНГ. Наш опыт будет полезен не только гигантам
                промышленной, добывающей индустрии, крупным сетевикам, но и
                среднему и малому бизнесу.
              </p>
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

        {/* program-options-section */}
        <section className='program-options-section'>
          <div className='program-options-flex'>
            <div className='program-options-left'>
              <h2>Программы обучения</h2>
              <ul className='program-options-tabs'>
                <li>
                  <a
                    href=''
                    data-tab='#program-options-1'
                    className='active-tab'
                  >
                    Mini MBA
                  </a>
                </li>
                <li>
                  <a href='' data-tab='#program-options-2'>
                    Professional MBA
                  </a>
                </li>
                <li>
                  <a href='' data-tab='#program-options-3'>
                    Industry MBA
                  </a>
                </li>
              </ul>
            </div>
            <div className='program-options-right'>
              <div
                id='program-options-1'
                className='program-tabs-content visible'
              >
                <div className='top-info'>
                  <div className='prog-time'>
                    <i>1 год 6 месяцев </i>
                    <span>27 дисциплин </span>
                  </div>
                  <div className='prog-status'>
                    Новейшие программы 2021 года
                  </div>
                </div>
                <div className='desc'>
                  Программа профессиональной переподготовки Mini MBA разработана
                  для специалистов и руководителей среднего звена, которые хотят
                  систематизировать имеющиеся знания или познакомиться с
                  ключевыми аспектами новой для себя сферы управленческой
                  деятельности.
                </div>
                <ul className='program-options-block-tabs'>
                  <li>
                    <a href='#program-options-1-1' className='active'>
                      ONLINE
                    </a>
                  </li>
                  <li>
                    <a href='#program-options-1-2'>BLENDED</a>
                  </li>
                </ul>
                <div className='program-options-detail'>
                  <div
                    id='program-options-1-1'
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
                      Стоимость:
                      <i className='new-price'> 490 000 Р.</i>
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
                      <li>
                        <a href=''>Управление в сфере коммерции и торговли</a>
                      </li>
                      <li>
                        <a href=''>Управление производством</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id='program-options-1-2'
                    className='program-options-block'
                  >
                    <div className='name'>Формат BLENDED</div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость:
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
                          <img src='/assets/images/icon_monitor.svg' alt='' />
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
                    </ul>
                  </div>
                </div>
              </div>
              <div id='program-options-2' className='program-tabs-content'>
                <div className='top-info'>
                  <div className='prog-time'>
                    <i>2 года 3 месяца </i>
                    <span>20 дисциплин </span>
                  </div>
                  <div className='prog-status'>
                    Новейшие программы 2021 года
                  </div>
                </div>
                <div className='desc'>
                  Программа профессиональной переподготовки Mini MBA разработана
                  для специалистов и руководителей среднего звена, которые хотят
                  систематизировать имеющиеся знания или познакомиться с
                  ключевыми аспектами новой для себя сферы управленческой
                  деятельности.
                </div>
                <ul className='program-options-block-tabs'>
                  <li>
                    <a href='#program-options-2-1' className='active'>
                      ONLINE
                    </a>
                  </li>
                  <li>
                    <a href='#program-options-2-2'>BLENDED</a>
                  </li>
                </ul>
                <div className='program-options-detail'>
                  <div
                    id='program-options-2-1'
                    className='program-options-block'
                  >
                    <div className='name'>
                      Формат ONLINE
                      <div className='discount'>
                        <div className='size'>-25%</div>
                        <span>до 20 ноября</span>
                      </div>
                    </div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость:
                      <i className='new-price'> 490 000 Р.</i>
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
                    id='program-options-2-2'
                    className='program-options-block'
                  >
                    <div className='name'>Формат BLENDED</div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость:
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
                          <img src='/assets/images/icon_monitor.svg' alt='' />
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
              <div id='program-options-3' className='program-tabs-content'>
                <div className='top-info'>
                  <div className='prog-time'>
                    <i>3 года 4 месяца </i>
                    <span>15 дисциплин </span>
                  </div>
                  <div className='prog-status'>
                    Новейшие программы 2021 года
                  </div>
                </div>
                <div className='desc'>
                  Программа профессиональной переподготовки Mini MBA разработана
                  для специалистов и руководителей среднего звена, которые хотят
                  систематизировать имеющиеся знания или познакомиться с
                  ключевыми аспектами новой для себя сферы управленческой
                  деятельности.
                </div>
                <ul className='program-options-block-tabs'>
                  <li>
                    <a href='#program-options-3-1' className='active'>
                      ONLINE
                    </a>
                  </li>
                  <li>
                    <a href='#program-options-3-2'>BLENDED</a>
                  </li>
                </ul>
                <div className='program-options-detail'>
                  <div
                    id='program-options-3-1'
                    className='program-options-block'
                  >
                    <div className='name'>
                      Формат ONLINE
                      <div className='discount'>
                        <div className='size'>-15%</div>
                        <span>до 20 ноября</span>
                      </div>
                    </div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость:
                      <i className='new-price'> 490 000 Р.</i>
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
                  <div
                    id='program-options-3-2'
                    className='program-options-block'
                  >
                    <div className='name'>Формат BLENDED</div>
                    <div className='directions-count'>18 направлений</div>
                    <div className='price'>
                      Стоимость:
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
                          <img src='/assets/images/icon_monitor.svg' alt='' />
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
            </div>
          </div>
        </section>

        {/* executive-section */}
        <section className='executive-section'>
          <div className='executive-flex'>
            <div className='executive-detail'>
              <div className='label'>
                <span>Premium</span>
              </div>
              <h2>Executive MBA</h2>
              <p className='title-desc'>
                Программа Executive MBA разработана для амбициозных
                предпринимателей и топ-менеджеров крупных компаний, которые
                привыкли быть лучшими и не готовы останавливаться на
                достигнутом.
              </p>
              <p className='title-desc'>
                Курс, объединивший лучшие отечественные бизнес-практики с
                глобальным мировым опытом, поможет вам совершить настоящий
                прорыв в управлении компанией. Вы построите пошаговую стратегию
                развития, которая позволит взглянуть на бизнес по-новому.
              </p>
              <ul className='count-list'>
                <li>1 год 6 месяцев</li>
                <li>2 выездных модуля</li>
                <li>27 дисциплин</li>
              </ul>
              <div className='price'>
                Стоимость:
                <i className='new-price'> 1 900 000 Р.</i>
                <i className='old-price'> 2 500 000 Р.</i>
              </div>
              <a href='' className='button empty-button'>
                Узнать подробнее
              </a>
            </div>
            <div className='dobble-images executive-images'>
              <div className='image pic-1'>
                <img
                  className='lazyload'
                  data-src='/assets/images/executive_pic_1.jpg'
                  alt=''
                />
              </div>
              <div className='image pic-2'>
                <img
                  className='lazyload'
                  data-src='/assets/images/executive_pic_2.jpg'
                  alt=''
                />
              </div>
              <div className='count'>
                <strong>200+</strong>
                <span>Студентов уже обучились</span>
              </div>
            </div>
          </div>
        </section>

        {/* support-section */}
        <section className='support-section'>
          <h2>Поможем в выборе</h2>
          <div className='text'>
            Оставьте заявку и получите консультацию по программам MBA, узнайте
            их стоимость, возможные варианты скидок и требования к поступлению
          </div>
          <form action='#' method='post' className='simple-form support-form'>
            <div className='inputs-flex'>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>Введите имя</div>
              </div>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>Номер телефона</div>
              </div>
              <div className='input-block width-33'>
                <button type='submit' className='button white-button'>
                  Оставить заявку
                </button>
              </div>
            </div>
            <div className='personal-datas'>
              Нажимая на кнопку, вы даете согласие на обработку своих
              <a href=''> персональных данных</a>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
