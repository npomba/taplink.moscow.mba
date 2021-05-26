import langMenu from '@/data/translation/menu'
import langMonths from '@/data/translation/months'
import setString from '@/components/hooks/setString'

const Until = ({ preposition = true, executive = false }) => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth()
  const months = [
    setString(langMonths.january),
    setString(langMonths.february),
    setString(langMonths.march),
    setString(langMonths.april),
    setString(langMonths.may),
    setString(langMonths.june),
    setString(langMonths.july),
    setString(langMonths.august),
    setString(langMonths.september),
    setString(langMonths.october),
    setString(langMonths.november),
    setString(langMonths.december)
  ]
  if (executive)
    currentMonth =
      currentMonth + 7 > 11 ? currentMonth + 7 - 11 : currentMonth + 7
  return (
    <>
      {preposition && setString(langMenu.discountUntil) + ' '}
      {currentDay < 20 ? '20' : '5'}{' '}
      {(() => {
        let output
        if (currentDay < 20) {
          output = months[currentMonth]
        } else {
          currentMonth === 11
            ? (output = months[0])
            : (output = months[currentMonth + 1])
        }
        return output
      })()}
    </>
  )
}

export default Until
