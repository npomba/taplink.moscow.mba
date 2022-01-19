import stls from '@/styles/components/btns/BtnBeta.module.sass'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'

const BtnBeta = ({ children, href = null }) => {
  if (href)
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={stls.container}>
        {children}
      </a>
    )

  return (
    <>
      <Popup
        trigger={<button className={stls.container}>{children}</button>}
        modal
        nested>
        {close => (
          <PopupForm
            title={'Оставьте заявку на консультацию'}
            closePopUpForm={close}
          />
        )}
      </Popup>
    </>
  )
}

export default BtnBeta
