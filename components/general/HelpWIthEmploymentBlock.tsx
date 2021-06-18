import RedCircle from '@/components/general/RedCircle'
import stls from '@/styles/modules/HelpWithEmployment.module.sass'

const HelpWithEmploymentBlock = ({ title, description }) => {
  return (
    <div className={stls.helpWithEmploymentBlock}>
      <RedCircle />
      <div className={stls.content}>
        <h4 className={stls.titleHeading}>{title}</h4>
        <p className={stls.description}>{description}</p>
      </div>
    </div>
  )
}

export default HelpWithEmploymentBlock
