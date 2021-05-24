// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'
import { dev } from '@/config/index'
import url from 'url'
import http from 'http'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { WebServiceClient } from '@maxmind/geoip2-node'

export default async (req, res) => {
  process.env.TZ = 'Europe/Moscow'
  // data from the client
  const { name, phone } = req.body

  const promocode = null

  // geoip2 init
  const geoip2 = new WebServiceClient('550199', process.env.GEO2_APIKEY, {
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
    promocode,
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
        tdKey: 'Промокод',
        tdVal: data.promocode
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

    const outputIPO = /* html */ `
    <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html style='width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;'>
 <head> 
  <meta charset='UTF-8'> 
  <meta content='width=device-width, initial-scale=1' name='viewport'> 
  <meta name='x-apple-disable-message-reformatting'> 
  <meta http-equiv='X-UA-Compatible' content='IE=edge'> 
  <meta content='telephone=no' name='format-detection'> 
  <title>".$_POST['flag']."</title> 
  <!--[if (mso 16)]>
    <style type='text/css'>
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <style>
@media only screen and (max-width: 600px) {p, ul li, ol li, a { font-size: 16px } h1 { font-size: 30px; text-align: center } h2 { font-size: 26px; text-align: center } h3 { font-size: 20px; text-align: center } h1 a { font-size: 30px } h2 a { font-size: 26px } h3 a { font-size: 20px } .es-menu td a { font-size: 16px !important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size: 16px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size: 16 px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size: 12px } *[class='gmail-fix'] { display: none !important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align: center !important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align: right !important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align: left !important } .es-m-txt-r a img, .es-m-txt-c a img, .es-m-txt-l a img { display: inline !important } .es-button-border { display: block !important } .es-button { font-size: 20px !important; display: block !important; border-width: 10px 0px 10px 0px !important } .es-btn-fw { border-width: 10px 0px !important; text-align: center !important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width: 100% !important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width: 100% !important; max-width: 600px !important } .es-adapt-td { display: block !important; width: 100% !important } .adapt-img { width: 100% !important; height: auto !important } .es-m-p0 { padding: 0px !important } .es-m-p0r { padding-right: 0px !important } .es-m-p0l { padding-left: 0px !important } .es-m-p0t { padding-top: 0px !important } .es-m-p0b { padding-bottom: 0 !important } .es-m-p20b { padding-bottom: 20px !important } .es-hidden { display: none !important } table.es-table-not-adapt, .esd-block-html table { width: auto !important } table.es-social { display: inline-block !important } table.es-social td { display: inline-block !important } }

</style> 
  <style>

#outlook a {
	padding: 0;
}
.ExternalClass {
	width: 100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
	line-height: 100%;
}
.es-button {
	mso-style-priority: 100 !important;
	text-decoration: none !important;
}
a[x-apple-data-detectors] {
	color: inherit !important;
	text-decoration: none !important;
	font-size: inherit !important;
	font-family: inherit !important;
	font-weight: inherit !important;
	line-height: inherit !important;
}
@-ms-viewport {
	width: device-width;
}
</style> 
 </head> 
 <body style='width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;'> 
  <div class='es-wrapper-color' style='background-color:#F6F6F6;'> 
   <!--[if gte mso 9]>
    <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
        <v:fill type='tile' src='' color='#f6f6f6'></v:fill>
    </v:background>
<![endif]--> 
   <table cellpadding='0' cellspacing='0' class='es-wrapper' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;'> 
    <tbody> 
     <tr style='border-collapse:collapse;'> 
      <td valign='top' style='padding:0;Margin:0;'> 
       <table cellpadding='0' cellspacing='0' class='es-header' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table class='es-header-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' style='padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='560' align='center' valign='top' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='center' style='padding:0;Margin:0;'>  </td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table bgcolor='#ffffff' class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' style='padding:20px;Margin:0;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='560' align='center' valign='top' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='left' style='padding:0;Margin:0;padding-bottom:20px;'> <a target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#1376C8;'> <img class='adapt-img' src='https://ipo.msk.ru/image/catalog/logotip-ipo-top-mail.jpg' alt='' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;' width='300'> </a> </td> 
                     </tr> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='left' style='padding:0;Margin:0;padding-bottom:15px;'><h2 style='Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#333333;'>Вам оставили следующую информацию:</h2></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' style='padding:0;Margin:0;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='600' align='center' valign='top' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='center' height='40' bgcolor='#f6f6f6' style='padding:0;Margin:0;'> </td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table bgcolor='#ffffff' class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' style='padding:20px;Margin:0;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='560' align='center' valign='top' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='left' style='padding:0;Margin:0;'>
					  		<p>Имя: ${data.name}</p>
					<p>E-mail: ${''}</p>
					<p>Телефон: ${data.phone}</p>
					<p><b>Комментарий:</b> ${''}</p>
					<b><p>Дата и время заявки: ${data.date} в ${data.time}</p></b>
					<b><p>Город: ${data.cityRu}</p></b>
					<b><p>Страна: ${data.countryRu}</p></b>
					  <b><p>Страница с которой отправлена заявка: ${data.root}</p></b>
            <b><p>UTM метка: ${''}</p></b>
             <b><p>Устройство: ${''}<p></b>
            <b><p>UTM ссылка перехода: ${''}</p></b>
            <b><p>Новая UTM ссылка перехода: ${''}</p></b>
            <b><p>Промокод: ${''}</p></b>
            <b><p>Заявка id: ${''}</p></b>
            <b><p>Вопрос: ${''}</p></b>
            <b><p>Способ связи: ${''}</p></b>
            <b><p>Личная страница ВК: ${''}</p></b>
            <b><p>Уч.план: ${''}</p></b>
            <b><p>Google Client ID: ${''}</p></b>
            <b><p>Yandex Metrics ID: ${''}</p></b>
            <b><p>utm_source: ${''}</p></b>
            <b><p>utm_medium: ${''}</p></b>
            <b><p>utm_campaign: ${''}</p></b>
            <b><p>utm_content: ${''}</p></b>
            <b><p>utm_term: ${''}</p></b>
            <b><p>utm_worker: ${''}</p></b>
					 </tr> 
                    </tbody> 
                   </table> </td>
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' style='padding:0;Margin:0;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='600' align='center' valign='top' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='center' height='15' style='padding:0;Margin:0;'> </td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' style='padding:0;Margin:0;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='600' align='center' valign='top' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='center' style='padding:0;Margin:0;display:none;'></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' style='padding:0;Margin:0;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='600' align='center' valign='top' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='center' height='40' bgcolor='#f6f6f6' style='padding:0;Margin:0;'> </td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <table cellpadding='0' cellspacing='0' class='es-footer' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table class='es-footer-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' bgcolor='#ffffff' style='Margin:0;padding-top:15px;padding-bottom:15px;padding-right:20px;padding-left:40px;background-color:#FFFFFF;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='540' class='es-m-p0r' valign='top' align='center' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='center' style='padding:0;Margin:0;'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:150%;color:#333333;'>Институт профессионального образования<br>Лицензия на образовательную деятельность № 038092</p></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
        <tbody> 
         <tr style='border-collapse:collapse;'> 
          <td align='center' style='padding:0;Margin:0;'> 
           <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;'> 
            <tbody> 
             <tr style='border-collapse:collapse;'> 
              <td align='left' style='Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;'> 
               <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                <tbody> 
                 <tr style='border-collapse:collapse;'> 
                  <td width='560' align='center' valign='top' style='padding:0;Margin:0;'> 
                   <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                    <tbody> 
                     <tr style='border-collapse:collapse;'> 
                      <td align='center' style='padding:0;Margin:0;display:none;'></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> </td> 
     </tr> 
    </tbody> 
   </table> 
  </div>  
 </body>
</html>
    `

    return outputIPO
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
      from: 'info@ipo.msk.ru',
      to: `${
        dev
          ? 'nova@ipo.msk.ru, novailoveyou3@gmail.com'
          : 'marketing@rosucheba.ru, info@ipo.msk.ru, iconelp@yandex.ru'
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
