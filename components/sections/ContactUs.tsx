import setString from '../hooks/setString'
import lang from '../../translation/data/index'

const ContactUs = () => {
  return (
    <section className='support-section'>
      <h2>{setString(lang.helpToChooseTitle)}</h2>
      <div className='text'>{setString(lang.helpToChooseDics)}</div>
      <form action='#' method='post' className='simple-form support-form'>
        <div className='inputs-flex'>
          <div className='input-block width-33'>
            <input type='text' />
            <div className='input-placeholder'>{setString(lang.inputName)}</div>
          </div>
          <div className='input-block width-33'>
            <input type='text' />
            <div className='input-placeholder'>
              {setString(lang.inputPhone)}
            </div>
          </div>
          <div className='input-block width-33'>
            <button type='submit' className='button white-button'>
              {setString(lang.inputSubmit)}
            </button>
          </div>
        </div>
        <div className='personal-datas'>
          {setString(lang.privacyPolicyFirst)}{' '}
          <a href=''>{setString(lang.privacyPolicySecond)}</a>
        </div>
      </form>
    </section>
  )
}

export default ContactUs
