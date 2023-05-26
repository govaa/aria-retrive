import { client } from "../../../lib/twilio";
const otpGenerator = require("otp-generator");
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const phone_number = req.body.phone_number;
      if (!phone_number) {
        return res.status(400).json({
          error: "Missing phone number",
        });
      }
      const generated_code = otpGenerator.generate(5, {
        digits: true,
        lowerCaseAlphabets: false,
        specialChars: false,
        upperCaseAlphabets: false,
      });
      //   const verification = await client.messages.create({
      //     from: "whatsapp:+14155238886",
      //     body: `Your Verification Code is : ${generated_code}`,
      //     to: `whatsapp:${phone_number}`,
      //   });
      const verification = await client.verify.v2
        .services("VA0616536e53c44587356716b7df2cc77f")
        .verifications.create({ to: phone_number, channel: "whatsapp" });

      return res.status(200).json({
        code: generated_code,
        message_id: verification.accountSid,
        tel: phone_number,
        verification,
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  } else {
    return res.status(405).json({
      error: "Invalid method",
    });
  }
}
