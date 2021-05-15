import Until from '@/components/dates/Until'

import setString from '@/components/hooks/setString'
import langMenu from '@/data/translation/menu'

import useAt from '@/components/hooks/useAt'

const InfoRectangle = ({ programPage = false }) => {
  const at = useAt()
  return (
    <ul
      className={`jumbotron-red-info ${
        programPage ? 'jumbotron-red-info-programs-page' : ''
      }`}>
      <li>
        <p>Срок обучения:</p>
        <div className='detail'>3 года 6 месяцев</div>
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
          <Until preposition={false} />
        </div>
      </li>
      <li>
        <p>Стоимость:</p>
        <div className='detail'>
          <span className='old-price'>390 000 &#8381;</span>{' '}
          <span className='new-price'>540 000 Р.</span>
        </div>
      </li>
    </ul>
  )
}

export default InfoRectangle
