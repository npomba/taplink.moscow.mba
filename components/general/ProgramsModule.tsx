import stls from '@/styles/components/general/ProgramsModule.module.sass'
import { useState } from 'react'

const ProgramsModule = ({
  title = 'Модуль',
  subTitle = '',
  items,
  fadeOutEffect = false
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const moduleClassNames = [stls.module]
  const contentClassNames = [stls.content]

  if (fadeOutEffect) contentClassNames.push(stls.fadeOutEffect)

  if (isOpen) {
    moduleClassNames.push(stls.opened)
    contentClassNames.push(stls.show)
  }

  return (
    <div className={stls.container}>
      <div
        className={moduleClassNames.join(' ')}
        onClick={() => setIsOpen(prevState => !prevState)}>
        <div className={stls.plus}>
          <i></i>
          <i></i>
        </div>
        {title}
      </div>
      <div className={contentClassNames.join(' ')}>
        {subTitle && <h4 className={stls.title}>{subTitle}</h4>}
        <ul className='simple-list'>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProgramsModule
