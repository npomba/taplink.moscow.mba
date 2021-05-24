import { apiProgramsReqUrl, server } from '@/config/index'

import OnlineProgram from '@/components/pages/OnlineProgram'

const programsMiniOnlineProgram = ({ program, programs }) => {
  return <OnlineProgram program={program} />
}

export const getStaticProps = async context => {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  const programsFiltered = data.filter(
    item =>
      item.url === context.params.url &&
      item.mbaFormat === 'online' &&
      item.mbaTypeOfProgram === 'mini'
  )

  const program = programsFiltered[0]

  return {
    props: {
      program,
      programs: data
    },
    revalidate: 1
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const programs = await res.json()

  const urls = programs.data
    .map(program => {
      if (
        program.mbaFormat === 'online' &&
        program.mbaTypeOfProgram === 'mini'
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
