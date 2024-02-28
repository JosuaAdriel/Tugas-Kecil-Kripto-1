//AutokeyVignereCipher.js
class AutokeyVigenereCipher {
  constructor(keyword) {
    this.keyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");
  }

  encrypt(plaintext) {
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");
    let key = this.generateKey(plaintext);
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      const plainCharCode = plaintext.charCodeAt(i);
      const keyCharCode = key.charCodeAt(i);
      const encryptedCharCode = ((plainCharCode + keyCharCode) % 26) + 65;
      ciphertext += String.fromCharCode(encryptedCharCode);
    }
    return ciphertext;
  }

  decrypt(ciphertext) {
    let key = this.keyword;
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");

    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
      const cipherCharCode = ciphertext.charCodeAt(i);
      const keyCharCode = key.charCodeAt(i) - 65;
      const decryptedCharCode =
        ((cipherCharCode - 65 - keyCharCode + 26) % 26) + 65;
      plaintext += String.fromCharCode(decryptedCharCode);
      key += String.fromCharCode(decryptedCharCode);
    }
    return plaintext;
  }

  generateKey(plaintext) {
    let key = this.keyword;
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");

    let diff = plaintext.length - key.length;
    if (diff > 0) {
      key += plaintext.slice(0, diff);
    }

    return key;
  }
}

export default AutokeyVigenereCipher;
