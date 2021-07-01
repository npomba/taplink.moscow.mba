import stls from '@/styles/modules/sections/ModulesAbroad.module.sass'
import Image from 'next/image'

const ModulesAbroad = () => {
  return (
    <section className='abroad-modules-section'>
      <div className='abroad-modules-top'>
        <h2>2 модуля за рубежом</h2>
        <div className='abroad-modules-text'>
          <div className='content'>
            В программу включены 2 выездных модуля, во время которых вы
            познакомитесь с лучшими бизнес-практиками крупнейших деловых центров
            мира: Китая и США. В рамках модулей Вы посетите крупнейшие
            экономические и предпринимательские хабы: Силиконовая долина, офисы
            известных мировых корпораций и многое другое.
          </div>
        </div>
      </div>
      <ul className='abroad-modules-list'>
        <li>
          <div className='image'>
            <Image
              src='/assets/images/abroad_modules_pic_1.jpg'
              alt={'Студенты на конференции MBA'}
              width={550}
              height={225}
            />
          </div>
          <div className='text'>
            <div className='country'>США</div>
            <h5>Инновации и предпринимательство</h5>
            <p>
              Модуль разработан с опорой на передовой опыт и лучшие практики в
              области управления инновациями в США. Вы проведете встречи с
              предпринимателями, познакомитесь с практикой внедрения инноваций,
              а также освоите новые дисциплины, такие как Design Thinking,
              Technology Innovation и многие другие.
            </p>
          </div>
        </li>
        <li>
          <div className='image'>
            <Image
              src='/assets/images/abroad_modules_pic_2.jpg'
              alt={'Встреча студентов MBA в Китае'}
              width={550}
              height={225}
            />
          </div>
          <div className='text'>
            <div className='country'>Китай</div>
            <h5>Стратегии выхода на международние рынки</h5>
            <p>
              На модуле в Китае Вы получите инструменты для вывода продукта на
              новые рынки и узнаете, как устроена самая быстрорастущая экономика
              в мире. Узнаете об инновационных подходах и бизнес-моделях,
              позволяющих местным компаниям достигать высоких результатов в
              различных рынках.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default ModulesAbroad
