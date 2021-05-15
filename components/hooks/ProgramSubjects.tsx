import useAt from '@/components/hooks/useAt'

const ProgramSubjects = ({ sum = false, type = '', subjects = '' }) => {
  const at = useAt()

  if (type === 'mini') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '15'
          : subjects === 'specialty' && sum === false
          ? '5'
          : '20'}
      </span>
    )
  }
  if (type === 'professional') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '37'
          : subjects === 'specialty' && sum === false
          ? '10'
          : '47'}
      </span>
    )
  }
  if (type === 'industry') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '37'
          : subjects === 'specialty' && sum === false
          ? '10'
          : '47'}
      </span>
    )
  }

  if (type === 'executive') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '37'
          : subjects === 'specialty' && sum === false
          ? '10'
          : '47'}
      </span>
    )
  }

  if (!type) {
    return (
      <span>
        {at.mini && subjects === 'base' && sum === false
          ? '15'
          : at.mini && subjects === 'specialty' && sum === false
          ? '5'
          : at.mini && '20'}

        {at.professional && subjects === 'base' && sum === false
          ? '37'
          : at.professional && subjects === 'specialty' && sum === false
          ? '10'
          : at.professional && '47'}

        {at.industry && subjects === 'base' && sum === false
          ? '37'
          : at.industry && subjects === 'specialty' && sum === false
          ? '10'
          : at.industry && '47'}

        {at.executive && subjects === 'base' && sum === false
          ? '37'
          : at.executive && subjects === 'specialty' && sum === false
          ? '10'
          : at.executive && '47'}
      </span>
    )
  }
}

export default ProgramSubjects
