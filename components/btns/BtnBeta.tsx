import stls from '@/styles/components/btns/BtnBeta.module.sass'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'

const BtnBeta = ({ children }) => {
  return (
    <>
      <Popup
        trigger={<button className={stls.container}>{children}</button>}
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

export default BtnBeta
