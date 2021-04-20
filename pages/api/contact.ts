// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, phone } = req.body

  // const testAccount = await nodemailer.createTestAccount()

  //   SMTP_HOST=smtp.jino.ru
  // SMTP_LOGIN=temp@testmba.ipo.msk.ru
  // SMTP_PASS=YGgaaz9ruAzKz6Y
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    // host: 'smtp.jino.ru',
    // host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    logger: true,
    debug: true,
    tls: {
      rejectUnAuthorized: true,
    },
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASS,
      // user: 'temp@testmba.ipo.msk.ru',
      // pass: 'YGgaaz9ruAzKz6Y',
      // user: testAccount.user,
      // pass: testAccount.pass,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: 'temp@testmba.ipo.msk.ru',
      to: 'nova@ipo.msk.ru, novailoveyou3@gmail.com, marketing@rosucheba.ru', // list of receivers
      subject: 'Новая заявка с moscow.mba', // Subject line
      text: `${name}, ${phone}`, // plain text body
      html: `${name}, ${phone}`, // html body
    })

    console.log('Message sent: %s', emailRes.messageId)
    res.status(200).json({ status: 200, msg: 'Email is sent' })
  } catch (err) {
    res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })

    console.error(err)
  }
}
