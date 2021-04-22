import Link from 'next/link'
import useWhere from '@/components/hooks/useWhere'

const BreadcrumbsHandler = ({ pathPart, splitedPath, idx }) => {
  const where = useWhere()
  let linkText = null
  const linkUrl = '/' + splitedPath.join('/').split(pathPart)[0] + pathPart
  const typeOfProgram = where.mini
    ? 'Mini MBA'
    : where.professional
    ? 'Professional MBA'
    : where.industry
    ? 'Industry MBA'
    : ''

  // About and index are not here because they're currently the only onces translated
  // Onces I translate more pages, I'd replace just setting the text with setString and add about & index pages here

  // Programs
  if (pathPart === 'programs') {
    linkText = 'Программы'
  }

  if (pathPart === 'executive') {
    linkText = 'Executive'
  }

  // if (pathPart === 'mini') {
  //   linkText = 'Mini MBA'
  // }

  // if (pathPart === 'professional') {
  //   linkText = 'Professional MBA'
  // }

  // if (pathPart === 'industry') {
  //   linkText = 'Industry MBA'
  // }

  if (pathPart === 'online') {
    linkText = `${typeOfProgram} ONLINE`
  }

  if (pathPart === 'blended') {
    linkText = `${typeOfProgram} BLENDED`
  }
  // /Programs

  // articles
  if (pathPart === 'articles') {
    linkText = 'Новости'
  }
  // /articles

  // webinars
  if (pathPart === 'webinars') {
    linkText = 'Вебинары'
  }
  // /webinars

  // teachers
  if (pathPart === 'teachers') {
    linkText = 'Преподаватели'
  }
  // /teachers

  return (
    <>
      {idx !== 1 &&
        pathPart !== 'mini' &&
        pathPart !== 'professional' &&
        pathPart !== 'industry' && (
          <li>
            <Link href={linkUrl}>
              <a>{linkText}</a>
            </Link>
          </li>
        )}
    </>
  )
}

export default BreadcrumbsHandler
