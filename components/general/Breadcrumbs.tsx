import Breadcrumb from '@/components/general/Breadcrumb'
import useAt from '@/components/hooks/useAt'

const Breadcrumbs = ({ pageTitle }) => {
  const at = useAt()
  const splitedPath = at.getSplitedPath

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
