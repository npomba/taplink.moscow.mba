const Thankyou = ({ closePopUp = null }) => {
  return (
    <div id='thanksModal' className='popup-modal mfp-with-anim'>
      <div className='popup-content red-bg'>
        <div className='thanks-popup-content'>
          <div className='circle'>
            <img src='images/icon_check_red.svg' alt='' />
          </div>
          <h3>Спасибо!</h3>
          <p>Наш менеджера свяжется с Вами в ближайшее время</p>
          <a href='' className='button white-button close-popup'>
            Ok!
          </a>
        </div>
        <button className='mfp-close' type='button' onClick={closePopUp}>
          <img src='/assets/images/close.svg' alt='' />
        </button>
      </div>
    </div>
  )
}

export default Thankyou
