import stls from '@/styles/modules/ContactCards.module.sass'
import ContactCard from '@/components/general/ContactCard'
import contactData from '@/data/contactData'
import setString from '@/components/hooks/setString'

const ContactCards = () => {
  const contactInfo = contactData()
  return (
    <div className={stls.locations}>
      <div className={stls.col}>
        <ContactCard
          city={setString(contactInfo.ru.address.city)}
          address={setString(contactInfo.ru.address.street)}
          numbers={contactInfo.ru.tels}
          email={contactInfo.ru.email.val}
        />
        <ContactCard
          city={setString(contactInfo.uz.address.city)}
          address={setString(contactInfo.uz.address.street)}
          numbers={contactInfo.uz.tels}
          email={contactInfo.uz.email.val}
        />
      </div>
      <div className={stls.col}>
        <ContactCard
          city={setString(contactInfo.kz[0].address.city)}
          address={setString(contactInfo.kz[0].address.street)}
          numbers={contactInfo.kz[0].tels}
          email={contactInfo.kz[0].email.val}
        />
        <ContactCard
          city={setString(contactInfo.kz[1].address.city)}
          address={setString(contactInfo.kz[1].address.street)}
          numbers={contactInfo.kz[1].tels}
          email={contactInfo.kz[1].email.val}
        />
      </div>
      <div className={stls.col}>
        <ContactCard
          city={setString(contactInfo.us.address.city)}
          address={setString(contactInfo.us.address.street)}
          numbers={contactInfo.us.tels}
          email={contactInfo.us.email.val}
        />
        <ContactCard
          city={setString(contactInfo.de.address.city)}
          address={setString(contactInfo.de.address.street)}
          numbers={contactInfo.de.tels}
          email={contactInfo.de.email.val}
        />
      </div>
    </div>
  )
}

export default ContactCards
