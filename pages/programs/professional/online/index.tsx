import Programs from '@/components/pages/Programs'

const programsProfessionalOnline = ({ programs }) => {
  let data = null

  data = programs.data.filter(
    (program) =>
      program.mbaFormat === 'online' &&
      program.mbaTypeOfProgram === 'professional'
  )

  return (
    <Programs
      programs={data}
      mbaTypeOfProgram={'professional'}
      mbaFormat={'online'}
    />
  )
}

export default programsProfessionalOnline
