import langMenu from '@/data/translation/menu'
import langMonths from '@/data/translation/months'
import setString from '@/components/hooks/setString'

const Until = ({ preposition = true }) => {
  return (
    <>
      {preposition && setString(langMenu.discountUntil)} 20{' '}
      {setString(langMonths.may)}
    </>
  )
}

export default Until
