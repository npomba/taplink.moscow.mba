const ProgramGoal = ({ data }) => {
  return (
    <section className='purpose-section'>
      <div className='section-pl'>
        <h2>Цель программы</h2>
        <div className='title-desc'>{data.goalsOfProgram}</div>
      </div>
    </section>
  )
}

export default ProgramGoal
