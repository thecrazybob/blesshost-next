const mailgunSdk = require("mailgun-js");
const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = mailgunSdk({ apiKey, domain });

export default async (req, res) => {
    let response;

    try {
        response = await mailgun.messages().send({
            to: "support@blesshost.com",
            from: req.body.email,
            subject: `Contact form submission by ${req.body.first_name} ${req.body.last_name}`,
            text: `Phone: ${req.body.phone} Message: ${req.body.message}`,
        });
    } catch (error) {
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message });
    }

    return res.status(200).json({ result: response.message });
};
