import { useRouter } from 'next/router'

const useAt = () => {
  const { pathname, asPath } = useRouter()

  const getSplitedPath = pathname
    .split('/')
    .filter((item) => item !== '' && item !== '[url]')

  const getProgramTitle = asPath.split('/')[4]

  const index = () => {
    return getSplitedPath[0] === undefined
  }

  const about = () => {
    return getSplitedPath[0] === 'about'
  }

  const teachers = () => {
    return getSplitedPath[0] === 'teachers'
  }

  const webinars = () => {
    return getSplitedPath[0] === 'webinars'
  }

  const articles = () => {
    return getSplitedPath[0] === 'articles'
  }

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
    // return (
    //   getSplitedPath.filter((pathPart) => pathPart === 'online')[0] === 'online'
    // )
  }

  const blended = () => {
    return getSplitedPath[2] === 'blended'
  }

  const programChunk = () => {
    return getProgramTitle ? true : false
  }

  return {
    index: index(),
    about: about(),
    teachers: teachers(),
    mini: mini(),
    professional: professional(),
    industry: industry(),
    online: online(),
    blended: blended(),
    webinars: webinars(),
    articles: articles(),
    programChunk: programChunk(),
    getSplitedPath,
  }
}

export default useAt
