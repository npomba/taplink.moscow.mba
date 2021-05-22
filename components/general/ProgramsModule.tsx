import { useState } from 'react'

const ProgramsModule = ({ title = 'Модуль', subTitle = '', items }) => {
  const [showContent, setShowContent] = useState(false)
  const [moduleIsOpen, setModuleIsOpen] = useState(false)

  const openModule = () => {
    setModuleIsOpen(o => !o)
    setShowContent(o => !o)
  }

  return (
    <div className='training-block'>
      <div
        className={`training-modul ${moduleIsOpen && 'opened'}`}
        onClick={openModule}>
        <div className='plus'>
          <i></i>
          <i></i>
        </div>
        {title}
      </div>
      <div
        className={`training-content ${showContent && 'showTrainingContent'}`}>
        {subTitle && <h4 className='training-content__title'>{subTitle}</h4>}
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
