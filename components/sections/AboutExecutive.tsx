import Image from 'next/image'

const AboutExecutive = () => {
  return (
    <section className='executive-about-section'>
      <div className='executive-about-flex'>
        <div className='executive-about-content'>
          <h2>
            <span className='red'>Executive MBA </span>Международная программа,
            в которой есть всё для раскрытия вашего потенциала
          </h2>
          <div className='title-desc'>
            <p>
              Программа Executive MBA разработана для амбициозных
              предпринимателей и топ-менеджеров крупных компаний, которые
              привыкли быть лучшими и не готовы останавливаться на достигнутом.
            </p>
            <p>
              Курс, объединивший лучшие отечественные бизнес-практики с
              глобальным мировым опытом, поможет Вам совершить настоящий прорыв
              в управлении компанией. Вы построите пошаговую стратегию развития,
              которая позволит взглянуть на бизнес по-новому.
            </p>
          </div>
        </div>
        <div className='dobble-images executive-about-images'>
          <div className='image pic-1'>
            <Image
              src='/assets/images/executive_about_1.jpg'
              alt='Слушатели на конференции'
              width={466}
              height={466}
            />
          </div>
          <div className='image pic-2'>
            <div className='number'>
              200+<sup></sup>
            </div>
            <div className='line'></div>
            <p>студентов уже обучились</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutExecutive
