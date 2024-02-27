class ExtendedVigenereCipher {
  constructor(key) {
    this.key = key; // Convert key to uppercase
  }

  encrypt(plaintext) {
    let result = "";
    // No need to convert plaintext to uppercase or remove non-alphabetic characters
    for (let i = 0, j = 0; i < plaintext.length; i++) {
      const plainCharCode = plaintext.charCodeAt(i);
      const keyCharCode = this.key.charCodeAt(j % this.key.length);
      const encryptedCharCode = (plainCharCode + keyCharCode) % 256;
      result += String.fromCharCode(encryptedCharCode);
      j++;
    }
    return result;
    //return btoa(result); // Convert the result to base64 for binary-safe transmission
  }

  decrypt(ciphertext) {
    let result = "";
    for (let i = 0, j = 0; i < ciphertext.length; i++) {
      const cipherCharCode = ciphertext.charCodeAt(i);
      const keyCharCode = this.key.charCodeAt(j % this.key.length);
      const decryptedCharCode = (cipherCharCode - keyCharCode + 256) % 256; // Ensure the result is within the range 0-255
      result += String.fromCharCode(decryptedCharCode);
      j++;
    }
    return result;
  }
}

export default ExtendedVigenereCipher;

// decrypt(ciphertext) {
//   let result = "";
//   //const decodedCiphertext = atob(ciphertext);
//   decodedCiphertext = ciphertext;
//   //return ciphertext;
//   for (let i = 0, j = 0; i < decodedCiphertext.length; i++) {
//     const cipherCharCode = decodedCiphertext.charCodeAt(i);
//     const keyCharCode = this.key.charCodeAt(j % this.key.length);
//     const decryptedCharCode = (cipherCharCode - keyCharCode + 256) % 256;
//     result += String.fromCharCode(decryptedCharCode);
//     j++;
//   }
//   return result;
// }

