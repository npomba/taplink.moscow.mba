import stls from '@/styles/modules/ContactPage.module.sass'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/header'
import Head from 'next/head'
import ContactCards from '@/components/general/ContactCards'
import { apiProgramsReqUrl, server } from '@/config/index'

const contact = ({ programs }) => {
  return (
    <>
      <Head>
        <title>{setString(lang.linkContacts)}</title>
      </Head>

      <div className='container'>
        <h1 className={stls.h1}>{setString(lang.linkContacts)}</h1>
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
