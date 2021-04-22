import { useRouter } from 'next/router'

const JumbotronLabel = () => {
  const { pathname } = useRouter()
  const typeOfProgram = pathname.split('/')[2]
  const format = pathname.split('/')[3]

  const txt =
    typeOfProgram === 'mini'
      ? 'Mini MBA'
      : typeOfProgram === 'professional'
      ? 'Professional MBA'
      : typeOfProgram === 'industry'
      ? 'Industry MBA'
      : ''
  return (
    <span>
      {format === 'online'
        ? `${txt} ONLINE`
        : format === 'blended'
        ? `${txt} BLENDED`
        : ''}
    </span>
  )
}

export default JumbotronLabel
