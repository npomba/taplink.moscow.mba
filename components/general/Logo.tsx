import stls from '@/styles/components/general/Logo.module.sass'
import { IconLogoImg, IconLogoTitle } from '@/components/icons'

const Logo = () => {
  return (
    <div className={stls.container} aria-label='Moscow Business Academy'>
      <div className={stls.image}>
        <IconLogoImg />
      </div>
      <div className={stls.title}>
        <IconLogoTitle />
      </div>
    </div>
  )
}

export default Logo
