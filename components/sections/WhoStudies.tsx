import SVGDecorativeLines from '@/components/svgs/SVGDecorativeLines'

import circleStls from '@/styles/modules/CircularProgressBar.module.sass'
import { CircularProgressbar } from 'react-circular-progressbar'

const WhoStudies = () => {
  return (
    <section className='who-training-section'>
      <h2>Кто учится на программе?</h2>
      <ul className='who-training-list'>
        <li>
          <CircularProgressbar className={circleStls.circleLg} value={45} />
          <strong className={circleStls.strongLg}>45%</strong>
          <p>Владельцев крупного бизнеса</p>
        </li>
        <li>
          <CircularProgressbar className={circleStls.circleLg} value={55} />
          <strong className={circleStls.strongLg}>55%</strong>
          <p>SEO и руководителей</p>
        </li>
      </ul>
      <div className='lines'>
        <SVGDecorativeLines />
      </div>
    </section>
  )
}

export default WhoStudies
