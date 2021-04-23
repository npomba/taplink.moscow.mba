const ProgramDesc = ({ data }) => {
  return (
    <section className='top-path-section'>
      <div className='top-path-content'>
        <div className='title-pl'>Топ 2021</div>
        <h2>MBA mini online — путь руководителя к росту</h2>
        <div className='title-desc'>
          Программа профессиональной переподготовки Mini MBA разработана для
          специалистов и руководителей среднего звена, которые хотят
          систематизировать имеющиеся знания или познакомиться с ключевыми
          аспектами новой для себя сферы управленческой деятельности.
        </div>
      </div>
      <div className='image'>
        <img
          className='lazyload'
          data-src='/assets/images/top_path_pic_1.jpg'
          alt=''
        />
      </div>
    </section>
  )
}

export default ProgramDesc
