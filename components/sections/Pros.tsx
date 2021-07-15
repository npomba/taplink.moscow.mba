import stls from '@/styles/components/sections/Pros.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const Cta = () => {
  const items = [
    'Получите международный диплом MBA',
    'Освоите современные методы управления',
    'Получите повышение на работе или улучшите показатели своего бизнеса'
  ]
  return (
    <section>
      <Wrapper>
        <ul className={stls.list}>
          {items.map((item, idx) => (
            <li key={`${item} ${idx}`} className={stls.item}>
              {item}
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Cta
