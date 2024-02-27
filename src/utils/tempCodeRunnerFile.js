const cipher = new TranspositionCipher(2);

const plaintext = "cepus kontol";
const encrypted = cipher.encrypt(plaintext);
const decrypted = cipher.decrypt(encrypted);

console.log("Plaintext:", plaintext);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);