// import { server } from '@/config/index'

import Programs from '@/components/pages/Programs'
import { server, apiProgramsReqUrl } from '@/config/index'

const programs = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.mbaFormat === 'online' && program.mbaTypeOfProgram === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'online'} />
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

export default programs
