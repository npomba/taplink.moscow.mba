import stls from '@/styles/components/sections/CostOfStudy.module.sass'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Until from '@/components/costs/Until'
import PopupForm from '@/components/popups/PopupForm'
import useAt from '@/components/hooks/useAt'
import Price from '@/components/costs/Price'
import TrainingPeriod from '../costs/TrainingPeriod'
import ProgramSubjects from '../hooks/ProgramSubjects'

const CostOfStudy = ({ programTitle = null, programId = null }) => {
  const at = useAt()
  return (
    <section className='program-price-section'>
      <h2>Стоимость обучения</h2>
      <div className='program-price-block single-program-price'>
        <div className='inner-block'>
          <div className='name'>
            MBA{' '}
            {at.mini
              ? 'Mini'
              : at.professional
              ? 'Professional'
              : at.industry
              ? 'Industry'
              : at.executive
              ? 'Executive'
              : null}
          </div>
          <ul className='simple-list'>
            <li>
              <TrainingPeriod
                type={
                  at.mini
                    ? 'mini'
                    : at.professional
                    ? 'professional'
                    : at.industry
                    ? 'industry'
                    : at.executive
                    ? 'executive'
                    : null
                }
              />
            </li>
            <li>
              {at.online
                ? 'Дистанционно'
                : at.blended
                ? 'С очными модулями'
                : 'Очно'}
            </li>
            <li>
              Ближайший набор{' '}
              <Until preposition={false} executive={at.executive && true} />
            </li>
            <li>Живое общение с экспертами</li>
            <li>
              <ProgramSubjects
                type={
                  at.mini
                    ? 'mini'
                    : at.professional
                    ? 'professional'
                    : at.industry
                    ? 'industry'
                    : at.executive
                    ? 'executive'
                    : null
                }
                subjects={'base'}
              />{' '}
              дисциплин об управлении
            </li>
            <li>
              <ProgramSubjects
                type={
                  at.mini
                    ? 'mini'
                    : at.professional
                    ? 'professional'
                    : at.industry
                    ? 'industry'
                    : at.executive
                    ? 'executive'
                    : null
                }
                subjects={'specialty'}
              />{' '}
              дисциплин специализации
            </li>
            {!at.online && <li>3 выездных модуля в Москве</li>}
          </ul>
          <div className='note'>*Возможна рассрочка</div>
        </div>
        <div className='inner-block'>
          <div className='text'>
            <p>
              Успех в бизнесе напрямую связывают с получением бизнес-образования
            </p>
            <p>
              Инвестируйте своё время в образование с Moscow Business Academy и
              кратно увеличьте свой запас знаний и доход
            </p>
            <p className='red'>Запишитесь на MBA сегодня:</p>
          </div>
          <div className='price'>
            <Price
              discount={
                at.mini && at.online
                  ? true
                  : at.professional && at.online
                  ? true
                  : at.industry && at.online
                  ? true
                  : false
              }
              type={
                at.mini
                  ? 'mini'
                  : at.professional
                  ? 'professional'
                  : at.industry
                  ? 'industry'
                  : at.executive
                  ? 'executive'
                  : null
              }
              format={at.online ? 'online' : at.blended ? 'blended' : null}
            />{' '}
            Р.
          </div>
          <div className='button-block'>
            <Popup
              trigger={<a className='button empty-button'>Оставить заявку</a>}
              modal
              nested>
              {close => (
                <PopupForm
                  programId={programId}
                  programTitle={programTitle}
                  title={'Получите консультацию'}
                  closePopUpForm={close}
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
