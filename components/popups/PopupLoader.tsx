import stls from '@/styles/components/popups/PopupLoader.module.sass'
import SVGLoader from '@/components/svgs/SVGLoader'
import SVGClose from '@/components/svgs/SVGClose'

const Loader = ({ closePopUp = null }) => {
  return (
    <div id='thanksModal' className='popup-modal loader-modal mfp-with-anim'>
      <div className='popup-content red-bg'>
        <div className='thanks-popup-content loader-content'>
          <SVGLoader />
          <p>Ваша заявка отправляется, пожалуйста, подождите</p>
        </div>
      </div>
      <button className='mfp-close' type='button' onClick={closePopUp}>
        <SVGClose />
      </button>
    </div>
  )
}

export default Loader
