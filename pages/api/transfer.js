const mailgunSdk = require("mailgun-js");
const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = mailgunSdk({ apiKey, domain });

export default async (req, res) => {
  let response;

  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${req.body.recaptchaResponse}`;

    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });

    const recaptchaJson = await recaptchaRes.json();

    response = await mailgun.messages().send({
      to: "support@blesshost.com",
      from: req.body.email,
      subject: `Transfer form submission by ${req.body.first_name} ${req.body.last_name}`,
      text: `
      First name: ${req.body.first_name}
      Last name: ${req.body.last_name}
      Email: ${req.body.email}
      Phone: ${req.body.phone}
      Domain name: ${req.body.domain_name}
      Domain login: ${req.body.domain_login}
      Domain pass: ${req.body.domain_pass}
      Hosting name: ${req.body.hosting_name}
      Hosting user: ${req.body.hosting_user}
      Hosting pass: ${req.body.hosting_pass}
      `,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ result: response.message });
};
