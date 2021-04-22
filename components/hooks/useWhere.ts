import { useRouter } from 'next/router'

const useWhere = () => {
  const { pathname } = useRouter()

  const getSplitedPath = pathname
    .split('/')
    .filter((item) => item !== '' && item !== '[id]')

  const mini = () => {
    return getSplitedPath[1] === 'mini'
  }

  const professional = () => {
    return getSplitedPath[1] === 'professional'
  }

  const industry = () => {
    return getSplitedPath[1] === 'industry'
  }

  const online = () => {
    return getSplitedPath[2] === 'online'
  }

  const blended = () => {
    return getSplitedPath[2] === 'blended'
  }

  return {
    mini: mini(),
    professional: professional(),
    industry: industry(),
    online: online(),
    blended: blended(),
    getSplitedPath,
  }
}

export default useWhere
