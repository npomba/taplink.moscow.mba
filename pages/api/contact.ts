// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'
import { dev } from '@/config/index'
import url from 'url'
import http from 'http'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { WebServiceClient } from '@maxmind/geoip2-node'

const contact = async (req, res) => {
  process.env.TZ = 'Europe/Moscow'
  // data from the client
  let {
    name,
    phone,
    email,
    vk,
    contactWay,
    contactMethod,
    question,
    programTitle,
    leadPage,
    utms,
    referer
  } = req.body

  if (name?.includes('@')) {
    email = name
    name = ''
  }

  const promocode = null

  // geoip2 init
  const geoip2 = new WebServiceClient('550199', process.env.GEO2_APIKEY, {
    host: 'geolite.info'
  })

  // moment init
  const now = moment()

  // get protocol
  const protocol = req.headers['x-forwarded-proto']

  // get referer
  // const referer = req.headers['referer']

  // get root path
  const root = protocol + '://' + req.headers.host

  // get ip
  const ip =
    req.headers['x-forwarded-for'] ||
    // req.socket.remoteAddress ||
    req.connection.remoteAddress ||
    null

  const getUserLocation = async () => {
    try {
      const res = await geoip2.city(ip.toString())
      const output = {
        continent: {
          code: res.continent.code,
          names: {
            ru: res.continent.names.ru,
            en: res.continent.names.en
          }
        },
        country: {
          code: res.country.isoCode,
          names: {
            ru: res.country.names.ru,
            en: res.country.names.en
          }
        },
        city: {
          names: {
            en: res.city.names.en,
            ru: res.city.names.ru
          }
        },
        coordinates: {
          accuracyRadius: res.location.accuracyRadius,
          latitude: res.location.latitude,
          longitude: res.location.longitude
        },
        timeZone: res.location.timeZone,
        postalCode: res.postal.code
      }
      return output
    } catch (err) {
      console.log(err)
      return null
    }
  }

  const locationData = await getUserLocation()

  const data = {
    id: uuidv4() || null,
    date: now.format('DD-MM-YYYY') || null,
    time: now.format('HH:mm:ss') || null,
    utc: now.format('Z') || null,
    name: name || null,
    phone: phone || '',
    email: email || '',
    vk: vk || null,
    promocode: promocode || null,
    contactWay: contactWay || null,
    contactMethod: contactMethod || null,
    question: question || null,
    root: root || null,
    leadPage: root + leadPage || null,
    ip: ip || null,
    cityEn: (locationData && locationData.city.names.en) || null,
    cityRu: (locationData && locationData.city.names.ru) || null,
    countryCode: (locationData && locationData.country.code) || null,
    countryEn: (locationData && locationData.country.names.en) || null,
    countryRu: (locationData && locationData.country.names.ru) || null,
    continentCode: (locationData && locationData.continent.code) || null,
    continentEn: (locationData && locationData.continent.names.en) || null,
    continentRu: (locationData && locationData.continent.names.ru) || null,
    accuracyRadius:
      (locationData && locationData.coordinates.accuracyRadius) || null,
    latitude: (locationData && locationData.coordinates.latitude) || null,
    longitude: (locationData && locationData.coordinates.longitude) || null,
    timeZone: (locationData && locationData.timeZone) || null,
    postalCode: (locationData && locationData.postalCode) || null,
    programTitle: programTitle || null,
    utmSource: (utms && utms.utm_source) || referer || null,
    utmMedium: (utms && utms.utm_medium) || null,
    utmCampaign: (utms && utms.utm_campaign) || null,
    utmContent: (utms && utms.utm_content) || null,
    utmTerm: (utms && utms.utm_term) || null
  }

  // const createLeadBackApiRes = await createLeadBackApi({ data })

  // console.log(createLeadBackApiRes)

  const subject = 'Новая заявка с taplink.moscow.mba'

  const createEmailBody = () => {
    const createTr = (item, idx) => {
      const output = /* html */ `
        <tr id='tr-item-${idx}' class="${idx % 2 === 0 && 'bgOnEven'} ${
        item.tdKey === 'Телефон' && 'active-row'
      } ${!(idx + 1) && 'bgBorderHighlight'}">
          <td class="counterCell">${idx + 1}</td>
          <td>${item.tdKey}</td>
          <td>${item.tdVal}</td>
        </tr>
      `
      return output
    }

    const tbodyTrs = [
      {
        tdKey: 'ID',
        tdVal: data.id || ''
      },
      {
        tdKey: 'Дата',
        tdVal: data.date || ''
      },
      {
        tdKey: 'Время',
        tdVal: data.time || ''
      },
      {
        tdKey: 'UTC',
        tdVal: data.utc || ''
      },
      {
        tdKey: 'Имя',
        tdVal: data.name || ''
      },
      {
        tdKey: 'Телефон',
        tdVal: data.phone || ''
      },
      {
        tdKey: 'Почта',
        tdVal: data.email || ''
      },
      {
        tdKey: 'ВКонтакте',
        tdVal: data.vk || ''
      },
      {
        tdKey: 'Промокод',
        tdVal: data.promocode || ''
      },
      {
        tdKey: 'Способ связи',
        tdVal: data.contactWay || ''
      },
      {
        tdKey: 'Как связаться',
        tdVal: data.contactMethod || ''
      },
      {
        tdKey: 'Вопрос',
        tdVal: data.question || ''
      },
      {
        tdKey: 'Лид сайт',
        tdVal: data.root || ''
      },
      {
        tdKey: 'Лид страница',
        tdVal: data.leadPage || ''
      },
      {
        tdKey: 'IP',
        tdVal: data.ip || ''
      },
      {
        tdKey: 'Город (en)',
        tdVal: data.cityEn || ''
      },
      {
        tdKey: 'Город (ru)',
        tdVal: data.cityRu || ''
      },
      {
        tdKey: 'Код страны',
        tdVal: data.countryCode || ''
      },
      {
        tdKey: 'Страна (en)',
        tdVal: data.countryEn || ''
      },
      {
        tdKey: 'Страна (ru)',
        tdVal: data.countryRu || ''
      },
      {
        tdKey: 'Континент код',
        tdVal: data.continentCode || ''
      },
      {
        tdKey: 'Континент (en)',
        tdVal: data.continentEn || ''
      },
      {
        tdKey: 'Континент (ru)',
        tdVal: data.continentRu || ''
      },
      {
        tdKey: 'Погрешность (м)',
        tdVal: data.accuracyRadius || ''
      },
      {
        tdKey: 'Широта',
        tdVal: data.latitude || ''
      },
      {
        tdKey: 'Долгота',
        tdVal: data.longitude || ''
      },
      {
        tdKey: 'Часовой пояс',
        tdVal: data.timeZone || ''
      },
      {
        tdKey: 'Зип код',
        tdVal: data.postalCode || ''
      },
      {
        tdKey: 'Направление',
        tdVal: data.programTitle || ''
      },
      {
        tdKey: 'Университет',
        tdVal: ''
      },
      {
        tdKey: 'Google Client ID',
        tdVal: ''
      },
      {
        tdKey: 'Yandex Metrics ID',
        tdVal: ''
      },
      {
        tdKey: 'Устройство пользователя',
        tdVal: ''
      },
      {
        tdKey: 'Источник рекламы',
        tdVal: data.utmSource || ''
      },
      {
        tdKey: 'Тип трафика',
        tdVal: data.utmMedium || ''
      },
      {
        tdKey: 'Название РК',
        tdVal: data.utmCampaign || ''
      },
      {
        tdKey: 'Объявление',
        tdVal: data.utmContent || ''
      },
      {
        tdKey: 'Ключевое слово',
        tdVal: data.utmTerm || ''
      },
      {
        tdKey: 'Дубль',
        tdVal: ''
      }
    ]

    const output = /* html */ `
      <!DOCTYPE html>
      <html lang="ru">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
          <style>
            .styled-table {
              border-collapse: collapse;
              margin: 25px 0;
              font-size: 0.9em;
              font-family: sans-serif;
              min-width: 400px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
              counter-reset: tableCount;
            }
            .counterCell::before {
              content: counter(tableCount);
              counter-increment: tableCount;
            }
            .styled-table thead tr {
              background-color: #ff3535;
              color: #ffffff;
              text-align: left;
            }
            .styled-table th,
            .styled-table td {
              padding: 12px 15px;
            }
            .styled-table tbody tr {
              border-bottom: thin solid #dddddd;
            }
      
            .styled-table tbody tr:nth-of-type(even),
            .bgOnEven {
              background-color: #f3f3f3;
            }
      
            .styled-table tbody tr:last-of-type,
            .bgBorderHighlight {
              border-bottom: 2px solid #ff3535;
            }
            .styled-table tbody tr.active-row {
              font-weight: bold;
              color: #ff3535;
            }
          </style>
          <title>${subject}</title>
        </head>
        <body>
          <h1>${subject}</h1>
          <p>🎉🥳🎉 Ура! Новая заявка с ${root}! 🎉🥳🎉</p>
          <table class="styled-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Ключ</th>
                <th>Значение</th>
              </tr>
            </thead>
            <tbody>
              ${tbodyTrs.map(createTr).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `
    return output
  }

  const html = createEmailBody()

  // const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    logger: true,
    debug: true,
    tls: {
      rejectUnAuthorized: true
    },
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASS
    }
  })

  try {
    const emailRes = await transporter.sendMail({
      from: 'lead@moscow.mba',
      to: `${
        dev
          ? 'nova@ipo.msk.ru, novailoveyou3@gmail.com'
          : 'mba.academy@yandex.ru, leads@moscow.mba'
      }`,
      subject, // Subject line
      text: `
      ${name}, \n
      ${phone},
      ${email}
      `, // plain text body
      html
    })

    // console.log('Message sent: %s', emailRes.messageId)
    // res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400')
    res.status(200).json({ status: 200, msg: 'Email is sent' })
  } catch (err) {
    res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })
    console.error(err)
  }
}

export default contact
