import Until from '@/components/dates/Until'
import TrainingPeriod from '@/components/dates/TrainingPeriod'

import setString from '@/components/hooks/setString'
import langMenu from '@/data/translation/menu'

import useAt from '@/components/hooks/useAt'
import Price from '../prices/Price'

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
            ? setString(langMenu.formatRemote)
            : at.blended
            ? setString(langMenu.formatBlended)
            : at.executive
            ? setString(langMenu.formatExecutive)
            : ''}
        </div>
      </li>
      <li>
        <p>Ближайшее зачисление:</p>
        <div className='detail'>
          <Until preposition={false} executive={true} />
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
