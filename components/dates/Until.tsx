import langMenu from '@/translation/data/menu'
import langMonths from '@/translation/data/months'
import setString from '@/components/hooks/setString'

const Until = ({ preposition = true }) => {
  return (
    <>
      {preposition && setString(langMenu.discountUntil)} 5{' '}
      {setString(langMonths.may)}
    </>
  )
}

export default Until
