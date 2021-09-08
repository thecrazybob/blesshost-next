var FormData = require("form-data");

const apiurl = `${process.env.WHMCS_API_URL}?action=AddOrder&responsetype=json`;

export default async function whmcsAddOrder(clientid, pid, cycle) {
  const formData = new FormData();
  formData.append("identifier", process.env.WHMCS_API_IDENTIFIER);
  formData.append("secret", process.env.WHMCS_API_SECRET);
  formData.append("accesskey", process.env.WHMCS_API_ACCESS_KEY);
  formData.append("clientid", clientid);
  formData.append("paymentmethod", "stripe");

  for (let i = 0; i < pid.length; i++) {
    formData.append("pid[]", pid[i]);
  }
  for (let i = 0; i < cycle.length; i++) {
    formData.append("billingcycle[]", cycle[i]);
  }

  const res = await fetch(apiurl, { method: "POST", body: formData });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
}
