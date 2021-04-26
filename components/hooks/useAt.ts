import { useRouter } from 'next/router'

const useAt = () => {
  const { pathname } = useRouter()

  const getSplitedPath = pathname
    .split('/')
    .filter((item) => item !== '' && item !== '[url]')

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
  }

  const blended = () => {
    return getSplitedPath[2] === 'blended'
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
    getSplitedPath,
  }
}

export default useAt
