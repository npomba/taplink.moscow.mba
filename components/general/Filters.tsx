import Link from 'next/link'
import useAt from '@/components/hooks/useAt'
import stls from '@/styles/modules/Filters.module.sass'
import Discount from '@/components/costs/Discount'

const Filters = ({ mbaTypeOfProgram, mbaFormat }) => {
  const at = useAt()
  return (
    <ul className={stls.filters}>
      <li>
        <h4 className={stls.title}>Тип программы</h4>
        <div className={stls.content}>
          <Link href={`/programs/mini/${mbaFormat}`}>
            <a>
              <span
                className={`${stls.circle} ${
                  at.mini ? stls.active : ''
                }`}></span>{' '}
              Mini MBA
            </a>
          </Link>

          <Link href={`/programs/professional/${mbaFormat}`}>
            <a>
              <span
                className={`${stls.circle} ${
                  at.professional ? stls.active : ''
                }`}></span>{' '}
              Professional MBA
            </a>
          </Link>

          <Link href={`/programs/industry/${mbaFormat}`}>
            <a>
              <span
                className={`${stls.circle} ${
                  at.industry ? stls.active : ''
                }`}></span>{' '}
              Industry MBA
            </a>
          </Link>

          <Link href='/programs/executive' locale='ru'>
            <a className={stls.highlight}>
              Executive MBA <span className={stls.premium}>Premium</span>
            </a>
          </Link>
        </div>
      </li>
      <li>
        <h4 className={stls.title}>Формат обучения</h4>
        <div className={stls.content}>
          <Link href={`/programs/${mbaTypeOfProgram}/blended`}>
            <a>
              <span
                className={`${stls.circle} ${
                  at.blended ? stls.active : ''
                }`}></span>{' '}
              BLENDED (с очными модулями)
            </a>
          </Link>

          <Link href={`/programs/${mbaTypeOfProgram}/online`}>
            <a>
              <span
                className={`${stls.circle} ${
                  at.online ? stls.active : ''
                }`}></span>{' '}
              ONLINE (дистанционно){' '}
              <span className={stls.discount50}>
                <Discount />
              </span>
            </a>
          </Link>
        </div>
      </li>
    </ul>
  )
}

export default Filters
