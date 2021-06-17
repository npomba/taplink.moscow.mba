import stls from '@/styles/modules/WhoItIsFor.module.sass'

const WhoItIsForModule = ({ title, description, moduleIndex }) => {
  const mainHeadingText =
    moduleIndex <= 9 ? `0${moduleIndex + 1}` : `${moduleIndex + 1}`

  return (
    <div className={stls.whoItIsForModule}>
      <h3 className={stls.mainHeading}>{mainHeadingText}</h3>
      <div className={stls.content}>
        <h4 className={stls.titleHeading}>{title}</h4>
        <p className={stls.description}>{description}</p>
      </div>
    </div>
  )
}

export default WhoItIsForModule
