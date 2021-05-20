import stls from '@/styles/modules/StickyBottom.module.sass'
import { useEffect } from 'react'
import Link from 'next/link'
import Until from '../dates/Until'
import SVGCross from '../svgs/SVGCross'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import PopUpForm from '@/components/popups/Form'
import useAt from '@/components/hooks/useAt'

const StickyBottom = () => {
  useEffect(() => {
    const stickyBottomPart = document.querySelector('.sticky-bottom-part')
    const closeModuleBtn = document.querySelector('.close-bottom-module-btn')

    document.addEventListener('scroll', () => {
      // check if on programs page
      const pathArr = window.location.pathname.split('/').filter(part => part)
      if (
        !(
          pathArr[0] === 'programs' &&
          (pathArr[1] === 'mini' ||
            pathArr[1] === 'professional' ||
            pathArr[1] === 'industry') &&
          (pathArr[2] === 'online' || pathArr[2] === 'blended') &&
          !pathArr[3]
        )
      ) {
        const pageHeight = document.body.scrollHeight
        window.pageYOffset > 1500 && window.pageYOffset < pageHeight - 2500
          ? stickyBottomPart.classList.add('show')
          : stickyBottomPart.classList.remove('show')
      }
    })

    closeModuleBtn.addEventListener('click', () =>
      stickyBottomPart.classList.add('hide')
    )
  }, [])

  return (
    <div className={`${stls.sticky} sticky-bottom-part`}>
      {/* <div className='container'> */}
      <div className={stls.content}>
        <p className={stls.p}>
          <strong>Скидка 45%</strong>
          <span className={stls.responsiveSpace}>&nbsp;</span>
          <br className={stls.responsiveBr} />
          на все Online программы <Until />!
        </p>
        <div className={stls.btns}>
          <Link href='/programs/mini/online'>
            <a className={stls.btn}>СМОТРЕТЬ&nbsp;ПРОГРАММЫ</a>
          </Link>

          <Popup
            trigger={
              <a className={`${stls.btn} ${stls.pointer}`}>
                ХОЧУ&nbsp;КОНСУЛЬТАЦИЮ
              </a>
            }
            modal
            nested>
            {close => (
              <PopUpForm
                title={'Получите консультацию'}
                closePopUpForm={close}
              />
            )}
          </Popup>

          <a
            className={`${stls.pointer} close-bottom-module-btn ${stls.crossIn}`}>
            <SVGCross />
          </a>
        </div>
        <a
          className={`${stls.pointer} close-bottom-module-btn ${stls.crossOut}`}>
          <SVGCross />
        </a>
      </div>
      {/* </div> */}
    </div>
  )
}

export default StickyBottom
