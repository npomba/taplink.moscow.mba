import Programs from '@/components/pages/Programs'
import { server, apiProgramsReqUrl } from '@/config/index'

const programsMiniBlended = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.mbaFormat === 'blended' && program.mbaTypeOfProgram === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'blended'} />
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default programsMiniBlended
