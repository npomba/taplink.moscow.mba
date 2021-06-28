import Programs from '@/components/pages/Programs'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'

const programsProfessionalBlended = ({ programs }) => {
  const data = programs.filter(
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

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default programsProfessionalBlended
