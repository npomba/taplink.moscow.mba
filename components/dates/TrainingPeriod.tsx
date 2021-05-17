import setString from '@/components/hooks/setString'
import langMenu from '@/data/translation/menu'

const TrainingPeriod = ({ type = null }) => {
  return (
    <>
      {type === 'mini' && <>9 {setString(langMenu.categoryMonth)}</>}
      {type === 'professional' && <>18 {setString(langMenu.categoryMonth)}</>}
      {type === 'industry' && <>18 {setString(langMenu.categoryMonth)}</>}
      {type === 'executive' && <>26 {setString(langMenu.categoryMonth)}</>}
    </>
  )
}

export default TrainingPeriod
