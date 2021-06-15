import stls from '@/styles/modules/ContactCard.module.sass'
import SVGLocation from '@/components/svgs/SVGLocation'

const ContactCard = ({ city, address, numbers, email }) => {
  return (
    <div>
      <address className='vcard'>
        <span className='adr'>
          <h2 className={`locality ${stls.h2}`}>
            <SVGLocation large={true} />
            {city}
          </h2>
        </span>
        <ul className={stls.list}>
          <li>
            <span className='adr'>
              <span className='street-address'>{address}</span>
            </span>
          </li>
          <li>
            {numbers.map((number, idx) => (
              <a key={idx} href={number.href} className='tel'>
                {idx > 0 && ', '}
                {number.val}
              </a>
            ))}
          </li>
          <li>
            <span className='email'>{email}</span>
          </li>
        </ul>
      </address>
    </div>
  )
}

export default ContactCard
