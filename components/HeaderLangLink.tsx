import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import setString from '../components/hooks/setString'
import lang from '../translation/data/header'

const HeaderLangLink = () => {
  const router = useRouter()
  const [showMe, setShowMe] = useState(false)

  const showLangMenu = () => {
    setShowMe(!showMe)
  }

  return (
    <li className='lang'>
      <a className='lang__btn' onClick={showLangMenu}>
        {setString(lang.linkLang)} &#9660;
      </a>
      <ul className={`lang__selectList ${showMe && 'show'}`}>
        <li className='selectList__item'>
          <Link href={`${router.pathname}`} locale='ru'>
            <a onClick={showLangMenu}>🇷🇺&nbsp;Русский</a>
          </Link>
        </li>
        <li className='selectList__item'>
          <Link href={`${router.pathname}`} locale='en-US'>
            <a onClick={showLangMenu}>🇺🇸&nbsp;English</a>
          </Link>
        </li>
      </ul>
    </li>
  )
}

export default HeaderLangLink
