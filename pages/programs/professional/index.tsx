import Programs from '@/components/pages/Programs'
import { server, apiProgramsReqUrl } from '@/config/index'

const programsProfessional = ({ programs }) => {
  const data = programs.filter(
    program =>
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

export async function getStaticProps() {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default programsProfessional
