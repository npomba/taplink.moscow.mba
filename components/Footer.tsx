import Link from 'next/link'
import setString from '@/components/hooks/setString'
import langHeader from '@/data/translation/header'
import lang from '@/data/translation/footer'

import contactData from '@/data/contactData'
import SVGLocation from '@/components/svgs/SVGLocation'
import SVGVK from '@/components/svgs/SVGVK'
import SVGTelegram from '@/components/svgs/SVGTelegram'
import SVGWhatsapp from '@/components/svgs/SVGWhatsapp'

const Footer = () => {
  const contactInfo = contactData()

  return (
    <footer>
      <div className='container'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <div className='footer-tel'>
              <a href={contactInfo.tels[0].data.href}>
                {contactInfo.tels[0].data.val}
              </a>
            </div>
            <div className='footer-mail'>
              <a href={contactInfo.emailTo}>{contactInfo.email}</a>
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
                  <a>{setString(langHeader.linkAbout)}</a>
                </Link>
              </li>
              <li>
                <Link href='/teachers' locale='ru'>
                  <a>{setString(langHeader.linkTeachers)}</a>
                </Link>
              </li>
              <li>
                <Link href='/webinars' locale='ru'>
                  <a>{setString(langHeader.linkWebinars)}</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>{setString(langHeader.linkContacts)}</a>
                </Link>
              </li>
              <li>
                <Link href='/legal' locale='ru'>
                  <a>{setString(langHeader.linkLegal)}</a>
                </Link>
              </li>
              <li>
                <Link href='/legal/about' locale='ru'>
                  <a>{setString(lang.legalAboutLink)}</a>
                </Link>
              </li>
              <li>
                <Link href='/payment' locale='ru'>
                  <a>{setString(lang.paymentLink)}</a>
                </Link>
              </li>
            </ul>
            <div className='footer-contacts'>
              <div className='footer-place'>
                <SVGLocation />
                <span>
                  {setString(contactInfo.addresses[0].data.city)},{' '}
                  {setString(contactInfo.addresses[0].data.street)}
                </span>
              </div>
              <ul className='footer-socials'>
                <li>
                  <a href='#!' aria-label='MBA VK'>
                    <SVGVK />
                  </a>
                </li>
                <li>
                  <a href='#!' aria-label='MBA Telegram'>
                    <SVGTelegram />
                  </a>
                </li>
                <li>
                  <a
                    href='https://api.whatsapp.com/message/DSPLWVLIMR66E1'
                    aria-label='MBA Whatsapp'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <SVGWhatsapp />
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
            {setString(lang.offerContract)}
          </a>
          <a href='#!' className='footer-links'>
            {setString(lang.privacyPolicy)}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
