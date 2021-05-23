import SVGLoader from '@/components/svgs/SVGLoader'
import SVGClose from '../svgs/SVGClose'

const Loader = ({ closePopUp = null }) => {
  return (
    <div id='thanksModal' className='popup-modal loader-modal mfp-with-anim'>
      <div className='popup-content red-bg'>
        <div className='thanks-popup-content loader-content'>
          <SVGLoader />
          <p>Ваша заявка отправляется, пожалуйста, подождите</p>
        </div>
        <button className='mfp-close' type='button' onClick={closePopUp}>
          <SVGClose />
        </button>
      </div>
    </div>
  )
}

export default Loader
