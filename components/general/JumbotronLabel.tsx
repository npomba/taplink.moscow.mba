import useAt from '@/components/hooks/useAt'

const JumbotronLabel = () => {
  const at = useAt()

  const txt = at.mini
    ? 'Mini MBA'
    : at.professional
    ? 'Professional MBA'
    : at.industry
    ? 'Industry MBA'
    : ''
  return (
    <span>
      {at.online ? `${txt} ONLINE` : at.blended ? `${txt} BLENDED` : ''}
    </span>
  )
}

export default JumbotronLabel
