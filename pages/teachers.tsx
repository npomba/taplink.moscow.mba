import Head from 'next/head'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

import Teachers from '../components/sections/Teachers'

const teachers = () => {
  // useEffect(() => {
  //   loadJs(
  //     [
  //       '/assets/js/slick.min.js',
  //       '/assets/js/lazysizes.min.js',
  //       '/assets/js/circle-progress.min.js',
  //       '/assets/js/jquery.magnific-popup.min.js',
  //       '/assets/js/myjs.js',
  //     ],
  //     {
  //       async: false,
  //     }
  //   )
  // }, [])

  return (
    <>
      <Head>
        <title>Преподаватели</title>
      </Head>
      <div className='container'>
        <Teachers atStandAlonePage={true} />
      </div>
    </>
  )
}

export default teachers
