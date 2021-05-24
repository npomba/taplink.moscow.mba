import Programs from '@/components/pages/Programs'

const programsMini = ({ programs }) => {
  const data = programs.data.filter(
    program =>
      program.mbaFormat === 'online' && program.mbaTypeOfProgram === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'online'} />
  )
}

export default programsMini
