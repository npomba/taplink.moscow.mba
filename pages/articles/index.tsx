import Head from 'next/head'

const articles = () => {
  return (
    <>
      <Head>
        <title>Статьи</title>
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
              <span>Статьи</span>
            </li>
          </ul>
        </div>

        {/* articles-section */}
        <section className='simple-section'>
          <h1>Статьи</h1>
          <div className='articles-list'>
            <div className='articles-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/article_pic_1.jpg'
                  alt=''
                />
              </a>
              <div className='info'>
                <div className='type'>Отзыв в формате статьи</div>
                <div className='title'>
                  <a href=''>
                    Как Александр увеличил доход цементного завода после
                    прохождения MBA professional
                  </a>
                </div>
                <a className='link' href=''>
                  <span>Подробнее</span>
                  <img alt='' src='/assets/images/arrow_right.svg' />
                </a>
              </div>
            </div>
            <div className='articles-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/article_pic_2.jpg'
                  alt=''
                />
              </a>
              <div className='info'>
                <div className='type'>Новости</div>
                <div className='title'>
                  <a href=''>Управление инновационной деятельностью</a>
                </div>
                <a className='link' href=''>
                  <span>Подробнее</span>
                  <img alt='' src='/assets/images/arrow_right.svg' />
                </a>
              </div>
            </div>
            <div className='articles-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/article_pic_1.jpg'
                  alt=''
                />
              </a>
              <div className='info'>
                <div className='type'>Отзыв в формате статьи</div>
                <div className='title'>
                  <a href=''>Организация конференций в Европе</a>
                </div>
                <a className='link' href=''>
                  <span>Подробнее</span>
                  <img alt='' src='/assets/images/arrow_right.svg' />
                </a>
              </div>
            </div>
            <div className='articles-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/article_pic_2.jpg'
                  alt=''
                />
              </a>
              <div className='info'>
                <div className='type'>Новости</div>
                <div className='title'>
                  <a href=''>
                    MBAcademy вляется одной из ведущих бизнес-школ на территории
                    СНГ
                  </a>
                </div>
                <a className='link' href=''>
                  <span>Подробнее</span>
                  <img alt='' src='/assets/images/arrow_right.svg' />
                </a>
              </div>
            </div>
            <div className='articles-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/article_pic_1.jpg'
                  alt=''
                />
              </a>
              <div className='info'>
                <div className='type'>Отзыв в формате статьи</div>
                <div className='title'>
                  <a href=''>
                    Как Александр увеличил доход цементного завода после
                    прохождения MBA professional
                  </a>
                </div>
                <a className='link' href=''>
                  <span>Подробнее</span>
                  <img alt='' src='/assets/images/arrow_right.svg' />
                </a>
              </div>
            </div>
            <div className='articles-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/article_pic_2.jpg'
                  alt=''
                />
              </a>
              <div className='info'>
                <div className='type'>Новости</div>
                <div className='title'>
                  <a href=''>Управление инновационной деятельностью</a>
                </div>
                <a className='link' href=''>
                  <span>Подробнее</span>
                  <img alt='' src='/assets/images/arrow_right.svg' />
                </a>
              </div>
            </div>
            <div className='articles-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/article_pic_1.jpg'
                  alt=''
                />
              </a>
              <div className='info'>
                <div className='type'>Отзыв в формате статьи</div>
                <div className='title'>
                  <a href=''>Организация конференций в Европе</a>
                </div>
                <a className='link' href=''>
                  <span>Подробнее</span>
                  <img alt='' src='/assets/images/arrow_right.svg' />
                </a>
              </div>
            </div>
            <div className='articles-block'>
              <a href='' className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/article_pic_2.jpg'
                  alt=''
                />
              </a>
              <div className='info'>
                <div className='type'>Новости</div>
                <div className='title'>
                  <a href=''>
                    MBAcademy вляется одной из ведущих бизнес-школ на территории
                    СНГ
                  </a>
                </div>
                <a className='link' href=''>
                  <span>Подробнее</span>
                  <img alt='' src='/assets/images/arrow_right.svg' />
                </a>
              </div>
            </div>
          </div>

          {/* Пагинация */}
          <ul className='pagination'>
            <li>
              <a href='' className='active-page'>
                1
              </a>
            </li>
            <li>
              <a href=''>2</a>
            </li>
            <li>
              <a href=''>3</a>
            </li>
            <li>
              <a href=''>...</a>
            </li>
            <li>
              <a href=''>10</a>
            </li>
            <li>
              <a href='' className='long-link'>
                Вперед
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default articles
