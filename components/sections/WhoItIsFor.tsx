import WhoItIsForModule from '@/components/general/WhoItIsForModule'
import stls from '@/styles/modules/WhoItIsFor.module.sass'

const whatCanBeLearned = [
  {
    title: 'Тем, кто хочет начать карьеру в fashion-дизайне',
    description:
      'Изучите основные швейные инструменты и научитесь создавать стильную одежду для разных типов фигуры. Сможете шить красивые вещи для себя или превратите fashion-дизайн в профессию — даже если никогда не держали в руках нитку с иголкой.',
  },
  {
    title: 'Тем, кто хочет начать карьеру в fashion-дизайне',
    description:
      'Изучите основные швейные инструменты и научитесь создавать стильную одежду для разных типов фигуры. Сможете шить красивые вещи для себя или превратите fashion-дизайн в профессию — даже если никогда не держали в руках нитку с иголкой.',
  },
]

const WhoItIsFor = ({ whatCanYouLearn = whatCanBeLearned }) => {
  return (
    <section className={stls.whoItIsForSection}>
      <h2>Кому подойдет эта программа?</h2>
      {whatCanYouLearn.map(({ title, description }, idx) => (
        <WhoItIsForModule
          title={title}
          description={description}
          moduleIndex={idx}
        />
      ))}
    </section>
  )
}

export default WhoItIsFor
