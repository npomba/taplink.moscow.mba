import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'
import onSubmitForm from '@/components/hooks/onSubmitForm'
import { useForm } from 'react-hook-form'

import { useEffect, useState } from 'react'
import loadJs from 'loadjs'

import Popup from 'reactjs-popup'

import ThankyouPopup from '@/components/popups/Thankyou'
import Loader from '../popups/Loader'

type FormValues = {
  name: string
  phone: string
}

const Form = ({
  closePopUpForm,
  programTitle = null,
  programId = null,
  title = setString(lang.helpToChooseTitle),
  disc = setString(lang.helpToChooseDics)
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  useEffect(() => {
    loadJs(['/assets/js/formPlaceholder.js'], {
      async: false
    })
  }, [])

  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const [openLoader, setOpenLoader] = useState(false)
  const closeLoadingModal = () => setOpenLoader(false)

  const onSubmitFormThis = async values => {
    setOpenLoader(o => !o)
    const req = await onSubmitForm(values)
    if (req === 200) {
      closeLoadingModal()
      setOpen(o => !o)
      reset()
    } else {
      console.log('err')
    }
  }

  return (
    <div id='teachersModal' className='popup-modal mfp-hide mfp-with-anim'>
      <Popup open={openLoader} onClose={closeLoadingModal}>
        <Loader closePopUp={closeLoadingModal} />
      </Popup>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <ThankyouPopup
          closePopUp={closeModal}
          programId={programId}
          programTitle={programTitle}
        />
      </Popup>
      <div className='popup-content-origin red-bg'>
        <h2>{title}</h2>
        <div className='desc'>
          {!programTitle && disc}{' '}
          {programTitle &&
            `Оставьте заявку и получите консультацию по программе ${programTitle}, узнайте возможные варианты скидок и требования к поступлению`}
        </div>
        <form
          method='post'
          className='simple-form support-form'
          onSubmit={handleSubmit(onSubmitFormThis)}>
          <div className='inputs-flex'>
            <div className='input-block width-33'>
              <input
                type='text'
                {...register('name', {
                  maxLength: {
                    value: 32,
                    message: `*${setString(lang.formErrLongName)}`
                  }
                })}
              />
              <div className='input-placeholder'>
                {setString(lang.inputName)}
              </div>
              <p className='inpt-err-msg'>
                {errors.name && errors.name.message}
              </p>
            </div>
            <div className='input-block width-33'>
              <input
                type='tel'
                {...register('phone', {
                  required: `*${setString(lang.formErrEmptyPhone)}`,
                  minLength: {
                    value: 5,
                    message: `*${setString(lang.formErrShortPhone)}`
                  }
                })}
              />
              <div className='input-placeholder'>
                {setString(lang.inputPhone)}
              </div>
              <p className='inpt-err-msg'>
                {errors.phone && errors.phone.message}
              </p>
            </div>
            <div className='input-block width-33'>
              <button
                type='submit'
                className={`button white-button ${
                  errors.name || errors.phone ? 'btn-disabled' : ''
                }`}
                disabled={errors.name || errors.phone ? true : false}>
                {setString(lang.inputSubmit)}
              </button>
            </div>
          </div>
          <div className='personal-datas'>
            {setString(lang.privacyPolicyFirst)}{' '}
            {/* <a href=''>{setString(lang.privacyPolicySecond)}</a> */}
            {setString(lang.privacyPolicySecond)}
          </div>
        </form>
        <button className='mfp-close' type='button' onClick={closePopUpForm}>
          <img src='/assets/images/close.svg' alt='' />
        </button>
      </div>
    </div>
  )
}

export default Form
