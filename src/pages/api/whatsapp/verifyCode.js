import { client } from "../../../lib/twilio";
import axios from "axios";
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(400).json({ message: "Method Not Allowed" });
  const { code, clientmac } = req.body;
  const phone_number = req.body.phone_number;
  try {
    const response = await client.verify.v2
      .services("VA20ed28db357bca4394566323b5a82322")
      .verificationChecks.create({
        to: phone_number,
        code: code,
      });
    const { status, valid, to } = response;
    if (valid === true) {
      console.log({ clientmac, valid, to });
      // const stringed = JSON.stringify({
      //   mac: clientmac,
      //   mobile: to,
      //   project: "test_optin",
      //   timestamp: 12312312,
      // });
      // console.log(stringed);
      // const secret_sent =
      //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InB1bWFfc2cxIiwiZXhwIjoxNzAyMjk0NDA0fQ.pfaopVnNVyKQ5sYm9oOYIDgWwcHF6moUzI9nCSjpN5Y";
      if (clientmac) {
        const api_res = await fetch(
          "https://api.ariadne.inc/api/v3/wifi_optin",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "x-access-token":
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InB1bWFfc2cxIiwiZXhwIjoxNzAyMjk0NDA0fQ.pfaopVnNVyKQ5sYm9oOYIDgWwcHF6moUzI9nCSjpN5Y",
            },
            method: "POST",
            body: JSON.stringify({
              mac: clientmac,

              mobile: to,

              timestamp: new Date().getTime(),

              project: "puma_sg1",
            }),
          }
        );
        const json = await api_res.json();
        console.log(json);
        if (api_res.status !== 200)
          res.status(401).json({ message: "Something wrong" });
      }
      return res.status(200).json({ message: response });
    } else {
      return res.status(401).json({ message: "Invalid code" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
}
