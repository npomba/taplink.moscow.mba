import langMenu from '@/data/translation/menu'
import langMonths from '@/data/translation/months'
import setString from '@/components/hooks/setString'

const Until = ({ preposition = true }) => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const currentDay = currentDate.getDate()
  return (
    <>
      {preposition && setString(langMenu.discountUntil)}
      {currentDay < 20 ? '20' : '5'}{' '}
      {currentMonth === 1
        ? setString(langMonths.january)
        : currentMonth === 2
        ? setString(langMonths.february)
        : currentMonth === 3
        ? setString(langMonths.march)
        : currentMonth === 4
        ? setString(langMonths.april)
        : currentMonth === 5
        ? setString(langMonths.may)
        : currentMonth === 6
        ? setString(langMonths.june)
        : currentMonth === 7
        ? setString(langMonths.july)
        : currentMonth === 8
        ? setString(langMonths.august)
        : currentMonth === 9
        ? setString(langMonths.september)
        : currentMonth === 10
        ? setString(langMonths.october)
        : currentMonth === 11
        ? setString(langMonths.november)
        : currentMonth === 12
        ? setString(langMonths.december)
        : null}
    </>
  )
}

export default Until
