import stls from '@/styles/components/general/ProgramsModule.module.sass'
import { useState } from 'react'

const ProgramsModule = ({ title = 'Модуль', subTitle = '', items }) => {
  const [moduleIsOpen, setModuleIsOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const openModule = () => {
    setModuleIsOpen(o => !o)
    setShowContent(o => !o)
  }

  const trainingModuleClasses = [stls.trainingModule]
  if (moduleIsOpen) trainingModuleClasses.push(stls.opened)

  const trainingContentClasses = [stls.trainingContent]
  if (showContent) trainingContentClasses.push(stls.showTrainingContent)

  return (
    <div className={stls.trainingBlock}>
      <div className={trainingModuleClasses.join(' ')} onClick={openModule}>
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
