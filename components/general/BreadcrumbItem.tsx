import Link from 'next/link'

const BreadcrumbItem = ({
  linkText,
  linkPath,
  itemIndex,
  listLength,
  userViewingProgramChunk,
}) => {
  let linkRef = null

  if (linkPath === '/programs') linkPath += '/mini/online'

  // a crutch for a bug where /programs path duplicates
  if (userViewingProgramChunk && itemIndex === 1) {
    linkRef =
      '/programs/' +
      linkText
        .split(' ')
        .filter((_, idx) => idx !== 1)
        .join('/')
        .toLowerCase()
  }

  const lastBreadcrumbItem = itemIndex === listLength - 1

  if (lastBreadcrumbItem)
    return (
      <li>
        <span>{linkText}</span>
      </li>
    )

  return (
    <li>
      <Link href={linkRef ?? linkPath}>
        <a>{linkText}</a>
      </Link>
    </li>
  )
}

export default BreadcrumbItem
