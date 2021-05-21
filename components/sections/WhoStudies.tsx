import SVGDecorativeLines from '@/components/svgs/SVGDecorativeLines'

const WhoStudies = () => {
  return (
    <section className='who-training-section'>
      <h2>Кто учится на программе?</h2>
      <ul className='who-training-list'>
        <li>
          <div className='who-training-circle circle-js-big' data-value='0.45'>
            <strong>45%</strong>
          </div>
          <p>Владельцев крупного бизнеса</p>
        </li>
        <li>
          <div className='who-training-circle circle-js-big' data-value='0.55'>
            <strong>55%</strong>
          </div>
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
