const Rules = ({ prices }) => {
  return (
    <section className='rules-section'>
      <div className='rules-flex'>
        <h2>Правила приема</h2>
        <div className='rules-content'>
          <h3>Что требуется от кандидата</h3>
          <ul className='rules-list'>
            <li>
              Наличие высшего профессионального образования, подтвержденного
              дипломом
            </li>
            <li>
              Опыт работы не менее 5 лет (управленческая деятельность или опыт
              создания и управления собственным бизнесом)
            </li>
            <li>
              Годовой оборот организации от {prices.lowerPrice} $ для
              топ-менеджеров и от {prices.higherPrice} $ для собственников
              бизнеса
            </li>
            <li>Признанные профессиональные достижения</li>
            <li>
              Уровень владения английским языком не ниже уровня Pre-Intermediate
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Rules
