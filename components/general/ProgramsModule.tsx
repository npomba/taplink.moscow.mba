import stls from '@/styles/components/general/ProgramsModule.module.sass'
import { useState } from 'react'

const ProgramsModule = ({ title = 'Модуль', subTitle = '', items }) => {
  const [isOpen, setIsOpen] = useState(false)

  const trainingModuleClasses = [stls.trainingModule]
  if (isOpen) trainingModuleClasses.push(stls.opened)

  const trainingContentClasses = [stls.trainingContent]
  if (isOpen) trainingContentClasses.push(stls.showTrainingContent)

  return (
    <div className={stls.trainingBlock}>
      <div
        className={trainingModuleClasses.join(' ')}
        onClick={() => setIsOpen(prevState => !prevState)}>
        <div className={stls.plus}>
          <i></i>
          <i></i>
        </div>
        {title}
      </div>
      <div className={trainingContentClasses.join(' ')}>
        {subTitle && <h4 className={stls.trainingContentTitle}>{subTitle}</h4>}
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
