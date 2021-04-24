import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReviewPopUp from '../popups/ReviewPopUp'

const Reviews = () => {
  const reviews = [
    {
      id: 'reviewModal-1',
      name: 'Мария Алтухова',
      body:
        'Закончила программу МВА в прошлом году! Это было отличное время, с ребятами из группы дружим до сих пор. Бываю на мероприятиях в школе несколько раз в год, общаюсь с преподавателями... В целом, программа хорошо сбалансирована и, скорее, подойдет для тех, у кого уже есть базовое образование. Школа дала актуальные знания, которые получилось применить в наших проектах и получить результат.',
      excerpt:
        'Закончила программу МВА в прошлом году! Это было отличное время, с ребятами из группы дружим до сих пор. Бываю...',
      profession: 'Руководитель E-COM проекта',
      picUrl: 'review-1.jpg',
    },
    {
      id: 'reviewModal-2',
      name: 'Арсений Бондаренко',
      body:
        'Являюсь руководителем строительной фирмы, занимаемся возведением домов из клееного бруса. Программа MBA помогла оптимизировать бизнес-процессы, полностью пересмотреть штат сотрудников и систему KPI. Получилось увеличить ключевые показатели в 1,5 раза. Однозначно рекомендую поступать, если хотите получить современные бизнес-инструменты и навыки...',
      excerpt:
        'Являюсь руководителем строительной фирмы, занимаемся возведением домов из клееного бруса. Программа MBA помогла оптимизировать...',
      profession: 'Генеральный директор «ДОМстрой»',
      picUrl: 'review-2.jpg',
    },
    {
      id: 'reviewModal-3',
      name: 'Вячеслав Глухов',
      body:
        'Закончил обучение в 2018 году и тесно поддерживаю связь с академией. Для меня программа МВА стала ракетой в плане карьеры и дохода. Отдельно хочу сказать про преподавателей. Большое им спасибо. На вопросы отвечают быстро, всегда готовы поделиться опытом. Учиться сложно, но оно того стоит! В общем, очень доволен.',
      excerpt:
        'Закончил обучение в 2018 году и тесно поддерживаю связь с академией. Для меня программа МВА стала ракетой в плане карьеры и дохода.',
      profession: 'Директор по развитию fintech стартапа',
      picUrl: 'review-4.jpg',
    },
    {
      id: 'reviewModal-4',
      name: 'Евгений Борохов',
      body:
        'В конце прошлого года возникла потребность в расширении кругозора и получении дополнительных знаний, которые помогли бы более широко взглянуть на деятельность компании. Решение принял за неделю. Выбор бизнес-школ достаточно большой, однако, прислушавшись к рекомендациям, поступил сюда. После получения диплома и завершения обучения многие знакомые интересовались получил ли я то, чего хотел. По сути вопроса, ответ на него, как и полученный результат, для меня оказались по-хорошему неожиданными и «настоящими». В этом большая заслуга людей, которые организовывали, обучали и направляли. Мне повезло пообщаться, посмотреть и поучиться у глубоких, содержательных людей. За это хотелось выразить огромную благодарность Moscow Business Academy и всем моим коллегам, с которыми мне посчастливилось пройти обучение!',
      excerpt:
        'В конце прошлого года возникла потребность в расширении кругозора и получении дополнительных знаний, которые помогли бы более широко...',
      profession: 'Основатель сети детских школ тенниса',
      picUrl: 'review-3.jpg',
    },
  ]
  return (
    <>
      <section className='reviews-section'>
        <div className='section-pl'>
          <h2>Что о нас говорят</h2>
        </div>
        <div className='reviews-text-list'>
          {reviews.map((review, idx) => {
            return (
              <div className='reviews-text-block' key={review.id}>
                <div className='avatar'>
                  <img
                    className='lazyload'
                    data-src={`/assets/images/reviews/${review.picUrl}`}
                    alt=''
                  />
                </div>
                <div className='info'>
                  <div className='text'>
                    <p>
                      {review.excerpt + ' '}

                      <Popup
                        trigger={<a className='link cursor-pointer'>Читать</a>}
                        modal
                        nested
                      >
                        {(close) => (
                          <ReviewPopUp
                            closePopUp={close}
                            review={reviews[idx]}
                          />
                        )}
                      </Popup>
                    </p>
                  </div>
                  <div className='name'>{review.name}</div>
                  <div className='job'>{review.profession}</div>
                </div>
              </div>
            )
          })}
        </div>
        {/* <div className='reviews-preview-list'>
          <a href='' className='reviews-preview-block'>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/review_prew_1.jpg'
                alt=''
              />
            </div>
            <div className='content'>
              <div className='type'>Отзыв в формате статьи</div>
              <div className='name'>
                Как Александр увеличил доход цементного завода после прохождения
                MBA professional
              </div>
            </div>
          </a>
          <a
            href='https://www.youtube.com/watch?v=l6pDOwNeTrg'
            className='reviews-preview-block video-preview popup-youtube'
          >
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/review_prew_2.jpg'
                alt=''
              />
            </div>
            <div className='content'>
              <div className='play'>
                <i></i>
              </div>
              <div className='name'>Видео отзыв</div>
            </div>
          </a>
        </div> */}
      </section>
    </>
  )
}

export default Reviews
