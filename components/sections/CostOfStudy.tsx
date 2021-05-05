import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Until from '@/components/dates/Until'
import PopUpForm from '@/components/popups/Form'

const CostOfStudy = ({ programTitle }) => {
  return (
    <section className='program-price-section'>
      <h2>Стоимость обучения</h2>
      <div className='program-price-block single-program-price'>
        <div className='inner-block'>
          <div className='name'>MBA Professional</div>
          <ul className='simple-list'>
            <li>От 3 до 6 месяцев обучения</li>
            <li>Дистанционно</li>
            <li>
              Ближайший набор <Until preposition={false} />
            </li>
            <li>432 часа живого общения с экспертами</li>
            <li>40 дисциплин об управлении</li>
            <li>12 дисциплин специализации</li>
            <li>3 выезднных модуля в Москве</li>
          </ul>
          <div className='note'>*Возможна рассрочка</div>
        </div>
        <div className='inner-block'>
          <div className='text'>
            <p>
              Успех в бизнесе напрямую связывают с получением
              бизнес-образования.
            </p>
            <p>
              Свяжите ближайшие полгода с Moscow Business Academy и кратно
              увеличьте запас знаний
            </p>
            <p className='red'>Запишитесь на MBA сегодня:</p>
          </div>
          <div className='price'>130 000 Р.</div>
          <div className='button-block'>
            <Popup
              trigger={<a className='button empty-button'>Оставить заявку</a>}
              modal
              nested
            >
              {(close) => (
                <PopUpForm
                  programTitle={programTitle}
                  title={'Получите консультацию'}
                  closePopUp={close}
                />
              )}
            </Popup>
          </div>
          {/* <a href='' className='cheaper-link'>
        Хочу дешевле
      </a> */}
        </div>
      </div>
    </section>
  )
}

export default CostOfStudy
