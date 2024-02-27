import TranspositionCipher from "./TranspositionCipher.js";
import VigenereCipher from "./VigenereCipher.js";

class ProductCipher {
  constructor(encryptionMethods) {
    this.encryptionMethods = encryptionMethods;
  }

  encrypt(plaintext) {
    let ciphertext = plaintext;
    for (let encryptionMethod of this.encryptionMethods) {
      ciphertext = encryptionMethod.encrypt(ciphertext);
    }
    return ciphertext;
  }

  decrypt(ciphertext) {
    let plaintext = ciphertext;
    for (let i = this.encryptionMethods.length - 1; i >= 0; i--) {
      plaintext = this.encryptionMethods[i].decrypt(plaintext);
    }
    return plaintext;
  }
}

// Define encryption methods
const vigenere = new VigenereCipher("kecil");
const transposition = new TranspositionCipher(2);
const product = new ProductCipher([vigenere, transposition]);

// Encrypt plaintext using superencryption
const plaintext = "cepusganteng";
const ciphertext = product.encrypt(plaintext);
console.log("Encrypted:", ciphertext);

// Decrypt ciphertext using superencryption
const decryptedText = product.decrypt(ciphertext);
console.log("Decrypted:", decryptedText);
export default ProductCipher;
