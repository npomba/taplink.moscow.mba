import Breadcrumb from '@/components/general/Breadcrumb'
import useWhere from '@/components/hooks/useWhere'

const Breadcrumbs = ({ pageTitle }) => {
  const where = useWhere()
  const splitedPath = where.getSplitedPath

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
