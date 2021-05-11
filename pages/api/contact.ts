// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'
import { dev } from '@/config/index'

export default async (req, res) => {
  const { name, phone } = req.body

  const html = /* html */ `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body></body>
  </html>
  
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
  
        .styled-table tbody tr:nth-of-type(even) {
          background-color: #f3f3f3;
        }
  
        .styled-table tbody tr:last-of-type {
          border-bottom: thin solid #ff3535;
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
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">2</td>
            <td>Дата</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">3</td>
            <td>Время</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">4</td>
            <td>Имя</td>
            <td>${name ? name : '-'}</td>
          </tr>
          <tr class="active-row">
            <td class="counterCell">5</td>
            <td>Телефон</td>
            <td>${phone ? phone : '-'}</td>
          </tr>
          <tr>
            <td class="counterCell">6</td>
            <td>Почта</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">7</td>
            <td>Способ связи</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">8</td>
            <td>Лид сайт</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">9</td>
            <td>Лид страница</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">10</td>
            <td>Город</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">11</td>
            <td>Страна</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">12</td>
            <td>Направление</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">13</td>
            <td>Университет</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">14</td>
            <td>Вопрос</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">15</td>
            <td>Google Client ID</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">16</td>
            <td>Yandex Metrics ID</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">17</td>
            <td>Устройство пользователя</td>
            <td></td>
          </tr>
  
          <tr>
            <td class="counterCell">18</td>
            <td>Источник рекламы</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">19</td>
            <td>Тип трафика</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">20</td>
            <td>Название РК</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">21</td>
            <td>Объявление</td>
            <td></td>
          </tr>
          <tr>
            <td class="counterCell">22</td>
            <td>Ключевое слово</td>
            <td></td>
          </tr>
          <tr>
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
