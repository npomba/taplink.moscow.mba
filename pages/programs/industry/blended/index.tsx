import Programs from '@/components/pages/Programs'
import { server, apiProgramsReqUrl } from '@/config/index'

const programsIndustryBlended = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.mbaFormat === 'blended' && program.mbaTypeOfProgram === 'industry'
  )

  return (
    <Programs
      programs={data}
      mbaTypeOfProgram={'industry'}
      mbaFormat={'blended'}
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

export default programsIndustryBlended
