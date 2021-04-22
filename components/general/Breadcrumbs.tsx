import { useRouter } from 'next/router'
import Breadcrumb from '@/components/general/Breadcrumb'

const Breadcrumbs = ({ pageTitle }) => {
  const { pathname } = useRouter()
  const splitedPath = pathname
    .split('/')
    .filter((item) => item !== '' && item !== '[id]')

  return (
    <div className='breadcrumbs-outer jumbotron-breadcrumbs'>
      <ul className='breadcrumbs'>
        {splitedPath.map((pathPart, idx) => (
          <Breadcrumb
            key={idx}
            pathPart={pathPart}
            splitedPath={splitedPath}
            idx={idx}
          />
        ))}
        <li>
          <span>{pageTitle}</span>
        </li>
      </ul>
    </div>
  )
}

export default Breadcrumbs
