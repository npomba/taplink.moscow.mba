import Head from 'next/head'
import Link from 'next/link'

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
        <title>О Компании</title>
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
                  вашего потенциала!
                </div>
              </div>
            </div>
            <Link href='/programs' locale='ru'>
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

        {/* about-detail-section */}
        <section className='about-detail-section'>
          <div className='section-pl'>
            <div className='title-pl'>о компании</div>
            <div className='about-detail-content'>
              <h2>
                Российские и <span className='red'>зарубежные </span>эксперты
                программы
              </h2>
              <div className='text'>
                Перенимайте уникальный опыт международных экспертов,
                адаптированный под рынок РФ
              </div>
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
                    <h5>Практикующие специалисты</h5>
                    <p>Реализовывали крупные проекты на рынках Европы и США</p>
                  </div>
                </li>
                <li>
                  <div className='circle'>
                    <img src='/assets/images/icon_check.svg' alt='' />
                  </div>
                  <div>
                    <h5>Прошли многоэтапную проверку</h5>
                    <p>
                      Прошли многоэтапную проверку Moscow Academy и имеют
                      аккредитацию на преподавание
                    </p>
                  </div>
                </li>
                <li>
                  <div className='circle'>
                    <img src='/assets/images/icon_check.svg' alt='' />
                  </div>
                  <div>
                    <h5>Международный опыт преподавания</h5>
                    <p>Преподают в ведущих бизнес-школах мира</p>
                  </div>
                </li>
              </ul>
              <h3>Более 150 профессоров международного уровня</h3>
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
                  <div className='name'>Александр Иванов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
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
                  <div className='name'>Семен Фролов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
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
                  <div className='name'>Валентин Земин</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
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
                  <div className='name'>Александр Иванов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
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
                  <div className='name'>Валентин Земин</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
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
                  <div className='name'>Александр Иванов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
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
                  <div className='name'>Александр Иванов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
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
                  <div className='name'>Семен Фролов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className='about-teachers-link'>
            <a href='' className='button'>
              запросить полный список
            </a>
          </div>
        </section>

        {/* actual-section */}
        <section className='actual-section no-line'>
          <div className='section-pl'>
            <h2>Только актуальный контент</h2>
          </div>
          <div className='actual-content'>
            <div className='actual-content-top'>
              <div className='desc'>
                Moscow Business Academy записывает контент очных лекций, поэтому
                это хорошая возможность{' '}
                <strong className='red'>получить MBA </strong>не посящая наши
                кампусы.
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
                <div className='number'>2021 год</div>
                <p>Новейшая программа 2021 года</p>
              </li>
              <li>
                <div className='number'>53 эксперта</div>
                <p>международных экспертов</p>
              </li>
              <li>
                <div className='number'>ТОП 3</div>
                <p>международных экспертов</p>
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
            <h2>Аккредитации</h2>
            <div className='title-desc'>
              В России Moscow Business Academy имеет все лицензии и
              аккредитации, позволяющие готовить специалистов международного
              уровня по направлению MBA.
            </div>
            <ul className='accreditations-list'>
              <li>
                В частности аккредитацию НАСДОБР — самая престижная национальная
                аккредитация, учрежденная РАБО, Ассоциацией менеджеров, Деловой
                Россией при поддержке Государственной Думы РФ. Аккредитацию
                НАСДОБР имеют не более 10 организаций в России.
              </li>
              <li>
                Также Moscow Business Academy является членом Российской
                Ассоциации Бизнес Образования и имеет государственной лицензию,
                что подтверждает полное соответствие всех предоставляемых нами
                программ с образовательным стандартом РФ.
              </li>
            </ul>
            <a href='' className='accreditations-link'>
              <div className='pic'>
                <img src='/assets/images/icon_list.svg' alt='' />
              </div>
              <span>Лицензия Министерства Образования серия ... № ....</span>
            </a>
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

export default about
