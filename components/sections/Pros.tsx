import stls from '@/styles/components/sections/Pros.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const Cta = () => {
  const items = [
    { title: '11 лет', desc: 'На рынке образования' },
    { title: '2000+', desc: 'Выпускников по всему миру' },
    {
      title: '25%',
      desc: 'студентов – это иностранцы из стран дальнего зарубежья'
    },
    {
      title: '150+',
      desc: 'профессоров международного уровня готовят программы'
    }
  ]
  return (
    <section>
      <Wrapper>
        <ul className={stls.list}>
          {items.map((item, idx) => (
            <li key={item.title + idx} className={stls.item}>
              <h2 className={stls.title}>{item.title}</h2>
              <p className={stls.desc}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Cta
