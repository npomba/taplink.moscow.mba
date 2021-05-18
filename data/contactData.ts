import lang from '@/data/translation/header'
import langCities from '@/data/translation/cities'

const ContactInfo = () => {
  return {
    tels: [
      {
        location: 'ru1',
        data: {
          href: 'tel:+7-800-500-27-47',
          val: '+7 (800) 500-27-47'
        }
      },
      {
        location: 'ru2',
        data: {
          href: 'tel:+7-495-149-00-20',
          val: '+7 (495) 149-00-20'
        }
      },
      {
        location: 'us',
        data: {
          href: 'tel:+1-631-694-27-84',
          val: '+1 (631) 694-27-84'
        }
      },
      {
        location: 'es',
        data: {
          href: 'tel:+34-93-273-64-90',
          val: '+34 (93) 273-64-90'
        }
      },
      {
        location: 'de',
        data: {
          href: 'tel:+49-30-436-23-98',
          val: '+49 (30) 436-23-98'
        }
      }
    ],
    addresses: [
      {
        location: 'ru',
        data: {
          city: langCities.moscow,
          street: {
            ru: lang.addressStreet.ru,
            en: lang.addressStreet.en
          }
        }
      },
      {
        location: 'us',
        data: {
          city: langCities.newYork,
          street: {
            ru: 'Loisaida Ave 55',
            en: 'Loisaida Ave 55'
          }
        }
      },
      {
        location: 'es',
        data: {
          city: langCities.barcelona,
          street: {
            ru: 'Carrer de Gongora 68',
            en: 'Carrer de Gongora 68'
          }
        }
      },
      {
        location: 'de',
        data: {
          city: langCities.berlin,
          street: {
            ru: 'Goltzstrabe 50',
            en: 'Goltzstrabe 50'
          }
        }
      }
    ],
    email: 'info@moscow.mba'
  }
}

export default ContactInfo
