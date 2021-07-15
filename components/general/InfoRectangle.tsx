import stls from '@/styles/components/general/InfoRectangle.module.sass'
import Until from '@/components/costs/Until'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import SetString from '@/components/hooks/SetString'
import langMenu from '@/data/translation/menu'
import useAt from '@/components/hooks/useAt'
import Price from '@/components/costs/Price'

const InfoRectangle = ({ programPage = false, type = null, format = null }) => {
  const at = useAt()
  const isDiscounted =
    (at.mini && at.online) ||
    (at.professional && at.online) ||
    (at.industry && at.online) ||
    (at.profession && at.online)

  return (
    <ul
      className={`jumbotron-red-info ${
        programPage ? 'jumbotron-red-info-programs-page' : ''
      }`}>
      <li>
        <p>Срок обучения:</p>
        <div className='detail'>
          <TrainingPeriod type={type} />
        </div>
      </li>
      <li>
        <p>Форма обучения:</p>
        <div className='detail'>
          {at.online
            ? SetString(langMenu.formatRemote)
            : at.blended
            ? SetString(langMenu.formatBlended)
            : at.executive
            ? SetString(langMenu.formatExecutive)
            : ''}
        </div>
      </li>
      <li>
        <p>Ближайшее зачисление:</p>
        <div className='detail'>
          <Until preposition={false} executive={at.executive && false} />
        </div>
      </li>
      <li>
        <p>Стоимость:</p>
        <div className='detail red-rectangle-price'>
          <Price discount={isDiscounted} type={type} format={format} />
        </div>
      </li>
    </ul>
  )
}

export default InfoRectangle
