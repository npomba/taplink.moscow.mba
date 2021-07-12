import stls from '@/styles/components/sections/CostOfStudy.module.sass'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Until from '@/components/costs/Until'
import PopupForm from '@/components/popups/PopupForm'
import useAt from '@/components/hooks/useAt'
import Price from '@/components/costs/Price'
import Loan from '@/components/costs/Loan'
import Discount from '@/components/costs/Discount'
import TrainingPeriod from '../costs/TrainingPeriod'
import ProgramSubjects from '../hooks/ProgramSubjects'

const PriceBlock = ({
  isDiscounted,
  canPayInInstalments,
  programType,
  programFormat,
  withDesc,
  withPriceTitles
}) => {
  let topContentPart

  if (withDesc) {
    topContentPart = (
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
    )
  }

  if (!withDesc) {
    topContentPart = (
      <div className='price'>
        {withPriceTitles && <p className={stls.priceDesc}>Стоимость курса</p>}
        <Price
          discount={isDiscounted}
          type={programType}
          format={programFormat}
        />{' '}
      </div>
    )
  }

  return (
    <>
      {topContentPart}
      <div className='price'>
        {withPriceTitles && (
          <p className={stls.priceDesc}>Оплата по месяцам без переплаты</p>
        )}
        {canPayInInstalments ? (
          <Loan
            discount={isDiscounted}
            type={programType}
            format={programFormat}
          />
        ) : (
          <Price
            discount={isDiscounted}
            type={programType}
            format={programFormat}
          />
        )}
      </div>
    </>
  )
}

const CostOfStudy = ({
  programTitle = null,
  programId = null,
  programFormat = null,
  programType = null
}) => {
  const at = useAt()
  const isDiscounted =
    (at.mini && at.online) ||
    (at.professional && at.online) ||
    (at.industry && at.online) ||
    (at.profession && at.online)

  const canPayInInstalments = at.online
  const costWithDescription =
    at.mini || at.professional || at.industry || at.executive

  let list

  if (at.mini || at.professional || at.industry || at.executive) {
    list = (
      <>
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
      </>
    )
  } else {
    list = (
      <ul className='simple-list'>
        <li>От 4 месяцев обучения</li>
        <li>
          {at.online
            ? 'Дистанционно'
            : at.blended
            ? 'С очными модулями'
            : 'Очно'}
        </li>
        <li>
          Ближайший набор <Until preposition={false} />
        </li>
        <li>Теория и практические задания</li>
        <li>Диплом установленного образца</li>
      </ul>
    )
  }

  return (
    <section className='program-price-section'>
      {isDiscounted && (
        <div className='discount-sticker right-corner'>
          <div className='size'>
            <Discount />
          </div>
          <span>
            <Until />
          </span>
        </div>
      )}
      <h2 className={classNames({ [stls.bigMb]: at.profession })}>
        Стоимость обучения
      </h2>
      <div className='program-price-block single-program-price'>
        <div className='inner-block'>
          <div className='name'>
            {at.mini
              ? 'MBA Mini'
              : at.professional
              ? 'MBA Professional'
              : at.industry
              ? 'MBA Industry'
              : at.executive
              ? 'MBA Executive'
              : 'Профессиональная переподготовка'}
          </div>
          {list}
        </div>
        <div
          className={classNames('inner-block', {
            [stls.verticalSeparatorLine]: at.profession
          })}>
          <PriceBlock
            isDiscounted={isDiscounted}
            canPayInInstalments={canPayInInstalments}
            programType={programType}
            programFormat={programFormat}
            withDesc={costWithDescription}
            withPriceTitles={at.profession}
          />
          <div
            className={classNames('button-block', {
              [stls.noMb]: at.profession
            })}>
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
