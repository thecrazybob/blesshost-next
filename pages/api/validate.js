/* eslint-disable prettier/prettier */
import fetchJson from "../../lib/fetchJson";
import withSession from "../../lib/ironSession";

const apiurl = `${process.env.WHMCS_API_URL}?identifier=${process.env.WHMCS_API_IDENTIFIER}&secret=${process.env.WHMCS_API_SECRET}&accesskey=${process.env.WHMCS_API_ACCESS_KEY}&action=ValidateLogin&responsetype=json`;
var FormData = require("form-data");

export default withSession(async (req, res) => {
  const formData = new FormData();
  const { email, password } = await req.body;
  formData.append("email", email);
  formData.append("password2", password);

  try {
    const response = await fetchJson(apiurl, {
      method: "POST",
      body: formData,
    });

    if (response.result === "success") {
      const { userid } = response;
      const user = { isLoggedIn: true, userid };
      req.session.set('user', user)
      await req.session.save();
      res.json(user);
    }
    else {
        res.json(response)
    }
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
