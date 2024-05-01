function rot13(str) {
  // Define a function to decode a single character
  function decodeChar(char) {
    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Get the ASCII code of the character
      let code = char.charCodeAt(0);
      code = (code - 65 + 13) % 26 + 65;
   
      return String.fromCharCode(code);
    }
    
    return char;
  }

  return str.split('').map(decodeChar).join('');
}

console.log(rot13("SERR PBQR PNZC")); 