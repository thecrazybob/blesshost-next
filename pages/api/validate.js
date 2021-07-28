const apiurl = `${process.env.WHMCS_API_URL}?identifier=${process.env.WHMCS_API_IDENTIFIER}&secret=${process.env.WHMCS_API_SECRET}&accesskey=${process.env.WHMCS_API_ACCESS_KEY}&action=ValidateLogin&responsetype=json`;
var FormData = require("form-data");

export default async function validateUser(req, res) {
  const formData = new FormData();
  formData.append("email", req.body.email);
  formData.append("password2", req.body.password);

  const response = await fetch(apiurl, { method: "POST", body: formData });

  const json = await response.json();


  return res.status(200).json(json);
}
