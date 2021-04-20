// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, phone } = req.body

  // const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: 'temp@testmba.ipo.msk.ru',
      to: 'nova@ipo.msk.ru, novailoveyou3@gmail.com', // list of receivers
      subject: 'Новая заявка с moscow.mba', // Subject line
      text: `${name}, ${phone}`, // plain text body
      html: `${name}, ${phone}`, // html body
    })

    console.log('Message sent: %s', emailRes.messageId)
    res.status(200).json({ status: 200, msg: 'Email is sent' })
  } catch (err) {
    res.status(500).json({ status: 500, msg: 'Unexpected server error' })

    console.log(err)
  }
}
