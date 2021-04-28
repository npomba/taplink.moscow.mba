import stls from '@/styles/modules/Sticker.module.sass'

const Sticker = ({
  type = 'short',
  clr = 'red',
  title = '',
  listItems = [],
}) => {
  if (title && listItems.length !== 0) {
    return (
      <div
        className={`${stls.sheet}  
        ${clr === 'dark' ? stls.dark : stls.red} ${
          type === 'short' ? stls.short : stls.long
        }`}
      >
        <h4 className={stls.title}>{title}</h4>
        <div>
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
      </div>
    )
  }
}

export default Sticker
