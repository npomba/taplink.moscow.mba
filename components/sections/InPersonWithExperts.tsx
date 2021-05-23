import Image from 'next/image'

const InPersonWithExperts = () => {
  return (
    <section className='intramural-moduls-section'>
      <div className='intramural-moduls-content'>
        <div className='title-pl red'>10 модулей</div>
        <h2>Очные модули с экспертами в Москве</h2>
        <h4>10 очных модулей в Москве длительностью 60 дней</h4>
        <div className='title-desc'>
          <p>
            Очные сессии помогут пообщаться с единомышленниками и решить
            конкретные вопросы, которые встречаются в повседневной деятельности
            компании
          </p>
          <p>
            Во время обучения Вы вместе с преподавателями проанализируете все
            бизнес-процессы и начнете реализацию долгосрочного плана
            по повышению эффективности работы компании
          </p>
        </div>
      </div>
      <div className='image'>
        <Image
          src='/assets/images/intramural_moduls_pic_1.jpg'
          alt='Слушатели на конференции MBA'
          width={467}
          height={467}
        />
      </div>
    </section>
  )
}

export default InPersonWithExperts
