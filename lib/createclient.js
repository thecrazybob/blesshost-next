var FormData = require("form-data");
var generator = require("generate-password");

const apiurl = `${process.env.WHMCS_API_URL}?action=AddClient&responsetype=json`;
var password = generator.generate({
  length: 10,
  numbers: true,
});

export default async function whmcsCreateClient(firstname, lastname, email, country) {
  const formData = new FormData();
  formData.append("identifier", process.env.WHMCS_API_IDENTIFIER);
  formData.append("secret", process.env.WHMCS_API_SECRET);
  formData.append("accesskey", process.env.WHMCS_API_ACCESS_KEY);
  formData.append("firstname", firstname);
  formData.append("lastname", lastname);
  formData.append("email", email);
  formData.append("address1", "Abu Dhabi");
  formData.append("state", "Abu Dhabi");
  formData.append("postcode", "00000");
  formData.append("country", country);
  formData.append("phonenumber", "0000000000");
  formData.append("password2", password);

  const res = await fetch(apiurl, { method: "POST", body: formData });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;


}
