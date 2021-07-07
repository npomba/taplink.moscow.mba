import stls from '@/styles/components/sections/WhoStudies.module.sass'
import IconDecorativeLines from '@/components/icons/IconDecorativeLines'
import circleStls from '@/styles/components/CircularProgressBar.module.sass'
import { CircularProgressbar } from 'react-circular-progressbar'

const WhoStudies = () => {
  return (
    <section className={stls.container}>
      <h2>Кто учится на программе?</h2>
      <ul className={stls.list}>
        <li>
          <CircularProgressbar className={circleStls.circleLg} value={45} />
          <strong className={circleStls.strong}>45%</strong>
          <p>Владельцев крупного бизнеса</p>
        </li>
        <li>
          <CircularProgressbar className={circleStls.circleLg} value={55} />
          <strong className={circleStls.strong}>55%</strong>
          <p>SEO и руководителей</p>
        </li>
      </ul>
      <div className={stls.lines}>
        <IconDecorativeLines />
      </div>
    </section>
  )
}

export default WhoStudies
