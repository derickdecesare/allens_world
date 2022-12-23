


export default async function handler (req, res) {

const { MessagingResponse } = require('twilio').twiml;
const twiml = new MessagingResponse();

console.log(req.body) 
console.log(req.body.Body) //this is the message

console.log('editing api')
    console.log('api started')
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = require('twilio')(accountSid, authToken)

    // client.messages.create({
    //     body:'this is my message',
    //     from:'+17262009979',
    //     to:'+13038286690'
    // })
    // .then(message => console.log(message.sid))

    twiml.message('Hello, thanks for texting us!');
      // Set the Content-Type header and send the response
      res.setHeader('Content-Type', 'text/xml');
      res.status(200).send(twiml.toString());
      return;

}