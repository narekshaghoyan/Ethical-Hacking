const request = require('request');
const { generatePassword } = require('./generating');

const baseUrl = 'http://206.189.98.117:5000'
let passwordFinded = false
let StartNumber = 1719191600

function sendRequest(baseUrl, password, partUrl) {
  if (!partUrl) console.log('Sending a request to the home page!');

  const fullLink = `${baseUrl}/${partUrl}?password=${password}`;

  const options = {
    url: fullLink,
    method: 'GET',
    json: true
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      if (!body.correct) {
        console.log('The password is not correct!');
        console.log(bodyParams);
        // Increment StartNumber and try again
        StartNumber++;
      } else {
        console.log('Success! Password hacked!');
        console.log('Password:', body.password);
        passwordFinded = true;
      }
    }
  });
}

function iteratePasswords() {
  const password = generatePassword(1719197366); // Generate password based on StartNumber
  const bodyParams = { password };

  sendRequest(baseUrl, bodyParams, 'check-password');
}

 const password = generatePassword(1719197366); // Generate password based on StartNumber

sendRequest(baseUrl, password, 'check-password');