import stls from '@/styles/modules/sections/ExecutiveRequirements.module.sass'
import Image from 'next/image'

const ExecutiveRequirements = () => {
  return (
    <section className='requirements-section'>
      <div className='requirements-info'>
        <p>
          Программа EMBA предназначена для предпринимателей и топ-менеджеров,
          которые уже достигли определенной ступени развития и теперь хотят
          выйти на международный уровень. Поэтому к участникам программы
          предъявляются особые требования.
        </p>
        <div className='image'>
          <Image
            src='/assets/images/requirements_pic_1.jpg'
            alt='Студенты Executive на конференции'
            // width={1290}
            // height={293}
            layout={'fill'}
            objectFit={'cover'}
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
              аналитичность, концептуальность, широта и комплексность мышления,
              креативность, воображение и любознательность, методичность,
              нормативность
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
  )
}

export default ExecutiveRequirements
