import stls from '@/styles/components/sections/WhoItIsFor.module.sass'
import WhoItIsForItem from '@/components/general/WhoItIsForItem'

const WhoItIsFor = ({ data: { suitsForTitle, suitsForDesc } }) => {
  const whatCanBeLearned = []
  suitsForTitle.forEach((title, idx) => {
    whatCanBeLearned.push({ title, description: suitsForDesc[idx] })
  })

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>Кому подойдет эта программа?</h2>
      {whatCanBeLearned.map(({ title, description }, idx) => (
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
