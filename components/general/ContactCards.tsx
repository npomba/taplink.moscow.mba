import stls from '@/styles/modules/ContactCards.module.sass'
import ContactCard from '@/components/general/ContactCard'
import contactData from '@/data/contactData'
import setString from '@/components/hooks/setString'

const ContactCards = () => {
  const contactInfo = contactData()
  const ruNumbers = [contactInfo.tels[0].data, contactInfo.tels[1].data]
  return (
    <div className={stls.locations}>
      <div className={stls.col}>
        <ContactCard
          city={setString(contactInfo.addresses[0].data.city)}
          address={setString(contactInfo.addresses[0].data.street)}
          number={ruNumbers}
          email={contactInfo.email}
        />
        <ContactCard
          city={setString(contactInfo.addresses[2].data.city)}
          address={setString(contactInfo.addresses[2].data.street)}
          number={contactInfo.tels[3].data}
          email={contactInfo.email}
        />
      </div>
      <div className={stls.col}>
        <ContactCard
          city={setString(contactInfo.addresses[1].data.city)}
          address={setString(contactInfo.addresses[1].data.street)}
          number={contactInfo.tels[2].data}
          email={contactInfo.email}
        />
        <ContactCard
          city={setString(contactInfo.addresses[3].data.city)}
          address={setString(contactInfo.addresses[3].data.street)}
          number={contactInfo.tels[4].data}
          email={contactInfo.email}
        />
      </div>
    </div>
  )
}

export default ContactCards
