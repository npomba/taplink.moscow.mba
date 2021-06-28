import Discount from '@/components/costs/Discount'
import SVGClose from '@/components/svgs/SVGClose'
import Until from '@/components/costs/Until'
import stls from '@/styles/modules/PopUpLearnMore.module.sass'
import learmMoreStls from '@/styles/modules/StickyBottom.module.sass'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'
import Link from 'next/link'

const PopupLearnMore = ({ close }) => {
  return (
    <div className={`${stls.popupLearnMore} red-bg`}>
      <h2 className={stls.title}>
        Скидка <Discount />
      </h2>
      <div className={stls.disc}>
        на все Online программы <br />
        <Until preposition={true} />
      </div>

      <div className={stls.btnGroup}>
        <Popup
          trigger={
            <a
              className={`${learmMoreStls.btn} ${learmMoreStls.pointer} ${stls.btn}`}>
              ХОЧУ&nbsp;КОНСУЛЬТАЦИЮ
            </a>
          }
          modal
          nested>
          {close => (
            <PopupForm title={'Поможем в выборе!'} closePopUpForm={close} />
          )}
        </Popup>

        <Link href='/programs/mini/online' locale='ru'>
          <a className={`${learmMoreStls.btn} ${stls.btn}`} onClick={close}>
            СМОТРЕТЬ&nbsp;ПРОГРАММЫ
          </a>
        </Link>
      </div>
      <button className='mfp-close' type='button' onClick={close}>
        <SVGClose />
      </button>
    </div>
  )
}

export default PopupLearnMore
