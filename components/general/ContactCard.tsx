import stls from '@/styles/modules/ContactCard.module.sass'
import SVGLocation from '@/components/svgs/SVGLocation'

const ContactCard = ({ city, address, number, email }) => {
  return (
    <div>
      <address className='vcard'>
        <span className='adr'>
          <h2 className={`locality ${stls.h2}`}>
            <SVGLocation />
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
            {number[0] && (
              <>
                <a href={number[0].href} className='tel'>
                  {number[0].val}
                </a>
                ,{' '}
                <a href={number[1].href} className='tel'>
                  {number[1].val}
                </a>
              </>
            )}
            {!number[0] && (
              <>
                <a className='tel'>{number.val}</a>
              </>
            )}
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
