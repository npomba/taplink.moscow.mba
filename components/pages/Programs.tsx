import Head from 'next/head'
import Link from 'next/link'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

const PagePrograms = ({ programs, mbaTypeOfProgram, mbaFormat }) => {
  // useEffect(() => {
  //   loadJs(
  //     [
  //       '/assets/js/slick.min.js',
  //       '/assets/js/lazysizes.min.js',
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
        <title>Mini MBA</title>
      </Head>

      {/* jumbotron-section */}
      <section className='jumbotron-section jumbotron-programs'>
        <div className='container'>
          <div className='jumbotron-content jumbotron-content-programs-page'>
            <div className='breadcrumbs-outer jumbotron-breadcrumbs'>
              <ul className='breadcrumbs'>
                <li>
                  <a href=''>Программы MBA</a>
                </li>
                <li>
                  <a href=''>Mini MBA</a>
                </li>
                <li>
                  <span>Mini MBA</span>
                </li>
              </ul>
            </div>
            {/* <div className='jumbotron-flex'>
              <div className='jumbotron-text jumbotron-text-mini'>
                <h1>Mini MBA online</h1>
                <div className='desc'>
                  Программа профессиональной переподготовки Mini MBA разработана
                  для специалистов и руководителей среднего звена, которые хотят
                  систематизировать имеющиеся знания или познакомиться с
                  ключевыми аспектами новой для себя сферы управленческой
                  деятельности.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className='container'>
        <h1 className='programs-title'>ПРОГРАММЫ ОБУЧЕНИЯ</h1>
        <div className='container-programs'>
          {/* filter */}
          <ul className='filters'>
            <li className='filters__filter'>
              <h4 className='filter__title'>Формат обучения</h4>
              <div className='filter__content'>
                <Link href={`/programs/mini/${mbaFormat}`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaTypeOfProgram === 'mini' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    Mini MBA
                  </a>
                </Link>

                <Link href={`/programs/professional/${mbaFormat}`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaTypeOfProgram === 'professional' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    Professional MBA
                  </a>
                </Link>

                <Link href={`/programs/industry/${mbaFormat}`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaTypeOfProgram === 'industry' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    Industry MBA
                  </a>
                </Link>

                <Link href='/programs/executive'>
                  <a className='txt-highlight'>
                    Executive MBA <span className='premium'>Premium</span>
                  </a>
                </Link>
              </div>
            </li>
            <li className='filters__filter'>
              <h4 className='filter__title'>Формат обучения</h4>
              <div className='filter__content'>
                <Link href={`/programs/${mbaTypeOfProgram}/blended`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaFormat === 'blended' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    BLENDED (с очными модулями)
                  </a>
                </Link>

                <Link href={`/programs/${mbaTypeOfProgram}/online`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaFormat === 'online' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    ONLINE (дистанционно){' '}
                    <span className='discount50'>-50%</span>
                  </a>
                </Link>
              </div>
            </li>
            <li className='filters__filter'>
              <Link href='/programs/executive'>
                <a className='txt-highlight'>
                  Executive MBA <span className='premium'>Premium</span>
                </a>
              </Link>
            </li>
          </ul>

          {/* mini-programs-section */}
          <div className='mini-programs-section'>
            <ul className='jumbotron-red-info jumbotron-red-info-programs-page'>
              <li>
                <p>Срок обучения:</p>
                <div className='detail'>3 года 6 месяцев</div>
              </li>
              <li>
                <p>Форма обучения:</p>
                <div className='detail'>Дистансционное</div>
              </li>
              <li>
                <p>Ближайшее зачисление:</p>
                <div className='detail'>23 января</div>
              </li>
              <li>
                <p>Стоимость:</p>
                <div className='detail'>
                  <span className='old-price'>390 000 &#8381;</span>
                  <span className='new-price'>540 000 Р.</span>
                </div>
              </li>
            </ul>
            <div className='mini-programs-slider'>
              {programs.map((program, idx) => {
                return (
                  <Link
                    href={`/programs/${mbaTypeOfProgram}/${mbaFormat}/${program._id}`}
                    key={program._id}
                  >
                    <a className='mini-programs-block'>
                      <div className='arrow'>
                        <img alt='' src='/assets/images/arrow_diagonal.svg' />
                      </div>
                      <div className='number'>{idx}.</div>
                      <div className='title'>{program.title}</div>
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
