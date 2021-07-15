import stls from '@/styles/components/btns/BtnCta.module.sass'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'

const BtnCta = ({ data: { title, id } }) => {
  return (
    <>
      <Popup
        trigger={<button className={stls.container}>Узнать больше</button>}
        modal
        nested>
        {close => (
          <PopupForm
            programId={id}
            programTitle={title}
            title={'Узнайте больше о программе!'}
            closePopUpForm={close}
          />
        )}
      </Popup>
    </>
  )
}

export default BtnCta
