import Head from 'next/head'

import Teachers from '../components/sections/Teachers'
import { apiProgramsReqUrl, server } from '@/config/index'

const teachers = ({ programs }) => {
  return (
    <>
      <Head>
        <title>Эксперты</title>
      </Head>
      <div className='container'>
        <Teachers atStandAlonePage={true} />
      </div>
    </>
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

export default teachers
