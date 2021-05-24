import { server, apiProgramsReqUrl } from '@/config/index'
import Head from 'next/head'

const webinar = () => {
  return (
    <>
      <Head>
        <title>Вебинар</title>
      </Head>

      <div className='container'>
        <div className='breadcrumbs-outer'>
          <ul className='breadcrumbs'>
            <li>
              <a href=''>Программы MBA</a>
            </li>
            <li>
              <a href=''>Mini MBA</a>
            </li>
            <li>
              <span>Вебинары</span>
            </li>
          </ul>
        </div>

        {/* vebinars-section */}
        <section className='simple-section'>
          <h1>Вебинары</h1>
          <ul className='vebinars-tabs'>
            <li>
              <a href='' className='active'>
                Все вебинары
              </a>
            </li>
            <li>
              <a href=''>Ближайшие вебинары</a>
            </li>
            <li>
              <a href=''>Прошедшие вебинары</a>
            </li>
          </ul>
          <div className='vebinars-list'>
            <a
              href='#vebinarModal'
              className='vebinars-block popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Digital marketing <br />в России
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_1.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
            <a
              href='#vebinarModal'
              className='vebinars-block popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Как пандемия повлияла на бизнес-процессы в ритейле и е-commerce?
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_2.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
            <a
              href='#vebinarModal'
              className='vebinars-block popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Digital marketing <br />в России
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_1.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
            <a
              href='#vebinarModal'
              className='vebinars-block popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Как пандемия повлияла на бизнес-процессы в ритейле и е-commerce?
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_2.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
            <a
              href='#vebinarModal'
              className='vebinars-block popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Digital marketing <br />в России
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_1.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
            <a
              href='#vebinarModal'
              className='vebinars-block disabled popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Как пандемия повлияла на бизнес-процессы в ритейле и е-commerce?
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_2.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
            <a
              href='#vebinarModal'
              className='vebinars-block disabled popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Digital marketing <br />в России
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_1.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
            <a
              href='#vebinarModal'
              className='vebinars-block disabled popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Как пандемия повлияла на бизнес-процессы в ритейле и е-commerce?
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_2.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
            <a
              href='#vebinarModal'
              className='vebinars-block disabled popup-open'
              data-effect='mfp-zoom-in'>
              <div className='bell'>
                <img src='/assets/images/icon_bell.svg' alt='' />
              </div>
              <div className='date'>
                <strong>28 фев,</strong> 19:00
              </div>
              <div className='title'>
                Digital marketing <br />в России
              </div>
              <div className='info'>
                <div className='author'>
                  <div className='avatar'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/review_ava_1.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    Спикер: <span className='name'>Иванов Иван</span>
                  </div>
                </div>
                <div className='long'>1:52:00</div>
              </div>
            </a>
          </div>
          <div className='vebinars-more'>
            <a href='' className='button'>
              <img src='/assets/images/icon_rotate.svg' alt='' /> Еще 10
              вебинаров
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

// export async function getStaticProps() {
//   const res = await fetch(`${server}${apiProgramsReqUrl}`)
//   const { data } = await res.json()

//   return {
//     props: {
//       programs: data
//     }
//   }
// }

export default webinar
