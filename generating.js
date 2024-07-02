function generatePassword(currentTime) {
  const currentTimeString = String(currentTime);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let randomLetters = [];

  for (let i = 0; i < currentTimeString.length; i++) {
    const number = currentTimeString.charAt(i);
    if (number !== '.') {
      randomLetters.push(alphabet[parseInt(number)]);
    }
  }

  return randomLetters.join('');
}

module.exports = {
  generatePassword
}
