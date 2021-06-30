import SVGDecorativeLines from '@/components/svgs/SVGDecorativeLines'

import circleStls from '@/styles/modules/CircularProgressBar.module.sass'
import { CircularProgressbar } from 'react-circular-progressbar'

const WhoStudies = () => {
  return (
    <section className={circleStls.whoTrainingSection}>
      <h2>Кто учится на программе?</h2>
      <ul className={circleStls.whoTrainingList}>
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
      <div className={circleStls.lines}>
        <SVGDecorativeLines />
      </div>
    </section>
  )
}

export default WhoStudies
