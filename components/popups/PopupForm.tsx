import stls from '@/styles/components/popups/PopupForm.module.sass'
import classNames from 'classnames'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import onSubmitForm from '@/components/hooks/onSubmitForm'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import handlePlaceholder from '@/components/general/handlePlaceholder'
import Popup from 'reactjs-popup'
import PopupThankyou from '@/components/popups/PopupThankyou'
import PopupLoader from '@/components/popups/PopupLoader'
import { IconClose } from '@/components/icons'
import { useRouter } from 'next/router'

type FormValues = {
  name: string
  phone: string
}

const Form = ({
  closePopUpForm,
  programTitle = null,
  programId = null,
  title = SetString(lang.helpToChooseTitle),
  disc = SetString(lang.helpToChooseDics)
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)
  const closeModal = () => setOpen(false)
  const closeLoadingModal = () => setOpenLoader(false)
  const { asPath } = useRouter()

  const onSubmitFormThis = async values => {
    setOpenLoader(o => !o)
    values.programTitle = programTitle
    values.leadPage = asPath
    const utms = JSON.parse(sessionStorage.getItem('utms'))
    values.utms = utms
    sessionStorage.removeItem('utms')
    const req = await onSubmitForm(values)
    if (req === 200) {
      closeLoadingModal()
      setOpen(o => !o)
      reset()
    } else {
      console.log('err')
    }
  }

  const handleKeyUp = e => {
    handlePlaceholder(e)
  }

  return (
    <div>
      <Popup open={openLoader} onClose={closeLoadingModal}>
        <PopupLoader closePopUp={closeLoadingModal} />
      </Popup>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <PopupThankyou
          closePopUp={closeModal}
          programId={programId}
          programTitle={programTitle}
        />
      </Popup>
      <div className={stls.container}>
        <h3 className={stls.title}>{title}</h3>
        <form method='post' onSubmit={handleSubmit(onSubmitFormThis)}>
          <div className={stls.inputGroups}>
            <div className={stls.inputGroup}>
              <input
                type='text'
                className={stls.input}
                aria-label={SetString(lang.inputName)}
                {...register('name', {
                  maxLength: {
                    value: 32,
                    message: `*${SetString(lang.formErrLongName)}`
                  }
                })}
                onKeyUp={handleKeyUp}
              />
              <p className={stls.inputName}>{SetString(lang.inputName)}</p>
              <p className={stls.error}>{errors.name && errors.name.message}</p>
            </div>
            <div className={stls.inputGroup}>
              <input
                type='tel'
                className={stls.input}
                aria-label={SetString(lang.inputPhone)}
                {...register('phone', {
                  required: `*${SetString(lang.formErrEmptyPhone)}`,
                  minLength: {
                    value: 5,
                    message: `*${SetString(lang.formErrShortPhone)}`
                  }
                })}
                onKeyUp={handleKeyUp}
              />
              <p className={stls.inputName}>{SetString(lang.inputPhone)}</p>
              <p className={stls.error}>
                {errors.phone && errors.phone.message}
              </p>
            </div>
            <div className={stls.btnGroup}>
              <button
                type='submit'
                className={classNames({
                  [stls.btnLead]: true,
                  [stls.disabled]: errors.name || errors.phone
                })}
                disabled={errors.name || errors.phone ? true : false}>
                {SetString(lang.inputSubmit)}
              </button>
            </div>
          </div>
          <p className={stls.policy}>
            {SetString(lang.privacyPolicyFirst)}{' '}
            {SetString(lang.privacyPolicySecond)}
          </p>
        </form>
        <button className={stls.close} onClick={closePopUpForm}>
          <IconClose />
        </button>
      </div>
    </div>
  )
}

export default Form
