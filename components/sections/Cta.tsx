import stls from '@/styles/components/sections/Cta.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import DiscountCircle from '@/components/general/DiscountCircle'
import { BtnCta } from '@/components/btns'
import Btns from '@/components/general/Btns'

const Cta = () => {
  return (
    <section>
      <Wrapper>
        <div className={stls.heading}>
          <h2 className={stls.title}>
            ОСТАВЬТЕ ЗАЯВКУ НА <br /> КОНСУЛЬТАЦИЮ
          </h2>
          <p className={stls.p}>
            Оставьте свои контакты, менеджер свяжется с Вами, подберет программу
            и ответит на вопросы!
          </p>
          <div className={stls.discountCircle}>
            <DiscountCircle />
          </div>
        </div>
        <BtnCta />
        <Btns />
      </Wrapper>
    </section>
  )
}

export default Cta
