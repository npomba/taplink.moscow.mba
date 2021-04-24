import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'

const About = () => {
  return (
    <section className='about-section section-pl'>
      <div className='title-pl'>{setString(lang.aboutTitle)}</div>
      <div className='about-flex'>
        <div className='title-desc'>
          <p>{setString(lang.aboutTxtFirst)}</p>
          <p>{setString(lang.aboutTxtSecond)}</p>
        </div>
        <ul className='about-list'>
          <li>
            <div className='number'>
              {setString(lang.aboutBenefitTitleFirst)}
            </div>
            <p>{setString(lang.aboutBenefitDicsFirst)}</p>
          </li>
          <li>
            <div className='number'>9000+</div>
            <p>{setString(lang.aboutBenefitDicsSecond)}</p>
          </li>
          <li>
            <div className='number'>25%</div>
            <p>{setString(lang.aboutBenefitDicsThird)}</p>
          </li>
          <li>
            <div className='number'>150+</div>
            <p>{setString(lang.aboutBenefitDicsFourth)}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
