import Head from 'next/head'
import Link from 'next/link'
import useAt from '@/components/hooks/useAt'
import langMenu from '@/data/translation/menu'
import setString from '@/components/hooks/setString'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import InfoRectangle from '@/components/general/InfoRectangle'
import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import ProgramsQt from '@/components/hooks/ProgramsQt'
import Filters from '@/components/general/Filters'
import stls from '@/styles/modules/ProgramsPage.module.sass'
import { CheckCircle, ArrowTopRight } from '@/components/general/Svgs'

const PagePrograms = ({ programs, mbaTypeOfProgram, mbaFormat }) => {
  const at = useAt()
  return (
    <>
      <Head>
        <title>Программы</title>
      </Head>

      <section className={`jumbotron-section ${stls.jumbotronPrograms}`}>
        <div className='container'>
          <Breadcrumbs />
        </div>
      </section>
      <div className='container'>
        <h1 className={stls.title}>ПРОГРАММЫ ОБУЧЕНИЯ</h1>
        <div className={stls.container}>
          <Filters mbaTypeOfProgram={mbaTypeOfProgram} mbaFormat={mbaFormat} />
          <div className={stls.content}>
            <div>
              <div className={stls.subtitle}>
                <h2>
                  {at.mini
                    ? 'Mini MBA'
                    : at.professional
                    ? 'Professional MBA'
                    : at.industry
                    ? 'Industry MBA'
                    : ''}{' '}
                  {mbaFormat}
                </h2>
                <span className={stls.qtPrograms}>
                  <ProgramsQt programs={programs} /> программ
                </span>
              </div>

              <p className={stls.desc}>
                {at.mini
                  ? setString(langMenu.categoryDiscMini)
                  : at.professional
                  ? setString(langMenu.categoryDiscProfessional)
                  : at.industry
                  ? setString(langMenu.categoryDiscIndustry)
                  : ''}
              </p>

              <div className={stls.counters}>
                <p>
                  <CheckCircle />
                  <ProgramSubjects subjects='base' />
                  &nbsp;дисциплин об управлениии
                </p>
                <p>
                  <CheckCircle />
                  <ProgramSubjects subjects='specialty' />
                  &nbsp;дисциплин специализации
                </p>
              </div>
            </div>
            <InfoRectangle programPage={true} />
            <div className={`mini-programs-slider ${stls.programs}`}>
              {programs.map((program, idx) => {
                return (
                  <Link
                    href={`/programs/${mbaTypeOfProgram}/${mbaFormat}/${program.url}`}
                    key={program._id}
                  >
                    <a className={stls.program}>
                      <div className={stls.arrow}>
                        <ArrowTopRight />
                      </div>
                      <div className={stls.number}>{idx + 1}.</div>
                      <div className={stls.programTitle}>{program.title}</div>
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PagePrograms
