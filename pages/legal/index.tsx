import stls from '@/styles/pages/legal/Index.module.sass'
// import stls from '@/styles/modules/LegalPage.module.sass'
import { NextSeo } from 'next-seo'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import CurrentLicenses from '@/components/sections/CurrentLicenses'
import MemberOfRABE from '@/components/sections/MemberOfRABE'
import OurDiplomasAndCertificates from '@/components/sections/OurDiplomasAndCertificates'
import CompanyCard from '@/components/sections/CompanyCard'
import LegalDocuments from '@/components/sections/LegalDocuments'

const legal = ({ programs }) => {
  return (
    <>
      <NextSeo
        title={'Нормативные документы - Moscow Business Academy'}
        description={
          'Лицензия на осуществление образовательной деятельности, приложение к...'
        }
        canonical={'https://moscow.mba/legal'}
      />

      <section
        className={`jumbotron-section ${breadcrumbsStls.jumbotronGeneral}`}>
        <div className='container'>
          <Breadcrumbs />
        </div>
      </section>
      <div className='container'>
        <h1 className={stls.mainHeading}>Сведения об организации</h1>
        <CurrentLicenses />
        <MemberOfRABE />
        <OurDiplomasAndCertificates />
        <CompanyCard />
        <LegalDocuments />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default legal
