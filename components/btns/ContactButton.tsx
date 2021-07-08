import stls from '@/styles/components/btns/ContactButton.module.sass'

const ContactButton = ({ wayToContact, chooseWayToContact }) => {
  const {
    name,
    contactMethods,
    svg,
    stageStep,
    validationRules,
    contactButtonClass
  } = wayToContact

  const selectedWayToContact = {
    name,
    contactMethods,
    stageStep,
    validationRules,
    selectedMethod: null
  }

  const contactButtonClasses = [stls.contactButton, stls[contactButtonClass]]

  return (
    <button
      onClick={e => chooseWayToContact(e, selectedWayToContact)}
      className={contactButtonClasses.join(' ')}>
      {svg}
    </button>
  )
}

export default ContactButton
