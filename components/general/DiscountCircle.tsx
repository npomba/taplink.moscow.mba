import stls from '@/styles/components/general/DiscountCircle.module.sass'
import Discount from '@/components/costs/Discount'
import Until from '@/components/costs/Until'

const DiscountCircle = () => {
  return (
    <div className={stls.container}>
      <p className={stls.discount}>
        <Discount />
      </p>
      <p className={stls.until}>
        <Until />
      </p>
    </div>
  )
}

export default DiscountCircle
