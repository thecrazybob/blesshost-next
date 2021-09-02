var FormData = require("form-data");

const apiurl = `${process.env.WHMCS_API_URL}?action=GetClients&responsetype=json`;

export default async function whmcsGetClient(email) {
  const formData = new FormData();
  formData.append("identifier", process.env.WHMCS_API_IDENTIFIER);
  formData.append("secret", process.env.WHMCS_API_SECRET);
  formData.append("accesskey", process.env.WHMCS_API_ACCESS_KEY);
  formData.append("search", email);

  const res = await fetch(apiurl, { method: "POST", body: formData });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
}
