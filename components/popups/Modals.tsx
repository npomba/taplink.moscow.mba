const Modals = () => {
  return (
    <>
      {/* Модалка учителей */}
      <div id='teachersModal' className='popup-modal mfp-hide mfp-with-anim'>
        <div className='popup-content red-bg'>
          <h2>Узнайте своих преподавателей</h2>
          <div className='desc'>
            Оставьте заявку и получите консультацию по преподавателям,
            программам MBA, а также узнайте возможные варианты скидок и
            требования к поступлению
          </div>
          <form action='#' method='post' className='simple-form support-form'>
            <div className='inputs-flex'>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>Введите имя</div>
              </div>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>Номер телефона</div>
              </div>
              <div className='input-block width-33'>
                <button type='submit' className='button white-button'>
                  Оставить заявку
                </button>
              </div>
            </div>
            <div className='personal-datas'>
              Нажимая на кнопку, вы даете согласие на обработку своих
              <a href=''> персональных данных</a>
            </div>
          </form>
          <button className='mfp-close' type='button'>
            <img src='images/close.svg' alt='' />
          </button>
        </div>
      </div>

      {/* Модалка спасибо */}
      <div id='thanksModal' className='popup-modal mfp-hide mfp-with-anim'>
        <div className='popup-content red-bg'>
          <div className='thanks-popup-content'>
            <div className='circle'>
              <img src='images/icon_check_red.svg' alt='' />
            </div>
            <h3>Спасибо!</h3>
            <p>Наш менеджера свяжется с вами в течении дня</p>
            <a href='' className='button white-button close-popup'>
              Ok!
            </a>
          </div>
          <button className='mfp-close' type='button'>
            <img src='images/close.svg' alt='' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Modals
