import { apiProgramsReqUrl, backendUrl } from '@/config/index'

import ProfessionOnlineProgram from '@/components/pages/ProfessionOnlineProgram'

const programsMiniOnlineProgram = ({ program, programs }) => {
  return <ProfessionOnlineProgram program={program} />
}

export const getStaticProps = async context => {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  const programsFiltered = data.filter(
    item =>
      item.url === context.params.url &&
      item.mbaFormat === 'online' &&
      item.mbaTypeOfProgram === 'profession'
  )

  const program = programsFiltered[0]

  return {
    props: {
      program,
      programs: data
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const programs = await res.json()

  const urls = programs.data
    .map(program => {
      if (
        program.mbaFormat === 'online' &&
        program.mbaTypeOfProgram === 'profession'
      ) {
        return { id: program._id, url: program.url && program.url }
      }
    })
    .filter(program => program !== undefined)

  const paths = urls.map(item => ({
    params: { url: item.url.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export default programsMiniOnlineProgram
