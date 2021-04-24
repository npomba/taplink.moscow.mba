import Link from 'next/link'

const PopulateWithPrograms = (data, type, format) => {
  data.map((item) => {
    if (item.mbaTypeOfProgram === type && item.mbaFormat === format) {
      return (
        <li>
          <Link
            href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
            locale='ru'
          >
            <a>{item.title}</a>
          </Link>
        </li>
      )
    } else {
      return <></>
    }
  })
}

export default PopulateWithPrograms
