const BlendedMetups = () => {
  return (
    <section className='blended-info-section section-pl'>
      <div className='title-pl red'>3 очных модуля</div>
      <h2>MBA mini blended это очные встречи с экспертами в Москве</h2>
      <div className='blended-info-flex'>
        <div className='blended-info-content'>
          <h4>3 очных модуля в Москве длительностью 14 дней</h4>
          <ul className='simple-list'>
            <li>
              Очные сессии помогут пообщаться с единомышленниками и решить
              конкретные вопросы, которые встречаются в повседневной
              деятельности компании
            </li>
            <li>
              Во время обучения Вы вместе с экспертами проанализируете все
              бизнес-процессы и начнете реализацию долгосрочного плана
              по повышению эффективности работы компании
            </li>
          </ul>
        </div>
        <div className='blended-info-images'>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/top_path_pic_1.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlendedMetups
