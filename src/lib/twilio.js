const accountSid = "AC3bc0e6db5c17dd06022752437a3c9178";
const authToken = "88b4317dc3c7409950fb23fecb58a126";
// const client = require("twilio")(accountSid, authToken);
import twilio from "twilio";
const client = twilio(accountSid, authToken);

export { client };
