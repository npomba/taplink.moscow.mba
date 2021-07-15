import stls from '@/styles/components/sections/Cta.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import MonthlyPayment from '@/components/general/MonthlyPayment'
import { BtnCta } from '@/components/btns'

const Cta = ({ data: { title, id } }) => {
  return (
    <section>
      <Wrapper>
        <h2 className={stls.title}>Узнайте больше о программе!</h2>
        <p className={stls.text}>
          Оставьте свои контакты, менеджер свяжется с Вами, пришлет презентацию
          программы и ответит на вопросы!
        </p>
        <BtnCta data={{ title, id }} />
        <MonthlyPayment />
      </Wrapper>
    </section>
  )
}

export default Cta
