import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import stls from '@/styles/modules/ContactPage.module.sass'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/header'
import ContactCards from '@/components/general/ContactCards'
import contactData from '@/data/contactData'
import { apiProgramsReqUrl, server } from '@/config/index'

const contact = ({ programs }) => {
  const contactInfo = contactData()
  const ruNumbers = [contactInfo.tels[0].data, contactInfo.tels[1].data]
  return (
    <>
      <NextSeo
        title={`${setString(lang.linkContacts)} - Moscow Business Academy`}
        description={truncate(
          `${setString(contactInfo.addresses[0].data.city)}, ${setString(
            contactInfo.addresses[0].data.street
          )}, ${ruNumbers[0].val}, ${contactInfo.email}`,
          120
        )}
        canonical={'https://moscow.mba/contact'}
      />

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
