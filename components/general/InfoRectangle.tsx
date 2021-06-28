import Until from '@/components/costs/Until'
import TrainingPeriod from '@/components/costs/TrainingPeriod'

import SetString from '@/components/hooks/SetString'
import langMenu from '@/data/translation/menu'

import useAt from '@/components/hooks/useAt'
import Price from '@/components/costs/Price'

const InfoRectangle = ({ programPage = false }) => {
  const at = useAt()
  return (
    <ul
      className={`jumbotron-red-info ${
        programPage ? 'jumbotron-red-info-programs-page' : ''
      }`}>
      <li>
        <p>Срок обучения:</p>
        <div className='detail'>
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
          <span className='old-price'>
            {at.mini && at.online && (
              <Price discount={true} type='mini' format='online' />
            )}
            {at.mini && at.blended && (
              <Price discount={false} type='mini' format='blended' />
            )}{' '}
            {at.professional && at.online && (
              <Price discount={true} type='professional' format='online' />
            )}{' '}
            {at.professional && at.blended && (
              <Price discount={false} type='professional' format='blended' />
            )}{' '}
            {at.industry && at.online && (
              <Price discount={true} type='industry' format='online' />
            )}{' '}
            {at.industry && at.blended && (
              <Price discount={false} type='industry' format='blended' />
            )}{' '}
            {at.executive && <Price discount={false} type='executive' />}{' '}
            &#8381;
          </span>{' '}
          <span className='new-price'>
            {at.mini && at.online && (
              <>
                <Price discount={false} type='mini' format='online' /> &#8381;
              </>
            )}
            {at.professional && at.online && (
              <>
                <Price discount={false} type='professional' format='online' />{' '}
                &#8381;
              </>
            )}
            {at.industry && at.online && (
              <>
                <Price discount={false} type='industry' format='online' />{' '}
                &#8381;
              </>
            )}{' '}
          </span>
        </div>
      </li>
    </ul>
  )
}

export default InfoRectangle
