import useAt from '@/components/hooks/useAt'

const JumbotronLabel = () => {
  const at = useAt()

  const txt = at.mini
    ? 'Mini MBA'
    : at.professional
    ? 'Professional MBA'
    : at.industry
    ? 'Industry MBA'
    : at.executive
    ? 'Executive MBA'
    : ''
  return (
    <span>
      {at.online
        ? `${txt} ONLINE`
        : at.blended
        ? `${txt} BLENDED`
        : at.executive
        ? txt
        : ''}
    </span>
  )
}

export default JumbotronLabel
