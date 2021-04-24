import setString from '@/components/hooks/setString'
import lang from '@/data/translation/about'

const Accreditation = () => {
  return (
    <section className='accreditations-section small-mb'>
      <div className='image'>
        <img
          className='lazyload'
          data-src='/assets/images/accreditations_pic_1.jpg'
          alt=''
        />
      </div>
      <div className='accreditations-content'>
        <h2>{setString(lang.accreditationTitle)}</h2>
        <div className='title-desc'>{setString(lang.accreditationDics)}</div>
        <ul className='accreditations-list'>
          <li>{setString(lang.accreditationItemOne)}</li>
          <li>{setString(lang.accreditationItemTwo)}</li>
        </ul>
        <a href='' className='accreditations-link'>
          <div className='pic'>
            <img src='/assets/images/icon_list.svg' alt='' />
          </div>
          <span>{setString(lang.accreditationLicenseLink)}</span>
        </a>
      </div>
    </section>
  )
}

export default Accreditation
