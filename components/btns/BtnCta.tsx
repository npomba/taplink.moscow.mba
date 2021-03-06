import stls from '@/styles/components/btns/BtnCta.module.sass'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'

const BtnCta = () => {
  return (
    <>
      <Popup
        trigger={<button className={stls.container}>Оставить заявку</button>}
        modal
        nested>
        {close => (
          <PopupForm
            title={'Оставьте заявку на консультацию'}
            closePopUpForm={close}
          />
        )}
      </Popup>
    </>
  )
}

export default BtnCta
