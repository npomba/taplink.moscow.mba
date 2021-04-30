//
import { useEffect } from 'react'
import loadJs from 'loadjs'

const Students = () => {
  useEffect(() => {
    loadJs(['/assets/js/circle.js'], {
      async: false,
    })
  }, [])
  return (
    <section className='students-section section-pl'>
      <div className='title-pl red'>Более 2000</div>
      <div className='students-flex'>
        <div className='students-detail'>
          <h2>Наши студенты</h2>
          <div className='desc'>
            Вы станете частью эффективного нетворкинга по всему миру
          </div>
          <h4>Согласно опросу 2000 наших студентов:</h4>
          <ul className='students-list'>
            <li>
              <div className='students-circle circle-js' data-value='0.96'>
                <strong>96%</strong>
              </div>
              <p>остались довольны обучением</p>
            </li>
            <li>
              <div className='students-circle circle-js' data-value='0.92'>
                <strong>92%</strong>
              </div>
              <p>повысили показатели своих проектов</p>
            </li>
            <li>
              <div className='students-circle circle-js' data-value='0.72'>
                <strong>72%</strong>
              </div>
              <p>продвинулись по карьерной лестнице</p>
            </li>
          </ul>
        </div>
        <div className='dobble-images students-images'>
          <div className='image pic-1'>
            <img
              className='lazyload'
              data-src='/assets/images/students_pic_1.jpg'
              alt=''
            />
          </div>
          <div className='image pic-2'>
            <img
              className='lazyload'
              data-src='/assets/images/students_pic_2.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Students
