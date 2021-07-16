import stls from '@/styles/components/popups/PopupLoader.module.sass'
import { IconLoader, IconClose } from '@/components/icons'

const Loader = ({ closePopUp = null }) => {
  return (
    <div className={stls.container}>
      <button className={stls.close} type='button' onClick={closePopUp}>
        <IconClose />
      </button>
      <div className={stls.loader}>
        <IconLoader />
      </div>
      <p className={stls.text}>
        Ваша заявка отправляется, пожалуйста, подождите
      </p>
    </div>
  )
}

export default Loader
