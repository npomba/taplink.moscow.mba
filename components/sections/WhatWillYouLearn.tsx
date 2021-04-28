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
            <img
              className='lazyload'
              data-src='/assets/images/learning_pic_1.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWillYouLearn
