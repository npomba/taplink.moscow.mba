import SetString from '@/components/hooks/SetString'
import langMenu from '@/data/translation/menu'

const TrainingPeriod = ({ type = null }) => {
  return (
    <>
      {type === 'mini' && <>9 {SetString(langMenu.categoryMonth)}</>}
      {type === 'professional' && <>18 {SetString(langMenu.categoryMonth)}</>}
      {type === 'industry' && <>18 {SetString(langMenu.categoryMonth)}</>}
      {type === 'executive' && <>26 {SetString(langMenu.categoryMonth)}</>}
    </>
  )
}

export default TrainingPeriod
