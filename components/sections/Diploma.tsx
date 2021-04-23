const Diploma = () => {
  return (
    <section className='diplom-section'>
      <div className='image'>
        <img
          className='lazyload'
          data-src='/assets/images/diplom_pic_1.jpg'
          alt=''
        />
      </div>
      <div className='content'>
        <h2>Ваш будущий диплом</h2>
        <div className='desc'>
          Международный диплом установленного образца с присвоением степени
          «Мастер делового администрирования» с европейским приложением
        </div>
        <div className='note'>
          Диплом MBA Online не отличается от дипломов очных программ за счет
          того, что преподают те же спикеры по тем же учебным планам
        </div>
      </div>
    </section>
  )
}

export default Diploma
