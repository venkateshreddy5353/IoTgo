module.exports = {
  host: '127.0.0.1',        // Hostname of IoTgo platform
  db: {                             
    uri: 'mongodb://127.0.0.1/iotgo',   // MongoDB database address
    options: {
      user: 'iotgo',                    // MongoDB database username
      pass: 'iotgo'                     // MongoDB database password
    }
  },
  jwt: {
    secret: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZlbmthdGVzaCByZWRkeSIsImFkbWluIjp0cnVlLCJqdGkiOiJkMzczYWQwMC1jMGY5LTQwY2QtOWY2Ny0yYzc5ZDg4YjU4YjUiLCJpYXQiOjE1OTExNjU2NjUsImV4cCI6MTU5MTE2OTI4OX0.Nqgj_wiSCVF8JOv4z25UbWj5XY2PUSmb5Q2ieLJmJV0'                // Shared secret to encrypt JSON Web Token
  },
  admin:{
    'iotgo@iteadstudio.com': 'password' // Administrator account of IoTgo platform
  },
  page: {
    limit: 50,                          // Default query page limit
    sort: -1                            // Default query sort order
  },
  recaptcha: {
      secret: '6LdcZ_kUAAAAAPAnt-0ap2IDN2bN4FPz3hrg_8V4',                       // Google reCAPTCHA serect
      url: 'https://www.google.com/recaptcha/api/siteverify'
    },
  pendingRequestTimeout: 3000,
  mailgun: {
          api_key:'3950b03a675bef531cde8146423ad643-e5e67e3e-030e74ec',                   //Mailgun API Key
          domain:'127.0.0.1',                    //Mailgun Domain Name
          from:'venkatesh.reddy5353@gmail.com'                       //Mailgun Default SMTP Login Email
  },
  upgradeUrl:"http://v.itead.cc/api/upgrade"
};
