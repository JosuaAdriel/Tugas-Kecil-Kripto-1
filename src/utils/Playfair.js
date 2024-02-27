class Playfair {
  constructor(key) {
    this.key = this.prepareKey(key);
    this.keySquare = this.generateKeySquare(this.key);
  }

  prepareKey(key) {
    // Remove spaces and duplicate letters
    key = key.replace(/ /g, "").toUpperCase();
    let uniqueChars = [];
    for (let char of key) {
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }
    return uniqueChars.join("");
  }

  generateKeySquare(key) {
    let keySquare = [];
    let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // Excluding 'J'
    let keyIndex = 0;

    // Populate key-related characters first
    for (let i = 0; i < 5; i++) {
      let row = [];
      for (let j = 0; j < 5; j++) {
        if (keyIndex < key.length) {
          row.push(key[keyIndex]);
          keyIndex++;
        } else {
          // Fill the rest of the grid with remaining alphabet letters
          while (key.includes(alphabet[0])) {
            alphabet = alphabet.slice(1);
          }
          row.push(alphabet[0]);
          alphabet = alphabet.slice(1);
        }
      }
      keySquare.push(row);
    }
    return keySquare;
  }

  encrypt(plaintext) {
    plaintext = plaintext.toUpperCase().replace(/J/g, "I").replace(/ /g, "");
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i += 2) {
      let char1 = plaintext[i];
      let char2 = plaintext[i + 1] ? plaintext[i + 1] : "X"; // Add 'X' if the last digraph has only one character
      let pair1 = this.findCharPosition(char1);
      let pair2 = this.findCharPosition(char2);

      let encryptedPair = this.encryptPair(pair1, pair2);
      ciphertext += encryptedPair[0] + encryptedPair[1];
    }
    return ciphertext;
  }

  decrypt(ciphertext) {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i += 2) {
      let char1 = ciphertext[i];
      let char2 = ciphertext[i + 1];
      let pair1 = this.findCharPosition(char1);
      let pair2 = this.findCharPosition(char2);

      let decryptedPair = this.decryptPair(pair1, pair2);
      plaintext += decryptedPair[0] + decryptedPair[1];
    }
    return plaintext;
  }

  findCharPosition(char) {
    for (let i = 0; i < this.keySquare.length; i++) {
      let row = this.keySquare[i];
      if (row.includes(char)) {
        return [i, row.indexOf(char)];
      }
    }
  }

  encryptPair(pair1, pair2) {
    let [row1, col1] = pair1;
    let [row2, col2] = pair2;

    if (row1 === row2) {
      col1 = (col1 + 1) % 5;
      col2 = (col2 + 1) % 5;
    } else if (col1 === col2) {
      row1 = (row1 + 1) % 5;
      row2 = (row2 + 1) % 5;
    } else {
      let temp = col1;
      col1 = col2;
      col2 = temp;
    }

    return [this.keySquare[row1][col1], this.keySquare[row2][col2]];
  }

  decryptPair(pair1, pair2) {
    let [row1, col1] = pair1;
    let [row2, col2] = pair2;

    if (row1 === row2) {
      col1 = (col1 - 1 + 5) % 5;
      col2 = (col2 - 1 + 5) % 5;
    } else if (col1 === col2) {
      row1 = (row1 - 1 + 5) % 5;
      row2 = (row2 - 1 + 5) % 5;
    } else {
      let temp = col1;
      col1 = col2;
      col2 = temp;
    }

    return [this.keySquare[row1][col1], this.keySquare[row2][col2]];
  }
}

export default Playfair;
