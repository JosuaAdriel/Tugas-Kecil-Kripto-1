//AffineCipher.js
class AffineCipher {
  constructor(a, b) {
    this.a = a;
    this.b = b % 26; // Max char 26
  }

  gcd(a, b) {
    while (b != 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  modInverse(a, m) {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m == 1) {
        return x;
      }
    }
    return 1;
  }

  encrypt(plaintext) {
    let ciphertext = "";
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");
    for (let i = 0; i < plaintext.length; i++) {
      let charCode = plaintext.charCodeAt(i) - 65;
      let encryptedCharCode = ((this.a * charCode + this.b) % 26) + 65;
      ciphertext += String.fromCharCode(encryptedCharCode);
    }
    return ciphertext;
  }

  decrypt(ciphertext) {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ciphertext.charCodeAt(i) - 65;
      let aInverse = this.modInverse(this.a, 26);
      let decryptedCharCode = ((aInverse * (charCode - this.b + 26)) % 26) + 65;
      plaintext += String.fromCharCode(decryptedCharCode);
    }
    return plaintext;
  }
}

export default AffineCipher;
