import stls from '@/styles/modules/TwisterCornerBlock.module.sass'

const TwisterCornerBlock = ({ clr = 'red', title = '', listItems = [] }) => {
  if (title && listItems.length !== 0) {
    return (
      <div
        className={`${stls.sheet}  
        ${clr === 'dark' ? stls.dark : stls.red}`}
      >
        <h4 className={stls.title}>{title}</h4>
        <ul>
          {listItems.map((item, idx) => (
            <li
              key={idx}
              className={`${stls.listItem} ${
                listItems.length > 1 ? stls.many : ''
              }`}
            >
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TwisterCornerBlock
