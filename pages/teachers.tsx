import Head from 'next/head'

import Teachers from '../components/sections/Teachers'

const teachers = () => {
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

export default teachers
