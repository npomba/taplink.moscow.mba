import stls from '@/styles/components/general/forms/AskQuestionFormStage.module.sass'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ContactButton from '@/components/btns/ContactButton'
import SVGArrowLeft from '@/components/svgs/SVGArrowLeft'
import SVGTelegram from '@/components/svgs/SVGTelegram'
import SVGWhatsApp from '@/components/svgs/SVGWhatsapp'
import SVGViber from '@/components/svgs/SVGViber'
import SVGVK from '@/components/svgs/SVGVK'
import SVGMobilePhone from '@/components/svgs/SVGMobilePhone'
import SVGEmail from '@/components/svgs/SVGEmail'

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
        <SVGArrowLeft />
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
    userQuestion,
    isQuestionLengthInvalid
  } = dataToCreateButtons

  let buttons
  let placeholder

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
        disabled={isQuestionLengthInvalid}
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
    setQuestionTextareaPlaceholder,
    isQuestionTextareaTouched,
    setIsQuestionTextareaTouched,
    setIsQuestionLengthInvalid
  } = dataToShowThisStage

  const questionTextareaPlaceholderClasses = [stls.questionTextareaPlaceholder]

  if (isQuestionTextareaTouched)
    questionTextareaPlaceholderClasses.push(
      stls.questionTextareaPlaceholderSmall
    )

  const buttons = createButtons(dataToShowThisStage)

  const handleQuestionChange = e => {
    checkQuestionValidity()
    setUserQuestion(e.target.value)
  }

  const checkQuestionValidity = () => {
    if (userQuestion.length < 5) {
      setIsQuestionLengthInvalid(true)
      setQuestionTextareaPlaceholder('*Ваш вопрос слишком короткий')
    } else {
      setIsQuestionLengthInvalid(false)
      setQuestionTextareaPlaceholder('')
    }
  }

  return (
    <>
      <textarea
        onFocus={() => setIsQuestionTextareaTouched(true)}
        value={userQuestion}
        onChange={e => handleQuestionChange(e)}
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

  const [userQuestion, setUserQuestion] = useState('')
  const [isQuestionLengthInvalid, setIsQuestionLengthInvalid] = useState(true)
  const [isQuestionTextareaTouched, setIsQuestionTextareaTouched] =
    useState(false)
  const [questionTextareaPlaceholder, setQuestionTextareaPlaceholder] =
    useState('Напишите вопрос...')

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
    isQuestionTextareaTouched,
    setIsQuestionTextareaTouched,
    questionTextareaPlaceholder,
    setQuestionTextareaPlaceholder,
    isQuestionLengthInvalid,
    setIsQuestionLengthInvalid,
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
