import Programs from '../../../../components/pages/Programs'

const programsProfessionalBlended = ({ programs }) => {
  let data = null

  data = programs.data.filter(
    (program) =>
      program.mbaFormat === 'blended' &&
      program.mbaTypeOfProgram === 'professional'
  )

  return (
    <Programs
      programs={data}
      mbaTypeOfProgram={'professional'}
      mbaFormat={'blended'}
    />
  )
}

export default programsProfessionalBlended
