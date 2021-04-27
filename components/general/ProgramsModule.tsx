const ProgramsModule = ({ title = 'Модуль', subTitle = '', items }) => {
  return (
    <div className='training-block'>
      <div className='training-modul'>
        <div className='plus'>
          <i></i>
          <i></i>
        </div>
        {title}
      </div>
      <div className='training-content'>
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
