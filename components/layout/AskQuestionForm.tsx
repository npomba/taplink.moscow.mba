import stls from '@/styles/components/layout/AskQuestionForm.module.sass'
import { useState } from 'react'
import { useRouter } from 'next/router'
import onSubmitForm from '@/components/hooks/onSubmitForm'
import ContactButton from '@/components/btns/ContactButton'
import SVGTelegram from '@/components/svgs/SVGTelegram'
import SVGWhatsApp from '@/components/svgs/SVGWhatsapp'
import SVGViber from '@/components/svgs/SVGViber'
import SVGVK from '@/components/svgs/SVGVK'
import SVGMobilePhone from '@/components/svgs/SVGMobilePhone'
import SVGEmail from '@/components/svgs/SVGEmail'
import SVGArrowLeft from '@/components/svgs/SVGArrowLeft'
import SVGClose from '@/components/svgs/SVGClose'

const waysToContact = [
  {
    name: 'Telegram',
    stageStep: 1,
    svg: <SVGTelegram />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <SVGMobilePhone />
      },
      {
        name: 'Написать',
        icon: <SVGTelegram marginRight='19px' />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'telegramButton'
  },
  {
    name: 'WhatsApp',
    stageStep: 1,
    svg: <SVGWhatsApp />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <SVGMobilePhone />
      },
      {
        name: 'Написать',
        icon: <SVGTelegram marginRight='19px' />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'whatsAppButton'
  },
  {
    name: 'Viber',
    stageStep: 1,
    svg: <SVGViber />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <SVGMobilePhone />
      },
      {
        name: 'Написать',
        icon: <SVGTelegram marginRight='19px' />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'viberButton'
  },
  {
    name: 'VK',
    stageStep: 2,
    svg: <SVGVK />,
    contactMethods: [
      {
        name: 'Написать',
        icon: <SVGTelegram marginRight='19px' />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'vk'
    },
    contactButtonClass: 'vkButton'
  },
  {
    name: 'Телефон',
    stageStep: 2,
    svg: <SVGMobilePhone />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <SVGMobilePhone />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'mobilePhoneButton'
  },
  {
    name: 'Email',
    stageStep: 2,
    svg: <SVGEmail />,
    contactMethods: [
      {
        name: 'Написать',
        icon: <SVGTelegram marginRight='19px' />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'email'
    },
    contactButtonClass: 'emailButton'
  }
]

const createWayToContactTitle = (wayToContact, enterContactData) => {
  let wayToContactTitle = wayToContact.name

  if (enterContactData && wayToContact.selectedMethod)
    wayToContactTitle += ` / ${wayToContact.selectedMethod}`

  return <p className={stls.wayToContactTitle}>{wayToContactTitle}</p>
}

const createFormStageTitleContainer = (
  wayToContact,
  enterContactData,
  handleUserGoingBack
) => {
  const { stageStep } = wayToContact

  const wayToContactTitle = createWayToContactTitle(
    wayToContact,
    enterContactData
  )

  const formStageTitleContainer = (
    <div className={stls.wayToContactTitleContainer}>
      <div
        className={stls.goBackArrow}
        onClick={() => handleUserGoingBack(stageStep)}>
        <SVGArrowLeft />
      </div>
      {wayToContactTitle}
    </div>
  )

  return formStageTitleContainer
}

const createButtons = (
  wayToContact,
  selectWay,
  selectMethod,
  enterContactData,
  handleUserClick,
  handleContactDataInputTouched = _ => {}
) => {
  let buttons

  if (selectWay) {
    buttons = waysToContact.map((wayToContact, idx) => (
      <ContactButton
        key={wayToContact.name + idx}
        wayToContact={wayToContact}
        chooseWayToContact={selectedWayToContact =>
          handleUserClick(selectedWayToContact, wayToContact.stageStep)
        }
      />
    ))
  }

  if (selectMethod) {
    buttons = wayToContact.contactMethods.map((method, idx) => (
      <button
        key={method.name + idx}
        onClick={() => handleUserClick(method.name)}
        className='button formStageButton'>
        {method.icon} {method.name}
      </button>
    ))
  }

  if (enterContactData) {
    buttons = (
      <button
        className='button'
        onClick={() => handleContactDataInputTouched(true)}>
        Отправить
      </button>
    )
  }

  return buttons
}

const showSelectWayStage = dataToShowThisStage => {
  const {
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick
  } = dataToShowThisStage

  const buttons = createButtons(
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick
  )

  return (
    <>
      <textarea
        autoFocus
        placeholder='Напишите вопрос...'
        className={stls.questionTextarea}></textarea>
      <div className={stls.waysToContactGrid}>
        <p className={stls.howToContact}>Куда ответить:</p>
        {buttons}
      </div>
    </>
  )
}

const showSelectMethodStage = dataToShowThisStage => {
  const {
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick,
    handleUserGoingBack
  } = dataToShowThisStage

  const formStageTitleContainer = createFormStageTitleContainer(
    wayToContact,
    enterContactData,
    handleUserGoingBack
  )
  const buttons = createButtons(
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick
  )

  return (
    <>
      {formStageTitleContainer}
      <div className={stls.bottomContainer}>{buttons}</div>
    </>
  )
}

const showEnterContactDataStage = dataToShowThisStage => {
  const {
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick,
    handleUserGoingBack,
    isContactDataInputTouched,
    setIsContactDataInputTouched,
    inputPlaceholderText,
    setInputPlaceholderText,
    leadPage
  } = dataToShowThisStage

  const inputPlaceholderClasses = [stls.inputPlaceholder]

  if (isContactDataInputTouched)
    inputPlaceholderClasses.push(stls.inputPlaceholderSmall)

  const formStageTitleContainer = createFormStageTitleContainer(
    wayToContact,
    enterContactData,
    handleUserGoingBack
  )

  const buttons = createButtons(
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick,
    setIsContactDataInputTouched
  )

  const {
    validationRules: { shouldBeValidated, validationType }
  } = wayToContact

  const checkEnteredContactDataValidity = enteredContactData => {
    if (!shouldBeValidated) return true

    const validationPatterns = {
      phone: /.{5}/,
      email:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      vk: /.{1}/
    }

    const isValid = validationPatterns[validationType].test(enteredContactData)

    return isValid
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    const contactDataInput = e.target.querySelector('input')
    const enteredContactData = contactDataInput.value

    const isValid = checkEnteredContactDataValidity(enteredContactData)

    if (!isValid && validationType === 'phone') {
      setInputPlaceholderText('*Номер указан неверно')
    }

    if (!isValid && validationType === 'email') {
      setInputPlaceholderText('*Адрес почты указан неверно')
    }

    if (!isValid && validationType === 'vk') {
      setInputPlaceholderText('*ID ВКонтакте указан неверно')
    }

    if (!isValid) contactDataInput.focus()

    if (isValid) {
      const { name, selectedMethod } = wayToContact

      const userDataToSend = {
        contactWay: name,
        selectedMethod,
        [validationType]: enteredContactData,
        leadPage
      }

      handleUserClick(userDataToSend)
    }
  }

  return (
    <>
      {formStageTitleContainer}
      <form onSubmit={handleFormSubmit}>
        <div className={stls.bottomContainer}>
          <div className={stls.inputContainer}>
            <input
              type='text'
              className={stls.contactDataInput}
              onClick={() => setIsContactDataInputTouched(true)}
            />
            <span className={inputPlaceholderClasses.join(' ')}>
              {inputPlaceholderText}
            </span>
          </div>
          {buttons}
        </div>
      </form>
    </>
  )
}

const showFormSubmittedStage = () => {
  return (
    <div className={`${stls.formSubmitted} thanks-popup-content`}>
      <div className={`circle ${stls.circle}`}>
        <img
          src='/assets/images/icon_check.svg'
          alt='Галочка подтверждения'
          className='light'
        />
      </div>
      <h3 className={stls.thanksForSubmitting}>Спасибо за заявку!</h3>
      <p className={stls.weWillContactYouPara}>
        Менеджер свяжется с Вами в ближайшее время
      </p>
    </div>
  )
}

const FormStage = ({
  wayToContact,
  handleUserClick,
  handleUserGoingBack,
  selectWay = false,
  selectMethod = false,
  enterContactData = false,
  formSubmitted = false
}) => {
  const router = useRouter()
  const leadPage = router.asPath

  let validationType

  if (wayToContact) validationType = wayToContact.validationRules.validationType

  const whatDataToEnter = {
    phone: 'номер',
    email: 'электронную почту',
    vk: 'ID ВКонтакте'
  }

  const [isContactDataInputTouched, setIsContactDataInputTouched] =
    useState(false)
  const [inputPlaceholderText, setInputPlaceholderText] = useState(
    `Введите ${whatDataToEnter[validationType]}`
  )

  const dataToShowSpecificStage = {
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick,
    handleUserGoingBack,
    isContactDataInputTouched,
    setIsContactDataInputTouched,
    inputPlaceholderText,
    setInputPlaceholderText,
    leadPage
  }

  if (selectWay) return showSelectWayStage(dataToShowSpecificStage)

  if (selectMethod) return showSelectMethodStage(dataToShowSpecificStage)

  if (enterContactData)
    return showEnterContactDataStage(dataToShowSpecificStage)

  if (formSubmitted) return showFormSubmittedStage()
}

const AskQuestionForm = ({ handleAskQuestionFormClose }) => {
  const [formStage, setFormStage] = useState(0)
  const [howToContact, setHowToContact] = useState(null)

  const askQuestionFormClasses = [stls.container]

  if (formStage !== 0) askQuestionFormClasses.push(stls.noPadding)

  const chooseWayToContact = (wayToContact, stageStep) => {
    setFormStage(prevState => prevState + stageStep)
    setHowToContact(wayToContact)
  }

  const chooseContactMethod = method => {
    setFormStage(prevState => prevState + 1)
    setHowToContact(prevState => ({ ...prevState, selectedMethod: method }))
  }

  const enterContactData = data => {
    setFormStage(prevState => prevState + 1)
    setHowToContact(prevState => ({ ...prevState, contactData: data }))
    onSubmitForm(data)
  }

  const goToPrevStage = stageStep =>
    setFormStage(prevState => prevState - stageStep)

  const formStages = [
    <FormStage
      key='selectWay'
      wayToContact={howToContact}
      handleUserClick={(selectedWayToContact, stageStep) =>
        chooseWayToContact(selectedWayToContact, stageStep)
      }
      handleUserGoingBack={goToPrevStage}
      selectWay
    />,
    <FormStage
      key='selectMethod'
      wayToContact={howToContact}
      handleUserClick={method => chooseContactMethod(method)}
      handleUserGoingBack={goToPrevStage}
      selectMethod
    />,
    <FormStage
      key='enterContactData'
      wayToContact={howToContact}
      handleUserClick={data => enterContactData(data)}
      handleUserGoingBack={goToPrevStage}
      enterContactData
    />,
    <FormStage
      key='formSubmitted'
      wayToContact={howToContact}
      handleUserClick={() => {}}
      handleUserGoingBack={() => {}}
      formSubmitted
    />
  ]

  return (
    <div className={askQuestionFormClasses.join(' ')}>
      <a
        className={`${stls.crossTop} ${stls.pointer}`}
        onClick={handleAskQuestionFormClose}>
        <SVGClose />
      </a>
      {formStages[formStage]}
    </div>
  )
}

export default AskQuestionForm
