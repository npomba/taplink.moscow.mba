import stls from '@/styles/components/sections/Students.module.sass'
import { CircularProgressbar } from 'react-circular-progressbar'
// import 'react-circular-progressbar/dist/styles.css'

import circleStls from '@/styles/components/CircularProgressBar.module.sass'
import Image from 'next/image'

const Students = () => {
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
              <CircularProgressbar
                className={circleStls.circle}
                value={96}
                text={'96%'}
              />
              <p>остались довольны обучением</p>
            </li>
            <li>
              <CircularProgressbar
                className={circleStls.circle}
                value={92}
                text={'92%'}
              />
              <p>повысили показатели своих проектов</p>
            </li>
            <li>
              <CircularProgressbar
                className={circleStls.circle}
                value={72}
                text={'72%'}
              />
              <p>продвинулись по карьерной лестнице</p>
            </li>
          </ul>
        </div>
        <div className='dobble-images students-images'>
          <div className='image pic-1'>
            <Image
              src='/assets/images/students_pic_1.png'
              alt='Группа счастливых выпускников'
              width={481}
              height={473}
            />
          </div>
          <div className='image pic-2'>
            <Image
              src='/assets/images/students_pic_2.jpg'
              alt='Счастливый выпускник'
              width={199}
              height={199}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Students
