import { NextSeo, CorporateContactJsonLd } from 'next-seo'
import truncate from 'truncate'
import stls from '@/styles/modules/ContactPage.module.sass'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/header'
import ContactCards from '@/components/general/ContactCards'
import contactData from '@/data/contactData'
import { apiProgramsReqUrl, server } from '@/config/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import breadcrumbsStls from '@/styles/modules/Breadcrumbs.module.sass'

const contact = ({ programs }) => {
  const contactInfo = contactData()
  return (
    <>
      <NextSeo
        title={`${setString(lang.linkContacts)} - Moscow Business Academy`}
        description={truncate(
          `${setString(contactInfo.ru.address.city)}, ${setString(
            contactInfo.ru.address.street
          )}, ${contactInfo.ru.tels[0].val}, ${contactInfo.ru.email.val}`,
          120
        )}
        canonical={'https://moscow.mba/contact'}
      />

      <CorporateContactJsonLd
        url='https://moscow.mba'
        logo='https://moscow.mba/logo.jpg'
        contactPoint={[
          {
            telephone: '+7-800-500-27-47',
            contactType: 'customer service',
            areaServed: 'RU',
            availableLanguage: ['Russian'],
          },
        ]}
      />
      <section
        className={`jumbotron-section ${breadcrumbsStls.jumbotronGeneral}`}
      >
        <div className='container'>
          <Breadcrumbs />
        </div>
      </section>
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
      programs: data,
    },
  }
}

export default contact
