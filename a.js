function reverseGeneratePassword(password) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let unixTimeString = '';

  // Iterate through each character in the password
  for (let i = 0; i < password.length; i++) {
    const letter = password[i];
    const index = alphabet.indexOf(letter);

    // Convert the alphabet index back to digit
    if (index !== -1) {
      unixTimeString += index;
    }
  }

  // Convert the string representation of Unix time to a number
  const unixTime = parseInt(unixTimeString);
  return unixTime;
}

console.log(reverseGeneratePassword('bhbjbjibeb'));
