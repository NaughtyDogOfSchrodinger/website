// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import * as nodemailer from 'nodemailer';
import process from 'process';

import {FormData} from '../../components/Sections/Contact/ContactForm';

if (!process.env.MY_MAIL) {
  throw new Error('Missing Environment Variable MY_MAIL');
}
if (!process.env.MAILE_CODE) {
  throw new Error('Missing Environment Variable MAILE_CODE');
}
if (!process.env.TO_MAIL) {
  throw new Error('Missing Environment Variable TO_MAIL');
}
const template = (data: FormData) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>官网留言</title>
  <meta charset="utf-8">
</head>
<body>
<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; background-color: #f5f5f5; padding: 20px;">
  <p>尊敬的管理员</p>
  <p>有用户自官网留言啦</p>
  <p>姓名：${data.name}</p>
  <p>电话：${data.phone}</p>
  <p>邮箱：${data.email}</p>
  <p>公司：${data.company}</p>
  <p>留言：${data.message}</p>
</div>
<div>
</div>
</body>
</html>`;
};

export const send = (email: string, data: FormData) => {
  return new Promise((resolve, reject) => {
    const options = {
      from: `${myEmail}`,
      to: email,
      subject: '官网留言',
      html: template(data),
    };
    mailTransport.sendMail(options, function (err: unknown) {
      if (err) {
        console.log('send email error->', err);
        reject('邮箱异常');
      } else {
        resolve('');
      }
    });
  });
};
const myEmail = process.env.MY_MAIL;
const to = process.env.TO_MAIL;
const mailTransport = nodemailer.createTransport({
  // host: 'smtp.qq.email',
  service: 'qq',
  secure: true, //安全方式发送,建议都加上
  auth: {
    user: myEmail,
    pass: process.env.MAILE_CODE,
  },
});
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = (await req.body) as FormData;

    if (!data) {
      throw new Error('缺少参数');
    }

    await send(to, data);

    res.json({
      code: 200,
      message: 'success',
    });
  } catch (err) {
    res.json({
      code: 500,
      error: err,
    });
  }
}
