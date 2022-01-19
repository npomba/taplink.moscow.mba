import stls from '@/styles/components/general/Heading.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const Heading = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Об академии</h1>
        <p className={stls.pFirst}>
          Московская Бизнес Академия яляется
          <br /> одной из ведущих бизнес-школ
          <br /> на территории СНГ и одной из немногих
          <br /> бизнес-школ, которая экспортирует
          <br /> отечественные MBA на Запад и работает
          на&nbsp;глобальном&nbsp;рынке
        </p>
        <p className={stls.p}>
          Ежегодно сотни руководителей <br /> и владельцев компаний получают
          здесь <br /> бизнес-образование международного <br /> уровня и
          завязывают новые&nbsp;знакомства
        </p>
      </Wrapper>
    </section>
  )
}

export default Heading
