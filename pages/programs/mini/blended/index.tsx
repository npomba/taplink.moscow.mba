import Programs from '@/components/pages/Programs'

const programsMiniBlended = ({ programs }) => {
  const data = programs.data.filter(
    program =>
      program.mbaFormat === 'blended' && program.mbaTypeOfProgram === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'blended'} />
  )
}

export default programsMiniBlended
