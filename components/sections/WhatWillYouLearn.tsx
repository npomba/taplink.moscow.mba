import Image from 'next/image'

const WhatWillYouLearn = ({ data }) => {
  return (
    <section className='learning-section'>
      <div className='learning-content clearfix'>
        <div className='section-pl floatLeft'>
          <h2>
            Чему <br />
            Вы научитесь?
          </h2>
        </div>
        <div className='floatRight'>
          <ul className='learning-list'>
            {data.whatWillYouLearn.map((item, idx) => {
              return <li key={idx}>{item}</li>
            })}
          </ul>
        </div>
        <div className='floatLeft'>
          <div className='image'>
            <Image
              src='/assets/images/learning_pic_1.jpg'
              width='651'
              height='389'
              alt='Слушатели во время конференции'
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
// 651 x 389

export default WhatWillYouLearn
