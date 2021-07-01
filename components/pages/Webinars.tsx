import stls from '@/styles/modules/pages/Webinars.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import WebinarCards from '@/components/sections/WebinarCards'
import useAt from '@/components/hooks/useAt'
import Link from 'next/link'
import Breadcrumbs from '@/components/general/Breadcrumbs'

const Webinars = ({ title, heading, timeframe = 'all' }) => {
  const at = useAt()
  return (
    <>
      <NextSeo
        title={`${title} MBA - Moscow Business Academy`}
        description={truncate('Узнайте даты и время вебинаров MBA', 120)}
        canonical={'https://moscow.mba/webinars'}
      />

      <section className={`jumbotron-section ${stls.jumbotronGeneral}`}>
        <div className='container'>
          <Breadcrumbs />
        </div>
      </section>
      <div className='container'>
        {/* vebinars-section */}
        <section className='simple-section'>
          <h1>{heading}</h1>
          <ul className='vebinars-tabs'>
            <li>
              <Link href='/webinars' locale='ru'>
                <a className={`${at.webinarsIndex && 'active'}`}>
                  Все вебинары
                </a>
              </Link>
            </li>
            <li>
              <Link href='/webinars/upcoming' locale='ru'>
                <a className={`${at.webinarsUpcoming && 'active'}`}>
                  Ближайшие вебинары
                </a>
              </Link>
            </li>
            <li>
              <Link href='/webinars/archive' locale='ru'>
                <a className={`${at.webinarsArchive && 'active'}`}>
                  Прошедшие вебинары
                </a>
              </Link>
            </li>
          </ul>
          <WebinarCards timeframe={timeframe} />
        </section>
      </div>
    </>
  )
}

export default Webinars
