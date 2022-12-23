


export default async function handler (req, res) {



console.log('editing api')
    console.log('api started')
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = require('twilio')(accountSid, authToken)

    client.messages.create({
        body:'this is my message',
        from:'+17262009979',
        to:'+13038286690'
    })
    .then(message => console.log(message.sid))

}