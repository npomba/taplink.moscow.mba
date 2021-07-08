import stls from '@/styles/components/general/HelpWithEmploymentItem.module.sass'
import { IconCheck } from '@/components/icons'

const HelpWithEmploymentItem = ({ title, description }) => {
  return (
    <div className={stls.block}>
      <div className={stls.iconCheck}>
        <IconCheck />
      </div>
      <div className={stls.content}>
        <h4 className={stls.title}>{title}</h4>
        <p className={stls.description}>{description}</p>
      </div>
    </div>
  )
}

export default HelpWithEmploymentItem
