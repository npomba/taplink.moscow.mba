import stls from '@/styles/components/general/ProgramLabel.module.sass'
import useAt from '@/components/hooks/useAt'

const JumbotronLabel = () => {
  const at = useAt()

  const txt = at.mini
    ? 'Mini MBA'
    : at.professional
    ? 'Professional MBA'
    : at.industry
    ? 'Industry MBA'
    : at.profession
    ? 'Профессия'
    : ''
  return (
    <div className={stls.container}>
      <p className={stls.text}>
        {!at.profession && 'Программа'} {txt}
      </p>{' '}
    </div>
  )
}

export default JumbotronLabel
