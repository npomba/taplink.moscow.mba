import stls from '@/styles/modules/HelpWithEmploymentBlock.module.sass'

const HelpWithEmploymentBlock = ({ title, description }) => {
  return (
    <div className={stls.block}>
      <div className={stls.iconCheck}>
        <img src='/assets/images/icon_check.svg' />
      </div>
      <div className={stls.content}>
        <h4 className={stls.title}>{title}</h4>
        <p className={stls.description}>{description}</p>
      </div>
    </div>
  )
}

export default HelpWithEmploymentBlock
