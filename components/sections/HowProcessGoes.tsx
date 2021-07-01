import stls from '@/styles/modules/sections/HowProcessGoes.module.sass'
import useAt from '@/components/hooks/useAt'
import Script from 'next/script'

const HowProcessGoes = () => {
  const at = useAt()

  return (
    <>
      <section className='process-section'>
        <div className='process-content'>
          <h2>Как проходит процесс обучения</h2>
          <div className='process-info'>
            <ul className='process-step-tabs'>
              <li>
                <a href='#process-step-1' className='active'>
                  Поступление
                </a>
              </li>
              <li>
                <a href='#process-step-2'>Обучение</a>
              </li>
              <li>
                <a href='#process-step-3'>Помощь и обратная связь</a>
              </li>
              <li>
                <a href='#process-step-4'>Сопровождение процесса обучения</a>
              </li>
              <li>
                <a href='#process-step-5'>Завершение обучения</a>
              </li>
            </ul>
            <div id='process-step-1' className='process-step-block'>
              <div className='number'>1</div>
              <div className='title'>Поступление</div>
              <ul className='simple-list'>
                <li>
                  Вы проходите собеседование со специалистом приемной комиссии,
                  подписываете договор, осуществляете оплату и получаете доступ
                  в образовательную платформу
                </li>
                <li>
                  Ваш личный куратор презентует программу и расскажет о процессе
                  обучения на вводном персональном занятии
                </li>
                <li>
                  В личном кабинете Вам будет доступна вся информация по
                  обучению: модули, график мероприятий, видеолекции и другие
                  сервисы
                </li>
              </ul>
            </div>
            <div id='process-step-2' className='process-step-block'>
              <div className='number'>2</div>
              <div className='title'>Обучение</div>
              <ul className='simple-list'>
                <li>
                  Вы проходите курсы последовательно: от модуля к модулю, от
                  курса к курсу
                </li>
                <li>
                  {at.online &&
                    'Вы будете закреплять полученные знания на специальных кейсах, тренажерах и тестированиях'}
                  {at.blended &&
                    'Выезжаете на очные модули в Москве на которых общаетесь с единомышленниками и разбираете со спикерами кейсы и конкретные ситуации вашего бизнеса'}
                </li>
                <li>
                  В процессе обучения Вы будете выполнять домашние задания,
                  участвовать в групповых заданиях и выполнять проектные работы
                </li>
              </ul>
            </div>
            <div id='process-step-3' className='process-step-block'>
              <div className='number'>3</div>
              <div className='title'>Помощь и обратная связь от экспертов</div>
              <ul className='simple-list'>
                <li>
                  Вы будете получать обратную связь по решению кейсов, проектным
                  работам и домашним заданиям
                </li>
                <li>
                  Вы сможете задать любой вопрос и получить советы и
                  рекомендации
                </li>
                <li>
                  В конце каждого модуля студенты принимают участие во
                  внедренческих вебинарах, где разбираются итоги модуля и
                  вопросы слушателей программы
                </li>
              </ul>
            </div>
            <div id='process-step-4' className='process-step-block'>
              <div className='number'>4</div>
              <div className='title'>Сопровождение процесса обучения</div>
              <ul className='simple-list'>
                <li>
                  Вы получаете личного куратора, который поддерживает Вас по
                  телефону и в мессенджерах и готов всегда ответить на ваши
                  вопросы
                </li>
                <li>
                  Мы гарантируем результат за счет особой системы поддержки
                  процесса обучения
                </li>
              </ul>
            </div>

            <div id='process-step-5' className='process-step-block'>
              <div className='number'>5</div>
              <div className='title'>Завершение обучения</div>
              <ul className='simple-list'>
                <li>
                  Вы сдаете финальный экзамен по всей программе, готовитесь и
                  защищаете выпускной проект перед аттестационной комиссией
                </li>
                <li>По окончании обучения вы получаете 2 престижных диплома</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Script src='/assets/js/howProcessGoes.js' strategy='lazyOnload' />
    </>
  )
}

export default HowProcessGoes
