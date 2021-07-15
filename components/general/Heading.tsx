import stls from '@/styles/components/general/Heading.module.sass'
import StudyDuration from '@/components/general/StudyDuration'
import Price from '@/components/costs/Price'
import StudyFormat from '@/components/general/StudyFormat'
import Wrapper from '@/components/layout/Wrapper'
import ProgramLabel from '@/components/general/ProgramLabel'
import DiscountCircle from '@/components/general/DiscountCircle'

const Heading = ({ title }) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.discount}>
            <DiscountCircle />
          </div>
          <ProgramLabel />
          <h1 className={stls.title}>«{title}»</h1>
          <div className={stls.info}>
            <StudyDuration />
            <StudyFormat />
          </div>
          <div className={stls.price}>
            <Price discount />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Heading
