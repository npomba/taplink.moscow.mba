import Link from 'next/link'
import Until from '@/components/dates/Until'

const JumbotronProgram = ({ data, format = 'online' }) => {
  console.log(format)
  return (
    <section className='jumbotron-section'>
      <div className='image'>
        <img src={`/assets/images/programs-bgs/${data.picture}`} alt='' />
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
          <div className='jumbotron-top'>
            <div className='jumbotron-discount'>
              <div className='size'>-30%</div>
              <span>
                <Until />
              </span>
            </div>
            <div className='jumbotron-label'>
              <span>
                {format === 'online'
                  ? 'MBA ONLINE'
                  : format === 'blended'
                  ? 'MBA BLENDED'
                  : ''}
              </span>
            </div>
          </div>
          <div className='jumbotron-flex'>
            <div className='jumbotron-text'>
              <h1>{data.title}</h1>
              <div className='desc'>
                Оставьте заявку и получите консультацию по программе, а также
                узнайте возможные варианты скидок и требования к поступлению
              </div>
              <a href='' className='button white-button'>
                Оставить заявку
              </a>
            </div>
            <ul className='jumbotron-list'>
              <li>
                <div className='number'>2021</div>
                <p>Новейшая программа 2021 года</p>
              </li>
              <li>
                <div className='number'>150+</div>
                <p>международных экспертов</p>
              </li>
              <li>
                <div className='number'>2000+</div>
                <p>студентов по всему миру</p>
              </li>
            </ul>
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
                <span className='old-price'>390 000 &#8381;</span>{' '}
                <span className='new-price'>540 000 Р.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default JumbotronProgram
