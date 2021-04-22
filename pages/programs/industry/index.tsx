import Programs from '@/components/pages/Programs'

const programsIndustry = ({ programs }) => {
  let data = null

  data = programs.data.filter(
    (program) =>
      program.mbaFormat === 'online' && program.mbaTypeOfProgram === 'industry'
  )

  return (
    <Programs
      programs={data}
      mbaTypeOfProgram={'industry'}
      mbaFormat={'online'}
    />
  )
}

export default programsIndustry
