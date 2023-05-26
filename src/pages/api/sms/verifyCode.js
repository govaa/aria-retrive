import { client } from "../../../lib/twilio";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(400).json({ message: "Method Not Allowed" });
  const code = req.body.code;
  const phone_number = req.body.phone_number;
  try {
    const response = await client.verify.v2
      .services("VA20ed28db357bca4394566323b5a82322")
      .verificationChecks.create({
        to: phone_number,
        code: code,
      });
    const { status, valid } = response;
    if (valid === true) {
      return res.status(200).json({ message: response });
    } else {
      return res.status(401).json({ message: "Invalid code" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
