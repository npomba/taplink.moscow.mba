import Head from 'next/head'
import WebinarCards from '@/components/sections/WebinarCards'
import useAt from '@/components/hooks/useAt'
import Link from 'next/link'

const Webinars = ({ title, heading, timeframe = 'all' }) => {
  const at = useAt()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

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
