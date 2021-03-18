import Head from 'next/head'

const executive = () => {
  return (
    <>
      <Head>
        <title>Executive MBA</title>
      </Head>

      {/* jumbotron-section */}
      <section className='jumbotron-section'>
        <div className='image'>
          <img src='/assets/images/jumbotron_3.jpg' alt='' />
        </div>
        <div className='container'>
          <div className='jumbotron-content'>
            <div className='breadcrumbs-outer jumbotron-breadcrumbs'>
              <ul className='breadcrumbs'>
                <li>
                  <a href=''>Программы MBA</a>
                </li>
                <li>
                  <span>Executive MBA</span>
                </li>
              </ul>
            </div>
            <div className='jumbotron-top'>
              <div className='jumbotron-label'>
                <span>MBA PROFESSIONAL</span>
              </div>
            </div>
            <div className='jumbotron-flex'>
              <div className='jumbotron-text'>
                <h1>Executive MBA</h1>
                <div className='desc'>
                  Международное бизнес-образование для топ-менеджеров и
                  собственников крупного бизнеса
                </div>
                <a href='' className='button white-button'>
                  Оставить заявку
                </a>
              </div>
              <ul className='jumbotron-list'>
                <li>
                  <div className='number'>2020</div>
                  <p>Новейшая программа 2020 года</p>
                </li>
                <li>
                  <div className='number'>150+</div>
                  <p>международных экспертов</p>
                </li>
                <li>
                  <div className='number'>2000+</div>
                  <p>студентов по всему миру</p>
                </li>
              </ul>
            </div>
            <ul className='jumbotron-red-info'>
              <li>
                <p>Срок обучения:</p>
                <div className='detail'>3 года 6 месяцев</div>
              </li>
              <li>
                <p>Форма обучения:</p>
                <div className='detail'>Дистансционное</div>
              </li>
              <li>
                <p>Ближайшее зачисление:</p>
                <div className='detail'>23 января</div>
              </li>
              <li>
                <p>Стоимость:</p>
                <div className='detail'>
                  <span className='old-price'>390 000 &#8381;</span>
                  <span className='new-price'>540 000 Р.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className='container'>
        {/* executive-about-section */}
        <section className='executive-about-section'>
          <div className='executive-about-flex'>
            <div className='executive-about-content'>
              <h2>
                <span className='red'>Executive MBA </span>Международная
                программа, в которой есть всё для раскрытия вашего потенциала
              </h2>
              <div className='title-desc'>
                <p>
                  Программа Executive MBA разработана для амбициозных
                  предпринимателей и топ-менеджеров крупных компаний, которые
                  привыкли быть лучшими и не готовы останавливаться на
                  достигнутом.
                </p>
                <p>
                  Курс, объединивший лучшие отечественные бизнес-практики с
                  глобальным мировым опытом, поможет вам совершить настоящий
                  прорыв в управлении компанией. Вы построите пошаговую
                  стратегию развития, которая позволит взглянуть на бизнес
                  по-новому.
                </p>
              </div>
            </div>
            <div className='dobble-images executive-about-images'>
              <div className='image pic-1'>
                <img src='/assets/images/executive_about_1.jpg' alt='' />
              </div>
              <div className='image pic-2'>
                <div className='number'>
                  20 000 м<sup>2</sup>
                </div>
                <div className='line'></div>
                <p>площадь всех кампусов</p>
              </div>
            </div>
          </div>
        </section>

        {/* executive-results-section */}
        <section className='executive-results-section'>
          <div className='executive-results-content clearfix'>
            <div className='floatLeft'>
              <h2>
                Результаты участия в программе
                <span className='red'>Executive MBA</span>
              </h2>
            </div>
            <div className='floatRight'>
              <h4>На практике Вы и ваша команда:</h4>
              <ul className='executive-results-list'>
                <li>
                  Построите авторскую модель глобальной ниши для вашего бизнеса
                </li>
                <li>
                  Научитесь схватывать сущность проблем, создавать инструменты
                  и решения под текущую управленческую ситуацию на международных
                  рынках
                </li>
                <li>
                  Сможете понять, как синхронизировать и трансформировать
                  команду для новых рынков
                </li>
                <li>Разберетесь в особенностях коммерциализации разработок</li>
                <li>
                  Продумаете как изменить ключевой процесс для достижения
                  глобальных целей и кратного роста бизнеса
                </li>
                <li>
                  Сможете эффективно управлять интеллектуальным капиталом
                  и изменениями в компании
                </li>
              </ul>
            </div>
            <div className='floatLeft'>
              <div className='executive-results-red'>
                <p>
                  Благодаря программе
                  <strong>Executive MBA</strong> вы научитесь проектировать
                  сложные бизнес-конструкции
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* intramural-moduls-section */}
        <section className='intramural-moduls-section'>
          <div className='intramural-moduls-content'>
            <div className='title-pl red'>10 модулей</div>
            <h2>Очные модули с экспертами в Москве</h2>
            <h4>10 очных модулей в Москве длительностью 60 дней</h4>
            <div className='title-desc'>
              <p>
                Очные сессии помогут пообщаться с единомышленниками и решить
                конкретные вопросы, которые встречаются в повседневной
                деятельности компании
              </p>
              <p>
                Во время обучения Вы вместе с преподавателями проанализируете
                все бизнес-процессы и начнете реализацию долгосрочного плана
                по повышению эффективности работы компании
              </p>
            </div>
          </div>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/intramural_moduls_pic_1.jpg'
              alt=''
            />
          </div>
        </section>

        {/* abroad-modules-section */}
        <section className='abroad-modules-section'>
          <div className='abroad-modules-top'>
            <h2>2 модуля за рубежом</h2>
            <div className='abroad-modules-text'>
              <div className='content'>
                В программу включены 2 выездных модуля, во время которых вы
                познакомитесь с лучшими бизнес-практиками крупнейших деловых
                центров мира: Китая и США. В рамках модулей вы посетите
                крупнейшие экономические и предпринимательские хабы: Силиконовая
                долина, офисы известных мировых корпораций и многое другое.
              </div>
            </div>
          </div>
          <ul className='abroad-modules-list'>
            <li>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/abroad_modules_pic_1.jpg'
                  alt=''
                />
              </div>
              <div className='text'>
                <div className='country'>США</div>
                <h5>Инновации и предпринимательство</h5>
                <p>
                  Модуль разработан с опорой на передовой опыт и лучшие практики
                  в области управления инновациями в США. Вы проведете встречи с
                  предпринимателями, познакомитесь с практикой внедрения
                  инноваций, а также освоите новые дисциплины, такие как Design
                  Thinking, Technology Innovation и многие другие.
                </p>
              </div>
            </li>
            <li>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/abroad_modules_pic_2.jpg'
                  alt=''
                />
              </div>
              <div className='text'>
                <div className='country'>Китай</div>
                <h5>Стратегии выхода на международние рынки</h5>
                <p>
                  На модуле в Китае вы получите инструменты для вывода продукта
                  на новые рынки и узнаете, как устроена самая быстрорастущая
                  экономика в мире. Узнаете об инновационных подходах и
                  бизнес-моделях, позволяющих местным компаниям достигать
                  высоких результатов в различных рынках.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* who-training-section */}
        <section className='who-training-section'>
          <h2>Кто учится на программе?</h2>
          <ul className='who-training-list'>
            <li>
              <div
                className='who-training-circle circle-js-big'
                data-value='0.45'
              >
                <strong>45%</strong>
              </div>
              <p>Владельцев крупного бизнеса</p>
            </li>
            <li>
              <div
                className='who-training-circle circle-js-big'
                data-value='0.55'
              >
                <strong>55%</strong>
              </div>
              <p>SEO и руководителей</p>
            </li>
          </ul>
          <div className='lines'>
            <img src='/assets/images/who_training_lines.svg' alt='' />
          </div>
        </section>

        {/* training-section */}
        <section className='training-section'>
          <div className='section-pl'>
            <h2>Программа обучения</h2>
            <ul className='training-red-list'>
              <li>
                <div className='number'>20</div>
                <p>дисциплин базовой части</p>
              </li>
              <li>
                <div className='number'>7</div>
                <p>дисциплин специализации</p>
              </li>
            </ul>
            <h3>Базовые дисциплины</h3>
          </div>
          <div className='training-list'>
            <div className='training-block'>
              <div className='training-modul'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                1 модуль
              </div>
              <div className='training-content'>
                <ul className='simple-list'>
                  <li>
                    Бизнес-стратегия в эпоху цифровизации: как изменить
                    бизнес-модель и сделать технологию конкурентным
                    преимуществом.
                  </li>
                  <li>Что такое подрывные инновации и как их предвидеть.</li>
                  <li>Платформы и экосистемы как основа цифрового бизнеса.</li>
                  <li>
                    Стратегия голубого океана и создание новых ценностных
                    кривых.
                  </li>
                </ul>
              </div>
            </div>
            <div className='training-block'>
              <div className='training-modul'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                2 модуль
              </div>
              <div className='training-content'>
                <ul className='simple-list'>
                  <li>
                    Основы современного маркетинга: модели, каналы и инструменты
                    B2C- и B2B-маркетинга в цифровой среде.
                  </li>
                  <li>
                    Основы современного маркетинга: модели, каналы и инструменты
                    B2C- и B2B-маркетинга в цифровой среде.
                  </li>
                  <li>Управление взаимоотношениями с клиентами.</li>
                  <li>
                    Принципы использования маркетинговой аналитики и больших
                    данных в современном бизнесе.
                  </li>
                </ul>
              </div>
            </div>
            <div className='training-block'>
              <div className='training-modul'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                3 модуль
              </div>
              <div className='training-content'>
                <ul className='simple-list'>
                  <li>
                    Бизнес-стратегия в эпоху цифровизации: как изменить
                    бизнес-модель и сделать технологию конкурентным
                    преимуществом.
                  </li>
                  <li>Что такое подрывные инновации и как их предвидеть.</li>
                  <li>Платформы и экосистемы как основа цифрового бизнеса.</li>
                </ul>
              </div>
            </div>
            <div className='training-block'>
              <div className='training-modul'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                4 модуль
              </div>
              <div className='training-content'>
                <ul className='simple-list'>
                  <li>
                    Основы современного маркетинга: модели, каналы и инструменты
                    B2C- и B2B-маркетинга в цифровой среде.
                  </li>
                  <li>
                    Основы современного маркетинга: модели, каналы и инструменты
                    B2C- и B2B-маркетинга в цифровой среде.
                  </li>
                  <li>Управление взаимоотношениями с клиентами.</li>
                  <li>
                    Принципы использования маркетинговой аналитики и больших
                    данных в современном бизнесе.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* support-section */}
        <section className='support-section mb-130'>
          <h3>Получите консультацию по программе</h3>
          <div className='text'>
            Оставьте заявку и получите консультацию по программе MBA, узнайте
            точную стоимость, возможные варианты скидок и требования к
            поступлению
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
              <a href=''>персональных данных</a>
            </div>
          </form>
        </section>

        {/* accreditations-section */}
        <section className='accreditations-section'>
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
            <a
              href='#teachersModal'
              className='button popup-open'
              data-effect='mfp-zoom-in'
            >
              запросить полный список
            </a>
          </div>
        </section>

        {/* rules-section */}
        <section className='rules-section'>
          <div className='rules-flex'>
            <h2>Правила приема</h2>
            <div className='rules-content'>
              <h3>Что требуется от кандидата</h3>
              <ul className='rules-list'>
                <li>
                  Наличие высшего профессионального образования, подтвержденного
                  дипломом
                </li>
                <li>
                  Опыт работы не менее 5 лет (управленческая деятельность или
                  опыт создания и управления собственным бизнесом)
                </li>
                <li>
                  Годовой оборот организации от 300 000 для топ-менеджеров и от
                  2 000 000 для собственников бизнеса
                </li>
                <li>Признанные профессиональные достижения</li>
                <li>
                  Уровень владения английским языком не ниже уровня
                  Pre-Intermediate
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* requirements-section */}
        <section className='requirements-section'>
          <div className='requirements-info'>
            <p>
              Программа EMBA предназначена для предпринимателей
              и топ-менеджеров, которые уже достигли определенной ступени
              развития и теперь хотят выйти на международный уровень. Поэтому
              к участникам программы предъявляются особые требования.
            </p>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/requirements_pic_1.jpg'
                alt=''
              />
            </div>
          </div>
          <ul className='requirements-list'>
            <li>
              <div className='circle'>
                <img alt='' src='/assets/images/icon_check.svg' />
              </div>
              <div>
                <h5>Управление отношениями</h5>
                <p>
                  лидерские качества, социальная уверенность, влиятельность,
                  кооперативность, заботливость
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <img alt='' src='/assets/images/icon_check.svg' />
              </div>
              <div>
                <h5>Управление задачами</h5>
                <p>
                  аналитичность, концептуальность, широта и комплексность
                  мышления, креативность, воображение и любознательность,
                  методичность, нормативность
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <img alt='' src='/assets/images/icon_check.svg' />
              </div>
              <div>
                <h5>Управление собой</h5>
                <p>
                  уравновешенность, стрессоустойчивость, эмоциональный контроль,
                  восприятие критики, жизнерадостность, гибкость, адаптивность,
                  открытость новым задачам, энергичность
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <img alt='' src='/assets/images/icon_check.svg' />
              </div>
              <div>
                <h5>Амбициозность</h5>
                <p>
                  ориентация на результат, карьерные амбиции, степень понимания
                  своих сильных сторон и областей для развития
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* students-section */}
        <section className='students-section section-pl'>
          <div className='title-pl red'>Более 2000</div>
          <div className='students-flex'>
            <div className='students-detail'>
              <h2>Наши студенты</h2>
              <div className='desc'>
                Вы станете частью эффективного нетворкинга по всему миру
              </div>
              <h4>Согласно опросу 2000 наших студентов:</h4>
              <ul className='students-list'>
                <li>
                  <div className='students-circle circle-js' data-value='0.96'>
                    <strong>96%</strong>
                  </div>
                  <p>остались довольны обучением</p>
                </li>
                <li>
                  <div className='students-circle circle-js' data-value='0.92'>
                    <strong>92%</strong>
                  </div>
                  <p>повысили показатели своих проектов</p>
                </li>
                <li>
                  <div className='students-circle circle-js' data-value='0.72'>
                    <strong>72%</strong>
                  </div>
                  <p>продвинулись по карьерной лестнице</p>
                </li>
              </ul>
            </div>
            <div className='dobble-images students-images'>
              <div className='image pic-1'>
                <img
                  className='lazyload'
                  data-src='/assets/images/students_pic_1.jpg'
                  alt=''
                />
              </div>
              <div className='image pic-2'>
                <img
                  className='lazyload'
                  data-src='/assets/images/students_pic_2.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>

        {/* reviews-section */}
        <section className='reviews-section'>
          <div className='section-pl'>
            <h2>О нас говорят</h2>
          </div>
          <div className='reviews-text-list'>
            <div className='reviews-text-block'>
              <div className='avatar'>
                <img
                  className='lazyload'
                  data-src='/assets/images/review_ava_1.jpg'
                  alt=''
                />
              </div>
              <div className='info'>
                <div className='text'>
                  <p>
                    С каждым занятием все больше понимаешь, что эти знания не
                    просто можно, а нужно применять на практике. То, что нам
                    давали на курсе, позволило мне не просто понять, что
                    нужно...
                    <a
                      href='#reviewModal'
                      className='link popup-open'
                      data-effect='mfp-zoom-in'
                    >
                      Читать
                    </a>
                  </p>
                </div>
                <div className='name'>Вячеслав Глухов</div>
                <div className='job'>Генеральный директор «Замбонфарма»</div>
              </div>
            </div>
            <div className='reviews-text-block'>
              <div className='avatar'>
                <img
                  className='lazyload'
                  data-src='/assets/images/review_ava_2.jpg'
                  alt=''
                />
              </div>
              <div className='info'>
                <div className='text'>
                  <p>
                    Очень удобный формат обучения – раз в месяц по три дня на
                    выходных. Упор на практику: спикеры – эксперты в своих
                    отраслях, находящиеся на передовой digital-бизнеса...
                    <a
                      href='#reviewModal'
                      className='link popup-open'
                      data-effect='mfp-zoom-in'
                    >
                      Читать
                    </a>
                  </p>
                </div>
                <div className='name'>Вячеслав Глухов</div>
                <div className='job'>Генеральный директор «Замбонфарма»</div>
              </div>
            </div>
          </div>
          <div className='reviews-preview-list'>
            <a href='' className='reviews-preview-block'>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/review_prew_1.jpg'
                  alt=''
                />
              </div>
              <div className='content'>
                <div className='type'>Отзыв в формате статьи</div>
                <div className='name'>
                  Как Александр увеличил доход цементного завода после
                  прохождения MBA professional
                </div>
              </div>
            </a>
            <a
              href='https://www.youtube.com/watch?v=l6pDOwNeTrg'
              className='reviews-preview-block video-preview popup-youtube'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/review_prew_2.jpg'
                  alt=''
                />
              </div>
              <div className='content'>
                <div className='play'>
                  <i></i>
                </div>
                <div className='name'>Видео отзыв</div>
              </div>
            </a>
          </div>
        </section>

        {/* program-price-section */}
        <section className='program-price-section'>
          <h2>Стоимость обучения</h2>
          <div className='program-price-block single-program-price'>
            <div className='inner-block'>
              <div className='name'>MBA Executive</div>
              <ul className='simple-list'>
                <li>От 24 месяца обучения</li>
                <li>10 очных модулей в Москве</li>
                <li>2 международных модуля в Китае и Сша</li>
                <li>Оплачиваемые перелеты и проживание</li>
                <li>Полный комплект учебных материалов</li>
                <li>12 дисциплин специализации</li>
              </ul>
              <div className='time'>
                Ближайший набор{' '}
                <span className='red'>20 февраля 2021 года</span>
              </div>
            </div>
            <div className='inner-block'>
              <div className='text'>
                <p>
                  Успех в бизнесе напрямую связывают с получением
                  бизнес-образования.
                </p>
                <p>
                  Свяжите ближайшие 2 года с Moscow Business Academy и кратно
                  увеличьте запас знаний
                </p>
                <p className='red'>Запишитесь на MBA сегодня:</p>
              </div>
              <div className='price'>130 000 Р.</div>
              <div className='button-block'>
                <a href='' className='button empty-button'>
                  Оставить заявку
                </a>
              </div>
              <a href='' className='cheaper-link'>
                Хочу дешевле
              </a>
            </div>
          </div>
        </section>

        {/* faq-section */}
        <section className='faq-section section-pl'>
          <div className='title-pl red'>Узнай все</div>
          <div className='faq-flex'>
            <div className='faq-description'>
              <h2>
                Вопросы <br />и ответы
              </h2>
              <div className='desc'>
                Задавайте вопросы на интересующую тему и наши менеджеры ответят
                вам в ближайшее время
              </div>
            </div>
            <div className='faq-content'>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>
                  Какие выпускные документы я получу?
                </div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>Кто наши преподаватели?</div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>
                  Как получить рассрочку на обучение?
                </div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>Как оплатить обучение?</div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>Как проходит обучение?</div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>Есть ли у вас очные модули?</div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* support-section */}
        <section className='support-section'>
          <h3>
            Не знаете что выбрать? <br />
            Получите консультацию по программам MBA
          </h3>
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
              <a href=''>персональных данных</a>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default executive
