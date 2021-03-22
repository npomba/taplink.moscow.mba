import Head from 'next/head'

const mini = () => {
  return (
    <>
      <Head>
        <title>Mini MBA</title>
      </Head>

      {/* jumbotron-section */}
      <section className='jumbotron-section'>
        <div className='image'>
          <img src='/assets/images/jumbotron_1.jpg' alt='' />
        </div>
        <div className='container'>
          <div className='jumbotron-content'>
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
            <div className='jumbotron-flex'>
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
            </div>
            <ul className='jumbotron-red-info'>
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
          </div>
        </div>
      </section>

      <div className='container'>
        {/* mini-programs-section */}
        <div className='mini-programs-section'>
          <div className='mini-programs-slider'>
            <a href='' className='mini-programs-block'>
              <div className='arrow'>
                <img alt='' src='/assets/images/arrow_diagonal.svg' />
              </div>
              <div className='number'>01.</div>
              <div className='title'>Антикризисное управление</div>
            </a>
            <a href='' className='mini-programs-block'>
              <div className='arrow'>
                <img alt='' src='/assets/images/arrow_diagonal.svg' />
              </div>
              <div className='number'>02.</div>
              <div className='title'>Управление финансами</div>
            </a>
            <a href='' className='mini-programs-block'>
              <div className='arrow'>
                <img alt='' src='/assets/images/arrow_diagonal.svg' />
              </div>
              <div className='number'>03.</div>
              <div className='title'>Управление маркетингом</div>
            </a>
            <a href='' className='mini-programs-block'>
              <div className='arrow'>
                <img alt='' src='/assets/images/arrow_diagonal.svg' />
              </div>
              <div className='number'>04.</div>
              <div className='title'>Управление в нефтегазовой сфере</div>
            </a>
            <a href='' className='mini-programs-block'>
              <div className='arrow'>
                <img alt='' src='/assets/images/arrow_diagonal.svg' />
              </div>
              <div className='number'>05.</div>
              <div className='title'>Управление в нефтегазовой сфере</div>
            </a>
            <a href='' className='mini-programs-block'>
              <div className='arrow'>
                <img alt='' src='/assets/images/arrow_diagonal.svg' />
              </div>
              <div className='number'>06.</div>
              <div className='title'>Антикризисное управление</div>
            </a>
            <a href='' className='mini-programs-block'>
              <div className='arrow'>
                <img alt='' src='/assets/images/arrow_diagonal.svg' />
              </div>
              <div className='number'>07.</div>
              <div className='title'>Управление финансами</div>
            </a>
            <a href='' className='mini-programs-block'>
              <div className='arrow'>
                <img alt='' src='/assets/images/arrow_diagonal.svg' />
              </div>
              <div className='number'>08.</div>
              <div className='title'>Управление маркетингом</div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default mini
