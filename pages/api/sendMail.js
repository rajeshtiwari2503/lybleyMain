import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, contact, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port:587,
    secure:false,
    requireTLS:true,
    auth: {
        user:"hi@sparetrade.in",
        pass:"o7Sy?dpc" 
    }
  });

  // Email content
  let mailOptions = {
    from: `<${email}>`,
    to: 'help@lybley.com', 
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Contact: ${contact}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
}
