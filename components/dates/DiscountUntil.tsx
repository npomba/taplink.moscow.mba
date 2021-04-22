import langMenu from '@/translation/data/menu'
import langMonths from '@/translation/data/months'
import setString from '@/components/hooks/setString'

const DiscountUntil = () => {
  return (
    <span>
      {setString(langMenu.discountUntil)} 5 {setString(langMonths.may)}
    </span>
  )
}

export default DiscountUntil
