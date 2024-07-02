const request = require('request');

const baseUrl = 'http://206.189.98.117:5000'

function sendRequest(
  baseUrl = baseUrl,
  partUrl = ''
  bodyParams = {}
) {
  if (!partUrl) console.log('Sending a request in home page!');
  if (!bodyParams) console.log('Sending a request without a body');

  const fullLink = `${baseUrl}/check-password`;

  const options = {
    url: fullLink,
    method: 'GET',
    json: true, 
    body: bodyParams
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      if (!body.correct) return console.log('The password is not correct!');
      
      console.log('Succes pasword hack xD');
    }
  });
}

const bodyParams = {
  password: 'examplepassword'
};

sendRequest(baseUrl, bodyParams);
