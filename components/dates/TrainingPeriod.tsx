import setString from '@/components/hooks/setString'
import langMenu from '@/data/translation/menu'

const TrainingPeriod = ({ type = null }) => {
  return (
    <>
      {type === 'mini' && <>9 {setString(langMenu.categoryMonth)}</>}
      {type === 'professional' && (
        <>
          1 {setString(langMenu.categoryYear)} 6{' '}
          {setString(langMenu.categoryMonth)}
        </>
      )}
      {type === 'industry' && (
        <>
          1 {setString(langMenu.categoryYear)} 6{' '}
          {setString(langMenu.categoryMonth)}
        </>
      )}
      {type === 'executive' && (
        <>
          2 {setString(langMenu.categoryYearAlt)} 3{' '}
          {setString(langMenu.categoryMonthAlt)}
        </>
      )}
    </>
  )
}

export default TrainingPeriod
