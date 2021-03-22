const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <div className='footer-tel'>
              <a href='tel:8-495-648-62-26'>+7 (495) 648 62 26</a>
            </div>
            <div className='footer-mail'>
              <a href='mailto:help@ipomba.ru'>help@ipomba.ru</a>
            </div>
          </div>
          <div className='footer-top-right'>
            <ul className='footer-menu'>
              <li>
                <a href=''>MBA Mini</a>
              </li>
              <li>
                <a href=''>MBA Mini Blended</a>
              </li>
              <li>
                <a href=''>MBA Professional</a>
              </li>
              <li>
                <a href=''>MBA Professional Blended</a>
              </li>
              <li>
                <a href=''>MBA Industry</a>
              </li>
              <li>
                <a href=''>MBA Industry Blended</a>
              </li>
              <li>
                <a href=''>Executive MBA</a>
              </li>
              <li className='empty'></li>
              <li>
                <a href=''>Вебинары</a>
              </li>
              <li>
                <a href=''>Оплата обучения</a>
              </li>
              <li>
                <a href=''>О школе</a>
              </li>
            </ul>
            <div className='footer-contacts'>
              <div className='footer-place'>
                <img src='/assets/images/marker_black.svg' alt='' />
                <span>Москва, Дербеневская набережная 11</span>
              </div>
              <ul className='footer-socials'>
                <li>
                  <a href=''>
                    <img src='/assets/images/vk.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src='/assets/images/telegram.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src='/assets/images/whatsapp.svg' alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>&copy; МБА, 2021</div>
          <a href='' className='footer-links'>
            Договор оферты
          </a>
          <a href='' className='footer-links'>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
