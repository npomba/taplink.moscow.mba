import stls from '@/styles/components/layout/Footer.module.sass'
import Link from 'next/link'
import SetString from '@/components/hooks/SetString'
import langHeader from '@/data/translation/header'
import lang from '@/data/translation/footer'
import contactData from '@/data/contactData'
import {
  IconLocation,
  IconVk,
  IconTelegramAlt,
  IconWhatsappAlt
} from '@/components/icons'

const Footer = () => {
  const contactInfo = contactData()

  return (
    <footer>
      <div className='container'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <div className='footer-tel'>
              <a href={contactInfo.ru.tels[0].href}>
                {contactInfo.ru.tels[0].val}
              </a>
            </div>
            <div className='footer-mail'>
              <a href={contactInfo.ru.email.mailTo}>
                {contactInfo.ru.email.val}
              </a>
            </div>
          </div>
          <div className='footer-top-right'>
            <ul className='footer-menu'>
              <li>
                <Link href='/programs/mini/online' locale='ru'>
                  <a>MBA Mini</a>
                </Link>
              </li>
              {/* <li>
                <Link href='/programs/mini/blended' locale='ru'>
                  <a>MBA Mini Blended</a>
                </Link>
              </li> */}
              <li>
                <Link href='/programs/professional/online' locale='ru'>
                  <a>MBA Professional</a>
                </Link>
              </li>
              {/* <li>
                <Link href='/programs/professional/blended' locale='ru'>
                  <a>MBA Professional Blended</a>
                </Link>
              </li> */}
              <li>
                <Link href='/programs/industry/online' locale='ru'>
                  <a>MBA Industry</a>
                </Link>
              </li>
              {/* <li>
                <Link href='/programs/industry/blended' locale='ru'>
                  <a>MBA Industry Blended</a>
                </Link>
              </li> */}
              <li>
                <Link href='/programs/executive' locale='ru'>
                  <a>Executive MBA</a>
                </Link>
              </li>
              <li className='empty'></li>
              <li>
                <Link href='/about'>
                  <a>{SetString(langHeader.linkAbout)}</a>
                </Link>
              </li>
              <li>
                <Link href='/teachers' locale='ru'>
                  <a>{SetString(langHeader.linkTeachers)}</a>
                </Link>
              </li>
              <li>
                <Link href='/webinars' locale='ru'>
                  <a>{SetString(langHeader.linkWebinars)}</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>{SetString(langHeader.linkContacts)}</a>
                </Link>
              </li>
              <li>
                <Link href='/legal' locale='ru'>
                  <a>{SetString(langHeader.linkLegal)}</a>
                </Link>
              </li>
              {/* <li>
                <Link href='/legal/about' locale='ru'>
                  <a>{SetString(lang.legalAboutLink)}</a>
                </Link>
              </li> */}
              <li>
                <Link href='/payment' locale='ru'>
                  <a>{SetString(lang.paymentLink)}</a>
                </Link>
              </li>
            </ul>
            <div className='footer-contacts'>
              <div className='footer-place'>
                <IconLocation />
                <span>
                  {SetString(contactInfo.ru.address.city)},{' '}
                  {SetString(contactInfo.ru.address.street)}
                </span>
              </div>
              <ul className='footer-socials'>
                <li>
                  <a href='#!' aria-label='MBA VK'>
                    <IconVk />
                  </a>
                </li>
                <li>
                  <a href='#!' aria-label='MBA Telegram'>
                    <IconTelegramAlt />
                  </a>
                </li>
                <li>
                  <a
                    href='https://api.whatsapp.com/send?phone=89258088389text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!'
                    aria-label='MBA Whatsapp'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconWhatsappAlt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>
            &copy; Moscow Business Academy, 2021
          </div>
          <a href='#!' className='footer-links'>
            {SetString(lang.offerContract)}
          </a>
          <a href='#!' className='footer-links'>
            {SetString(lang.privacyPolicy)}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
