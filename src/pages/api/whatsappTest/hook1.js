const Redis = require("ioredis");
import { v4 as uuidv4 } from "uuid";
let client = new Redis(
  "redis://default:774b486aa84d456b987ab51533cfce94@eu2-prompt-seal-30169.upstash.io:30169"
);
const MessagingResponse = require("twilio").twiml.MessagingResponse;

function respond(msg) {
  const response = new MessagingResponse();
  response.message(msg);
  console.log(response.toString());
  return;
}

export default async function handler(req, res) {
  console.log("Hook 1");
  const content = req.body;
  if (!content) {
    console.log("Nothing");
    return res.send("nothing");
  }
  try {
    const random = uuidv4();
    await client.hmset("h1_" + random, content);
    return res.status(200).send("OK");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
