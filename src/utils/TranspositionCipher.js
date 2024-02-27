class TranspositionCipher {
  constructor(key) {
    this.key = key;
  }

  // Encrypt plaintext
  encrypt(plaintext) {
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, ""); // Convert plaintext to uppercase
    plaintext += "X".repeat(this.key - (plaintext.length % this.key));
    const numRows = Math.ceil(plaintext.length / this.key);
    let ciphertext = "";

    for (let i = 0; i < this.key; i++) {
      for (let j = 0; j < numRows; j++) {
        const index = i + j * this.key;
        if (index < plaintext.length) {
          ciphertext += plaintext.charAt(index);
        }
      }
    }

    return ciphertext;
  }

  // Decrypt ciphertext
  decrypt(ciphertext) {
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");
    const numColumns = Math.ceil(ciphertext.length / this.key);

    let plaintext = "";

    for (let i = 0; i < numColumns; i++) {
      for (let j = 0; j < this.key; j++) {
        const index = i + j * numColumns;
        if (index < ciphertext.length) {
          plaintext += ciphertext.charAt(index);
        }
      }
    }

    return plaintext;
  }
}

// Example usage:
// const cipher = new TranspositionCipher(2);

// const plaintext = "cepus kontol";
// const encrypted = cipher.encrypt(plaintext);
// const decrypted = cipher.decrypt(encrypted);

// console.log("Plaintext:", plaintext);
// console.log("Encrypted:", encrypted);
// console.log("Decrypted:", decrypted);
export default TranspositionCipher;
