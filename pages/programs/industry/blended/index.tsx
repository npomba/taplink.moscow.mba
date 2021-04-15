import Programs from '../../../../components/pages/Programs'

const programsIndustryBlended = ({ programs }) => {
  let data = null

  data = programs.data.filter(
    (program) =>
      program.mbaFormat === 'blended' && program.mbaTypeOfProgram === 'industry'
  )

  return (
    <Programs
      programs={data}
      mbaTypeOfProgram={'industry'}
      mbaFormat={'blended'}
    />
  )
}

export default programsIndustryBlended
