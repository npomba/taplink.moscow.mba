import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import Until from '@/components/dates/Until'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import JumbotronLabel from '@/components/general/JumbotronLabel'
import PopUpForm from '@/components/popups/Form'
import InfoRectangle from '@/components/general/InfoRectangle'
import Discount from '../prices/Discount'
import useAt from '@/components/hooks/useAt'

const JumbotronProgram = ({ data }) => {
  const at = useAt()
  return (
    <section className='jumbotron-section'>
      <div className='image'>
        <Image
          src={`/assets/images/programs-bgs/${data.picture}`}
          alt='Студенты обучаются'
          layout='fill'
        />
      </div>
      <div className='container'>
        <div className='jumbotron-content'>
          <Breadcrumbs pageTitle={data.title} />
          <div className='jumbotron-top'>
            {at.online && (
              <div className='jumbotron-discount'>
                <div className='size'>
                  <Discount />
                </div>
                <span>
                  <Until />
                </span>
              </div>
            )}
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
                nested>
                {close => (
                  <PopUpForm
                    programId={data._id}
                    programTitle={data.title}
                    title={'Получите консультацию'}
                    closePopUpForm={close}
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
          <InfoRectangle />
        </div>
      </div>
    </section>
  )
}

export default JumbotronProgram
