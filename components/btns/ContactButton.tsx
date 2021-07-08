import stls from '@/styles/components/btns/ContactButton.module.sass'

const ContactButton = ({ wayToContact, chooseWayToContact, disabled }) => {
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
      onClick={() => chooseWayToContact(selectedWayToContact)}
      className={contactButtonClasses.join(' ')}
      disabled={disabled}>
      {svg}
    </button>
  )
}

export default ContactButton
