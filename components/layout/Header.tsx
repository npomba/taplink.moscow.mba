import stls from '@/styles/components/layout/Header.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import { IconEcicelLogo, IconRaboLogo } from '@/components/icons'

const Header = () => {
  return (
    <>
      <header className={stls.container}>
        <Wrapper>
          <Logo />
          <div className={stls.icons}>
            <div className={stls.iconLeft}>
              <IconEcicelLogo />
            </div>
            <div className={stls.iconRight}>
              <IconRaboLogo />
            </div>
          </div>
        </Wrapper>
      </header>
    </>
  )
}

export default Header
