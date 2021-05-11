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
    name: name || '',
    phone: phone || '',
    email: '',
    date: now.format('DD-MM-YYYY'),
    time: now.format('HH:mm:ss'),
    utc: now.format('Z'),
    root,
    path,
    ip,
    cityEn: locationData.city.names.en,
    cityRu: locationData.city.names.ru,
    countryCode: locationData.country.code,
    countryEn: locationData.country.names.en,
    countryRu: locationData.country.names.ru,
    continentCode: locationData.continent.code,
    continentEn: locationData.continent.names.en,
    continentRu: locationData.continent.names.ru,
    accuracyRadius: locationData.coordinates.accuracyRadius,
    latitude: locationData.coordinates.latitude,
    longitude: locationData.coordinates.longitude,
    timeZone: locationData.timeZone,
    postalCode: locationData.postalCode
  }

  const html = /* html */ `
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
      <title>Document</title>
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
          <tr>
            <td class="counterCell">1</td>
            <td>ID</td>
            <td>${data.id}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">2</td>
            <td>Дата</td>
            <td>${data.date}</td>
          </tr>
          <tr>
            <td class="counterCell">3</td>
            <td>Время</td>
            <td>${data.time}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">3</td>
            <td>UTC</td>
            <td>${data.utc}</td>
          </tr>
          <tr>
            <td class="counterCell">4</td>
            <td>Имя</td>
            <td>${data.name}</td>
          </tr>
          <tr class="active-row bgOnEven">
            <td class="counterCell">5</td>
            <td>Телефон</td>
            <td>${data.phone}</td>
          </tr>
          <tr>
            <td class="counterCell">6</td>
            <td>Почта</td>
            <td>${data.email}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">7</td>
            <td>Способ связи</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">8</td>
            <td>Лид сайт</td>
            <td>${data.root}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">9</td>
            <td>Лид страница</td>
            <td>${data.path}</td>
          </tr>
          <tr>
            <td class="counterCell">10</td>
            <td>IP</td>
            <td>${data.ip}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">10</td>
            <td>Город (en)</td>
            <td>${data.cityEn}</td>
          </tr>
          <tr>
            <td class="counterCell">10</td>
            <td>Город (ru)</td>
            <td>${data.cityRu}</td>
          </tr>

          <tr class="bgOnEven">
            <td class="counterCell">11</td>
            <td>Код страны</td>
            <td>${data.countryCode}</td>
          </tr>
          <tr>
            <td class="counterCell">11</td>
            <td>Страна (en)</td>
            <td>${data.countryEn}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">11</td>
            <td>Страна (ru)</td>
            <td>${data.countryRu}</td>
          </tr>
          <tr>
            <td class="counterCell">11</td>
            <td>Континент код</td>
            <td>${data.continentCode}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">11</td>
            <td>Континент (en)</td>
            <td>${data.continentEn}</td>
          </tr>
          <tr>
            <td class="counterCell">11</td>
            <td>Континент (ru)</td>
            <td>${data.continentRu}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">11</td>
            <td>Погрешность (м)</td>
            <td>${data.accuracyRadius}</td>
          </tr>
          <tr>
            <td class="counterCell">11</td>
            <td>Широта</td>
            <td>${data.latitude}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">11</td>
            <td>Долгота</td>
            <td>${data.longitude}</td>
          </tr>
          <tr>
            <td class="counterCell">11</td>
            <td>Часовой пояс</td>
            <td>${data.timeZone}</td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">11</td>
            <td>Зип код</td>
            <td>${data.postalCode}</td>
          </tr>
          <tr>
            <td class="counterCell">12</td>
            <td>Направление</td>
            <td></td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">13</td>
            <td>Университет</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">14</td>
            <td>Вопрос</td>
            <td></td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">15</td>
            <td>Google Client ID</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">16</td>
            <td>Yandex Metrics ID</td>
            <td></td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">17</td>
            <td>Устройство пользователя</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">18</td>
            <td>Источник рекламы</td>
            <td></td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">19</td>
            <td>Тип трафика</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">20</td>
            <td>Название РК</td>
            <td></td>
          </tr>
          <tr class="bgOnEven">
            <td class="counterCell">21</td>
            <td>Объявление</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">22</td>
            <td>Ключевое слово</td>
            <td></td>
          </tr>
          <tr class="bgOnEven bgBorderHighlight">
            <td class="counterCell">23</td>
            <td>Дубль</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  
  `

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
      subject: 'Новая заявка с moscow.mba', // Subject line
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
