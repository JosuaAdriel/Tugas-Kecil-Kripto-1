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
export default ProductCipher;
