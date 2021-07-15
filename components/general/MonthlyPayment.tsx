import stls from '@/styles/components/general/MonthlyPayment.module.sass'
import Loan from '@/components/costs/Loan'
import { IconCheckCircle } from '@/components/icons'

const Discount = ({ type = 'mini', format = 'online' }) => {
  return (
    <div className={stls.container}>
      <div className={stls.icon}>
        <IconCheckCircle />
      </div>
      <p className={stls.text}>
        Можно учиться в рассрочку за <Loan type={type} format={format} />
      </p>
    </div>
  )
}

export default Discount
