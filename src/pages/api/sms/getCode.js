import { client } from "../../../lib/twilio";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const phone_number = req.body.phone_number;
      if (!phone_number) {
        return res.status(400).json({
          error: "Missing phone number",
        });
      }

      const verification = await client.verify.v2
        .services("VA20ed28db357bca4394566323b5a82322")
        .verifications.create({ to: phone_number, channel: "sms" });

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
