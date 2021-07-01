import stls from '@/styles/modules/sections/About.module.sass'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'

const About = () => {
  return (
    <section className='about-section section-pl'>
      <div className='title-pl'>{SetString(lang.aboutTitle)}</div>
      <div className='about-flex'>
        <div className='title-desc'>
          <p>{SetString(lang.aboutTxtFirst)}</p>
          <p>{SetString(lang.aboutTxtSecond)}</p>
        </div>
        <ul className='about-list'>
          <li>
            <div className='number'>
              {SetString(lang.aboutBenefitTitleFirst)}
            </div>
            <p>{SetString(lang.aboutBenefitDicsFirst)}</p>
          </li>
          <li>
            <div className='number'>9000+</div>
            <p>{SetString(lang.aboutBenefitDicsSecond)}</p>
          </li>
          <li>
            <div className='number'>25%</div>
            <p>{SetString(lang.aboutBenefitDicsThird)}</p>
          </li>
          <li>
            <div className='number'>150+</div>
            <p>{SetString(lang.aboutBenefitDicsFourth)}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
