import { server } from '@/config/index'

import OnlineProgram from '@/components/pages/OnlineProgram'

const programsMiniOnlineProgram = ({ program }) => {
  return <OnlineProgram program={program} />
}

export const getStaticProps = async (context) => {
  // const programUrl = context.params.id

  // const resAllPrograms = await fetch(
  //   `${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`
  // )
  // const allPrograms = await resAllPrograms.json()

  // const singleProgram = allPrograms.data.filter((program) => {
  //   if (
  //     program.mbaFormat === 'online' &&
  //     program.mbaTypeOfProgram === 'industry' &&
  //     program.url === programUrl
  //   ) {
  //     return program
  //   }
  // })

  // console.log(singleProgram)

  const res = await fetch(`${server}/api/v1/courses/${context.params.id}`)
  const program = await res.json()

  return {
    props: {
      // program: singleProgram[0],
      program,
    },
  }
}

export const getStaticPaths = async () => {
  // const res = await fetch(
  //   `${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses?mbaFormat=blended&mbaTypeOfProgram=industry`
  // )
  const res = await fetch(
    `${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`
  )
  const programs = await res.json()

  const urls = programs.data
    .map((program) => {
      if (
        program.mbaFormat === 'online' &&
        program.mbaTypeOfProgram === 'mini'
      ) {
        return program._id
      }
    })
    .filter((program) => program !== undefined)

  // const urlsWords = programs.data
  //   .map((program) => {
  //     let potentialProgram = null
  //     urls.forEach((url) => {
  //       if (program._id === url) {
  //         potentialProgram = program.url
  //       }
  //     })
  //     return potentialProgram
  //   })
  //   .filter((program) => program !== null)

  // console.log(urlsWords)

  // console.log(urls)

  const paths = urls.map((id) => ({
    params: { id: id.toString() },
  }))

  // console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export default programsMiniOnlineProgram
