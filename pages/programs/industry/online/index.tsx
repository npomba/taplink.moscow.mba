import Programs from '@/components/pages/Programs'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'

const programsIndustryOnline = ({ programs }) => {
  const data = programs.filter(
    program =>
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

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default programsIndustryOnline
