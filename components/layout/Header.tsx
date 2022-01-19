import stls from '@/styles/components/layout/Header.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import { IconEcicelLogo, IconRaboLogo } from '@/components/icons'

const Header = () => {
  return (
    <>
      <header className={stls.container}>
        <Wrapper>
          <div className={stls.content}>
            <Logo />
            <p className={stls.p}>moscow.mba</p>
          </div>
        </Wrapper>
      </header>
    </>
  )
}

export default Header
