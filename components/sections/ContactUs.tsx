import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'
import onSubmitForm from '@/components/hooks/onSubmitForm'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  phone: string
}

const ContactUs = ({
  title = setString(lang.helpToChooseTitle),
  disc = setString(lang.helpToChooseDics),
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  return (
    <section className='support-section'>
      <h2>{title}</h2>
      <div className='text'>{disc}</div>
      <form
        method='post'
        className='simple-form support-form embedded-form'
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className='inputs-flex'>
          <div className='input-block width-33'>
            <input
              type='text'
              {...register('name', {
                maxLength: {
                  value: 32,
                  message: `*${setString(lang.formErrLongName)}`,
                },
              })}
            />
            <div className='input-placeholder'>{setString(lang.inputName)}</div>
            <p className='inpt-err-msg'>{errors.name && errors.name.message}</p>
          </div>
          <div className='input-block width-33'>
            <input
              type='tel'
              {...register('phone', {
                required: `*${setString(lang.formErrEmptyPhone)}`,
                minLength: {
                  value: 5,
                  message: `*${setString(lang.formErrShortPhone)}`,
                },
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
              disabled={errors.name || errors.phone ? true : false}
            >
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
    </section>
  )
}

export default ContactUs
