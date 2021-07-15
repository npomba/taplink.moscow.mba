import SetString from '@/components/hooks/SetString'
import langMenu from '@/data/translation/menu'
import useAt from '@/components/hooks/useAt'

const TrainingPeriod = ({ preposition = false }) => {
  const at = useAt()
  return (
    <>
      {preposition && 'От '}
      {at.mini && <>9 {SetString(langMenu.categoryMonth)}</>}
      {at.professional && <>18 {SetString(langMenu.categoryMonth)}</>}
      {at.industry && <>18 {SetString(langMenu.categoryMonth)}</>}
      {at.profession && <>4 {SetString(langMenu.categoryMonth)}</>}
    </>
  )
}

export default TrainingPeriod
