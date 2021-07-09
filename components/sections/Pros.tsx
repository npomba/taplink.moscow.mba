import stls from '@/styles/components/sections/Pros.module.sass'
import useAt from '@/components/hooks/useAt'
import Image from 'next/image'
import { IconCheck } from '@/components/icons'

const Pros = ({ format = 'online' }) => {
  const at = useAt()
  if (format === 'online') {
    return (
      <section className='advantages-section section-pl'>
        <div className='title-pl red'>
          {!at.profession && (
            <>
              online
              <br /> модули
            </>
          )}
          {at.profession && (
            <>
              online <br /> обучение
            </>
          )}
        </div>
        <h2 className='prosTitle'>
          На MBA{' '}
          {at.mini
            ? 'mini'
            : at.professional
            ? 'professional'
            : at.industry
            ? 'industry'
            : at.executive
            ? 'executive'
            : null}{' '}
          мы обучаем онлайн. И делаем это качественно
        </h2>
        <div className='advantages-content'>
          <ul className='advantages-list'>
            <li>
              <div className='circle'>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5>Учитесь из любой точки мира</h5>
                <p>
                  Обучение проходит на нашей образовательной платформе. Всё
                  собрано в личном кабинете: здесь удобно смотреть расписание,
                  изучать материалы, записи прошедших лекций, загружать задания
                  и получать по ним обратную связь
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5>Онлайн-формат даёт возможность учиться у лучших</h5>
                <p>
                  Благодаря онлайн-формату Вы можете пройти программу с
                  экспертами сразу из нескольких топовых бизнес-школ мира. Мы
                  хотим, чтобы ценные знания были доступны Вам при любых
                  обстоятельствах
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5>Получаете престижные дипломы</h5>
                <p>
                  Дипломы MBA{' '}
                  {at.mini
                    ? 'mini'
                    : at.professional
                    ? 'professional'
                    : at.industry
                    ? 'industry'
                    : at.executive
                    ? 'executive'
                    : null}{' '}
                  online не отличаются от дипломов очных программ за счет того,
                  что преподают те же спикеры по тем же учебным прграммам
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5>Общайтесь с экспертами online</h5>
                <p>
                  На MBA mini online у Вас есть возможность задавать вопросы
                  экспертам во время видео-встреч, а также через нашу
                  образовательную платформу
                </p>
              </div>
            </li>
          </ul>
          <div className='right-image'>
            <Image
              src='/assets/images/advantages_pic_1.jpg'
              alt='Студент MBA'
              width={357}
              height={558}
            />
          </div>
        </div>
      </section>
    )
  }

  if (format === 'blended') {
    return (
      <section className='advantages-section blended-advantages section-pl'>
        <div className='title-pl red'>
          online <br /> модули
        </div>
        <h2>
          Также на MBA blended мы обучаем онлайн. И делаем это качественно
        </h2>
        <div className='advantages-content'>
          <div className='left-image'>
            <div className='image'>
              <Image
                src='/assets/images/advantages_pic_1.jpg'
                alt='Студент MBA'
                width={265}
                height={317}
              />
            </div>
          </div>
          <ul className='advantages-list'>
            <li>
              <div className='circle'>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5>Учитесь из любой точки мира</h5>
                <p>
                  Обучение проходит на нашей образовательной платформе. Всё
                  собрано в личном кабинете: здесь удобно смотреть расписание,
                  изучать материалы, записи прошедших лекций, загружать задания
                  и получать по ним обратную связь
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5>Онлайн-формат даёт возможность учиться у лучших</h5>
                <p>
                  Благодаря онлайн-формату Вы можете пройти программу с
                  экспертами сразу из нескольких топовых бизнес-школ мира. Мы
                  хотим, чтобы ценные знания были доступны Вам при любых
                  обстоятельствах
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5>Общайтесь с экспертами online</h5>
                <p>
                  На MBA{' '}
                  {at.mini
                    ? 'mini'
                    : at.professional
                    ? 'professional'
                    : at.industry
                    ? 'industry'
                    : at.executive
                    ? 'executive'
                    : null}{' '}
                  online у Вас есть возможность задавать вопросы экспертам во
                  время видео-встреч, а также через нашу образовательную
                  платформу
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Pros
