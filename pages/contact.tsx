import stls from '@/styles/modules/ContactPage.module.sass'
import Head from 'next/head'
import ContactCards from '@/components/general/ContactCards'
import { apiProgramsReqUrl, server } from '@/config/index'

const contact = ({ programs }) => {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>

      <div className='container'>
        <h1 className={stls.h1}>КОНТАКТЫ</h1>
        <ContactCards />
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

export default contact
