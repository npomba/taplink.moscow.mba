import { NextSeo } from 'next-seo'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'
import contactData from '@/data/contactData'

import stls from '@/styles/modules/LegalAboutPage.module.sass'

const about = ({ programs }) => {
  const contactInfo = contactData()

  return (
    <>
      <NextSeo
        title={'Нормативные документы - Moscow Business Academy'}
        description={
          'Лицензия на осуществление образовательной деятельности, приложение к...'
        }
        canonical={'https://moscow.mba/legal'}
      />

      <div className='container'>
        <h1 className={stls.h1}>Карточка организации</h1>
        <ul className={stls.list}>
          <li className={stls.listItem}>
            <p>
              <strong>Полное наименование:</strong> Автономная некоммерческая
              организация дополнительного профессионального образования
              «Московская бизнес академия»
            </p>
          </li>
          <li className={stls.listItem}>
            <p>
              <strong>Сокращенное наименование:</strong> АНО ДПО «МБА»
            </p>
          </li>
          <li className={stls.listItem}>
            <p>
              <strong>Ректор:</strong> Столяренко Владимир Витальевич
            </p>
          </li>
          <li className={stls.listItem}>
            <p>
              <strong>Юридический адрес:</strong> 115114, Москва, Дербеневская
              набережная 11
            </p>
          </li>
          <li className={stls.listItem}>
            <p>
              <strong>Фактический адрес:</strong> 115114, Москва, Дербеневская
              набережная 11
            </p>
          </li>
          <li className={stls.listItem}>
            <p>
              <strong>Телефон:</strong> {contactInfo.ru.tels[0].val}
            </p>
          </li>
          <li className={stls.listItem}>
            <p>
              <strong>Email:</strong> {contactInfo.ru.email.val}
            </p>
          </li>
          <li className={stls.listItem}>
            <p>
              <strong>ИНН:</strong> 9725034765
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default about
