import stls from '@/styles/components/general/forms/AskQuestionFormStage.module.sass'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ContactButton from '@/components/btns/ContactButton'
import {
  IconArrowLeft,
  IconTelegram,
  IconWhatsapp,
  IconViber,
  IconVk,
  IconMobilePhone,
  IconEmail,
  IconCheck
} from '@/components/icons'

const waysToContact = [
  {
    name: 'Telegram',
    stageStep: 1,
    svg: <IconTelegram />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <IconMobilePhone />
      },
      {
        name: 'Написать',
        icon: <IconTelegram />
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
    svg: <IconWhatsapp />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <IconMobilePhone />
      },
      {
        name: 'Написать',
        icon: <IconTelegram />
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
    svg: <IconViber />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <IconMobilePhone />
      },
      {
        name: 'Написать',
        icon: <IconTelegram />
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
    svg: <IconVk />,
    contactMethods: [
      {
        name: 'Написать',
        icon: <IconTelegram />
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
    svg: <IconMobilePhone />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <IconMobilePhone />
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
    svg: <IconEmail />,
    contactMethods: [
      {
        name: 'Написать',
        icon: <IconTelegram />
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

const createFormStageTitleContainer = dataToCreateTitleContainer => {
  const { wayToContact, enterContactData, handleUserGoingBack } =
    dataToCreateTitleContainer
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
        <IconArrowLeft />
      </div>
      {wayToContactTitle}
    </div>
  )

  return formStageTitleContainer
}

const createButtons = dataToCreateButtons => {
  const {
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick,
    setIsContactDataInputTouched,
    userQuestion
  } = dataToCreateButtons

  let buttons

  if (selectWay) {
    buttons = waysToContact.map((wayToContact, idx) => (
      <ContactButton
        key={wayToContact.name + idx}
        wayToContact={wayToContact}
        chooseWayToContact={selectedWayToContact => {
          handleUserClick(
            selectedWayToContact,
            wayToContact.stageStep,
            userQuestion
          )
        }}
      />
    ))
  }

  if (selectMethod) {
    buttons = wayToContact.contactMethods.map((method, idx) => (
      <button
        key={method.name + idx}
        onClick={() => handleUserClick(method.name)}
        className={`button ${stls.formStageButton}`}>
        <div className={stls.btnContent}>
          {method.icon} {method.name}
        </div>
      </button>
    ))
  }

  if (enterContactData) {
    buttons = (
      <button
        className={`button ${stls.formStageButton} ${stls.sendButton}`}
        onClick={() => setIsContactDataInputTouched(true)}>
        Отправить
      </button>
    )
  }

  return buttons
}

const showSelectWayStage = dataToShowThisStage => {
  const {
    userQuestion,
    setUserQuestion,
    questionTextareaPlaceholder,
    isQuestionTextareaTouched,
    setIsQuestionTextareaTouched
  } = dataToShowThisStage

  const questionTextareaPlaceholderClasses = [stls.questionTextareaPlaceholder]

  if (isQuestionTextareaTouched)
    questionTextareaPlaceholderClasses.push(
      stls.questionTextareaPlaceholderInvisible
    )

  const buttons = createButtons(dataToShowThisStage)

  return (
    <>
      <textarea
        autoFocus
        placeholder='Напишите вопрос...'
        value={userQuestion}
        onChange={e => setUserQuestion(e.target.value)}
        className={stls.questionTextarea}
      />
      <p className={questionTextareaPlaceholderClasses.join(' ')}>
        {questionTextareaPlaceholder}
      </p>
      <div className={stls.waysToContactGrid}>
        <p className={stls.howToContact}>Куда ответить:</p>
        {buttons}
      </div>
    </>
  )
}

const showSelectMethodStage = dataToShowThisStage => {
  const formStageTitleContainer =
    createFormStageTitleContainer(dataToShowThisStage)
  const buttons = createButtons(dataToShowThisStage)

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
    handleUserClick,
    isContactDataInputTouched,
    setIsContactDataInputTouched,
    inputPlaceholderText,
    setInputPlaceholderText,
    leadPage
  } = dataToShowThisStage

  const inputPlaceholderClasses = [stls.inputPlaceholder]

  if (isContactDataInputTouched)
    inputPlaceholderClasses.push(stls.inputPlaceholderSmall)

  const formStageTitleContainer =
    createFormStageTitleContainer(dataToShowThisStage)

  const buttons = createButtons(dataToShowThisStage)

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
      const { name, selectedMethod, question } = wayToContact

      const userDataToSend = {
        contactWay: name,
        contactMethod: selectedMethod,
        [validationType]: enteredContactData,
        question,
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
    <div
      className={`${stls.formSubmitted} thanks-popup-content thanks-popup-content--question`}>
      <div className={`circle ${stls.circle}`}>
        <IconCheck />
      </div>
      <h3 className={stls.thanksForSubmitting}>Спасибо за заявку!</h3>
      <p className={stls.weWillContactYouPara}>
        Менеджер свяжется с Вами в ближайшее время
      </p>
    </div>
  )
}

const AskQuestionFormStage = ({
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

  const [userQuestion, setUserQuestion] = useState(wayToContact?.question ?? '')

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
    userQuestion,
    setUserQuestion,
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

export default AskQuestionFormStage
