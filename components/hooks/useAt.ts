import { useRouter } from 'next/router'

const useAt = () => {
  const { pathname, asPath } = useRouter()

  const getSplitedPath = pathname
    .split('/')
    .filter(item => item !== '' && item !== '[url]')

  const getProgramTitle = asPath.split('/')[3]

  const index = () => {
    return getSplitedPath[0] === undefined
  }

  const mini = () => {
    return getSplitedPath[0] === 'mini'
  }

  const professional = () => {
    return getSplitedPath[0] === 'professional'
  }

  const industry = () => {
    return getSplitedPath[0] === 'industry'
  }

  const profession = () => {
    return getSplitedPath[0] === 'profession'
  }

  const online = () => {
    return getSplitedPath[1] === 'online'
  }

  const blended = () => {
    return getSplitedPath[1] === 'blended'
  }

  const programChunk = () => {
    return getProgramTitle ? true : false
  }

  return {
    mini: mini(),
    professional: professional(),
    industry: industry(),
    profession: profession(),
    online: online(),
    blended: blended(),
    programChunk: programChunk(),
    getSplitedPath
  }
}

export default useAt
