import stls from '@/styles/components/layout/Footer.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const Footer = () => {
  return (
    <footer className={stls.container}>
      <Wrapper>
        <p className={stls.text}>&copy; МБА, {new Date().getFullYear()}</p>
      </Wrapper>
    </footer>
  )
}

export default Footer
