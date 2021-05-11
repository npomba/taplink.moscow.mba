// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'
import { dev } from '@/config/index'
import url from 'url'
import http from 'http'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { WebServiceClient } from '@maxmind/geoip2-node'

export default async (req, res) => {
  // data from the client
  const { name, phone } = req.body

  // geoip2 init
  const geoip2 = new WebServiceClient('550199', 'FYEUxrplTADCW39V', {
    host: 'geolite.info'
  })

  // moment init
  const now = moment()

  // get protocol
  const protocol = req.headers['x-forwarded-proto']

  // get root path
  const root = protocol + '://' + req.headers.host

  // get full client path
  const path = ''

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
    id: uuidv4(),
    date: now.format('DD-MM-YYYY'),
    time: now.format('HH:mm:ss'),
    utc: now.format('Z'),
    name: name || '',
    phone: phone || '',
    email: '',
    contactWay: '',
    root,
    path,
    ip,
    cityEn: locationData && locationData.city.names.en,
    cityRu: locationData && locationData.city.names.ru,
    countryCode: locationData && locationData.country.code,
    countryEn: locationData && locationData.country.names.en,
    countryRu: locationData && locationData.country.names.ru,
    continentCode: locationData && locationData.continent.code,
    continentEn: locationData && locationData.continent.names.en,
    continentRu: locationData && locationData.continent.names.ru,
    accuracyRadius: locationData && locationData.coordinates.accuracyRadius,
    latitude: locationData && locationData.coordinates.latitude,
    longitude: locationData && locationData.coordinates.longitude,
    timeZone: locationData && locationData.timeZone,
    postalCode: locationData && locationData.postalCode
  }

  const subject = 'Новая заявка с moscow.mba'

  const createEmailBody = () => {
    const createTr = (item, idx) => {
      const output = /* html */ `
        <tr class="${idx % 2 === 0 ? 'bgOnEven' : ''} ${
        item.trKey === 'Телефон' ? 'active-row' : ''
      }">
          <td class="counterCell">${idx}</td>
          <td>${item.tdKey}</td>
          <td>${item.tdVal}</td>
        </tr>
      `
      return output
    }

    const tbodyTrs = [
      {
        tdKey: 'ID',
        tdVal: data.id
      },
      {
        tdKey: 'Дата',
        tdVal: data.date
      },
      {
        tdKey: 'Время',
        tdVal: data.time
      },
      {
        tdKey: 'UTC',
        tdVal: data.utc
      },
      {
        tdKey: 'Имя',
        tdVal: data.name
      },
      {
        tdKey: 'Телефон',
        tdVal: data.phone
      },
      {
        tdKey: 'Почта',
        tdVal: data.email
      },
      {
        tdKey: 'Способ связи',
        tdVal: data.contactWay
      },
      {
        tdKey: 'Лид сайт',
        tdVal: data.root
      },
      {
        tdKey: 'Лид страница',
        tdVal: data.path
      },
      {
        tdKey: 'IP',
        tdVal: data.ip
      },
      {
        tdKey: 'Город (en)',
        tdVal: data.cityEn
      },
      {
        tdKey: 'Город (ru)',
        tdVal: data.cityRu
      },
      {
        tdKey: 'Код страны',
        tdVal: data.countryCode
      },
      {
        tdKey: 'Страна (en)',
        tdVal: data.countryEn
      },
      {
        tdKey: 'Страна (ru)',
        tdVal: data.countryRu
      },
      {
        tdKey: 'Континент код',
        tdVal: data.continentCode
      },
      {
        tdKey: 'Континент (en)',
        tdVal: data.continentEn
      },
      {
        tdKey: 'Континент (ru)',
        tdVal: data.continentRu
      },
      {
        tdKey: 'Погрешность (м)',
        tdVal: data.accuracyRadius
      },
      {
        tdKey: 'Широта',
        tdVal: data.latitude
      },
      {
        tdKey: 'Долгота',
        tdVal: data.longitude
      },
      {
        tdKey: 'Часовой пояс',
        tdVal: data.timeZone
      },
      {
        tdKey: 'Зип код',
        tdVal: data.postalCode
      },
      {
        tdKey: 'Направление',
        tdVal: ''
      },
      {
        tdKey: 'Университет',
        tdVal: ''
      },
      {
        tdKey: 'Вопрос',
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
        tdVal: ''
      },
      {
        tdKey: 'Тип трафика',
        tdVal: ''
      },
      {
        tdKey: 'Название РК',
        tdVal: ''
      },
      {
        tdKey: 'Объявление',
        tdVal: ''
      },
      {
        tdKey: 'Ключевое слово',
        tdVal: ''
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

  console.log(html)

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
          : 'marketing@rosucheba.ru'
      }`,
      subject, // Subject line
      text: `
      ${name}, \n
      ${phone}
      `, // plain text body
      html
    })

    console.log('Message sent: %s', emailRes.messageId)
    res.status(200).json({ status: 200, msg: 'Email is sent' })
  } catch (err) {
    res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })

    console.error(err)
  }
}
