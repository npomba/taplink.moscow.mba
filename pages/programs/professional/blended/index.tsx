import Programs from '@/components/pages/Programs'

const programsProfessionalBlended = ({ programs }) => {
  const data = programs.data.filter(
    program =>
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
