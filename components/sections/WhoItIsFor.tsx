import stls from '@/styles/components/sections/WhoItIsFor.module.sass'
import WhoItIsForItem from '@/components/general/WhoItIsForItem'

const whatCanBeLearned = [
  {
    title: 'Тем, кто хочет начать карьеру в fashion-дизайне',
    description:
      'Изучите основные швейные инструменты и научитесь создавать стильную одежду для разных типов фигуры. Сможете шить красивые вещи для себя или превратите fashion-дизайн в профессию — даже если никогда не держали в руках нитку с иголкой.'
  },
  {
    title: 'Тем, кто хочет начать карьеру в fashion-дизайне',
    description:
      'Изучите основные швейные инструменты и научитесь создавать стильную одежду для разных типов фигуры. Сможете шить красивые вещи для себя или превратите fashion-дизайн в профессию — даже если никогда не держали в руках нитку с иголкой.'
  }
]

const WhoItIsFor = ({ whatCanYouLearn = whatCanBeLearned }) => {
  return (
    <section className={stls.container}>
      <h2 className={stls.title}>Кому подойдет эта программа?</h2>
      {whatCanYouLearn.map(({ title, description }, idx) => (
        <WhoItIsForItem
          key={title + idx}
          title={title}
          description={description}
          moduleIndex={idx}
        />
      ))}
    </section>
  )
}

export default WhoItIsFor
