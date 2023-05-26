import { client } from "../../../lib/twilio";
import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const phone_number = req.body.phone_number;

      if (!phone_number) {
        return res.status(400).json({
          error: "Missing phone number",
        });
      }
      // const check_if_tel_exists = await axios.post(
      //   "https://europe-west1-ariadne-analytics-next-auth.cloudfunctions.net/get_verified_tel",
      //   {
      //     check_tel: phone_number,
      //   }
      // );

      // if (check_if_tel_exists.status === 200) {
      //   return res.status(203).json({
      //     message: "Phone number already exists,please use it to log in",
      //   });
      // }

      //   const verification = await client.messages.create({
      //     from: "whatsapp:+14155238886",
      //     body: `Your Verification Code is : ${generated_code}`,
      //     to: `whatsapp:${phone_number}`,
      //   });
      const verification = await client.verify.v2
        .services("VA20ed28db357bca4394566323b5a82322")
        .verifications.create({ to: phone_number, channel: "whatsapp" });

      return res.status(200).json({
        message_id: verification.accountSid,
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
