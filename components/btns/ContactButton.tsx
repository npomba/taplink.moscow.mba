import stls from '@/styles/components/btns/ContactButton.module.sass'
import classNames from 'classnames'

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

  return (
    <button
      onClick={() => chooseWayToContact(selectedWayToContact)}
      className={classNames(stls.contactButton, stls[contactButtonClass])}>
      {svg}
    </button>
  )
}

export default ContactButton
