import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import Until from '@/components/dates/Until'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import JumbotronLabel from '@/components/general/JumbotronLabel'
import PopUpForm from '@/components/popups/Form'

import setString from '@/components/hooks/setString'
import langMenu from '@/data/translation/menu'

const JumbotronProgram = ({ data, format = 'online' }) => {
  return (
    <section className='jumbotron-section'>
      <div className='image'>
        <Image
          src={`/assets/images/programs-bgs/${data.picture}`}
          alt='Ваш будущий диплом'
          layout='fill'
        />
      </div>
      <div className='container'>
        <div className='jumbotron-content'>
          <Breadcrumbs pageTitle={data.title} />
          <div className='jumbotron-top'>
            <div className='jumbotron-discount'>
              <div className='size'>-30%</div>
              <span>
                <Until />
              </span>
            </div>
            <div className='jumbotron-label'>
              <JumbotronLabel />
            </div>
          </div>
          <div className='jumbotron-flex'>
            <div className='jumbotron-text'>
              <h1>{data.title}</h1>
              <div className='desc'>
                Оставьте заявку и получите консультацию по программе, а также
                узнайте возможные варианты скидок и требования к поступлению
              </div>

              <Popup
                trigger={
                  <a className='button white-button cursor-pointer'>
                    Оставить заявку
                  </a>
                }
                modal
                nested
              >
                {(close) => (
                  <PopUpForm
                    title={'Получите консультацию'}
                    discProgram={data.title}
                    closePopUp={close}
                  />
                )}
              </Popup>
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
              <div className='detail'>
                {format === 'online'
                  ? setString(langMenu.formatRemote)
                  : format === 'blended'
                  ? setString(langMenu.formatBlended)
                  : ''}
              </div>
            </li>
            <li>
              <p>Ближайшее зачисление:</p>
              <div className='detail'>
                <Until preposition={false} />
              </div>
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
