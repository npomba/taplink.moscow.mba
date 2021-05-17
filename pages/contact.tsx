import stls from '@/styles/modules/ContactPage.module.sass'
import Head from 'next/head'

const contact = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>

      <div className='container'>
        <h1 className={stls.h1}>КОНТАКТЫ</h1>
      </div>
    </>
  )
}

export default contact
