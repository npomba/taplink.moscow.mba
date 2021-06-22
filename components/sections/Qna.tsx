import stls from '@/styles/modules/Qna.module.sass'

import Script from 'next/script'

const Qna = () => {
  return (
    <>
      <section className='faq-section section-pl'>
        <div className='title-pl red'>Узнай все</div>
        <div className='faq-flex'>
          <div className='faq-description'>
            <h2>
              Вопросы <br />и ответы
            </h2>
            <div className='desc'>
              Задавайте вопросы на интересующую тему и наши менеджеры ответят
              Вам в ближайшее время
            </div>
          </div>
          <div className='faq-content'>
            <div className='faq-block'>
              <div className='plus'>
                <i></i>
                <i></i>
              </div>
              <div className='faq-question'>
                Можно ли закончить обучение экстерном?
              </div>
              <div className='faq-answer'>
                <p className={stls.mb}>
                  Мы считаем, что каждый должен учиться в своем привычном темпе,
                  и поэтому даем возможность окончить программу досрочно. Вы
                  можете сократить обучение на программе в два раза от полного
                  срока обучения
                </p>
              </div>
            </div>
            <div className='faq-block'>
              <div className='plus'>
                <i></i>
                <i></i>
              </div>
              <div className='faq-question'>
                Что будет, если я не уложусь в сроки обучения?
              </div>
              <div className='faq-answer'>
                <p className={stls.mb}>
                  Мы стараемся подбирать сроки обучения таким образом, чтобы Вам
                  было удобно совмещать обучение с работой
                </p>
                <p className={stls.mb}>
                  В случае, если Вы не смогли закончить обучение в установленный
                  срок, Вы всегда сможете продлить доступ к программе,
                  обратившись к куратору
                </p>
              </div>
            </div>
            <div className='faq-block'>
              <div className='plus'>
                <i></i>
                <i></i>
              </div>
              <div className='faq-question'>Есть ли у Вас аккредитация?</div>
              <div className='faq-answer'>
                <p className={stls.mb}>
                  В России Moscow Business Academy имеет все лицензии и
                  аккредитации, позволяющие готовить специалистов международного
                  уровня по направлению MBA
                </p>

                <p className={stls.mb}>
                  В частности аккредитацию НАСДОБР — самая престижная
                  национальная аккредитация, учрежденная РАБО, Ассоциацией
                  менеджеров, Деловой Россией при поддержке Государственной Думы
                  РФ. Аккредитацию НАСДОБР имеют не более 10 организаций в
                  России
                </p>

                <p className={stls.mb}>
                  Также Moscow Business Academy является членом Российской
                  Ассоциации Бизнес Образования и имеет государственной
                  лицензию, что подтверждает полное соответствие всех
                  предоставляемых нами программ с образовательным стандартом РФ
                </p>
              </div>
            </div>
            <div className='faq-block'>
              <div className='plus'>
                <i></i>
                <i></i>
              </div>
              <div className='faq-question'>
                Какие выпускные документы я получу?
              </div>
              <div className='faq-answer'>
                <p className={stls.mb}>По окончании программы Вы получите</p>
                <ol>
                  <li className={stls.olItem}>
                    <p>
                      Диплом академии установленного образца Министерством
                      Образования науки Российской Федерации, удостоверяющий
                      право на ведение профессиональной деятельности в сфере
                      менеджмента с присвоением степени Мастера Бизнес
                      Администрирования
                    </p>
                  </li>
                  <li className={stls.olItem}>
                    <p>
                      Международное приложение к диплому Supplement, форма
                      которого была разработана Европейской комиссией, Советом
                      Европы и ЮНЕСКО с целью взаимного признания странами
                      национальных документов о высшем образовании в
                      соответствии с принципами Болонской декларации
                      «Европейская зона высшего образования»
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className='faq-block'>
              <div className='plus'>
                <i></i>
                <i></i>
              </div>
              <div className='faq-question'>
                Кто разрабатывает учебные программы?
              </div>
              <div className='faq-answer'>
                <p className={stls.mb}>
                  Программы разрабатывают российские и зарубежные эксперты,
                  которые реализовывали крупные проекты на рынках России, Европы
                  и США, а также прошли многоэтапную проверку Moscow Business
                  Academy и получили аккредитацию на преподавание
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script src='/assets/js/qna.js' strategy='lazyOnload' />
    </>
  )
}

export default Qna
