//PlayfairCipher.js
class PlayfairCipher {
  constructor(keyword) {
    this.keyword = keyword.toUpperCase().replace(/J/g, "I").replace(/ /g, "");
    this.keySquare = this.generateKeySquare();
  }

  generateKeySquare() {
    let keySquare = "";
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; //ganti J dengan I
    let keyword = this.keyword;

    keyword = keyword
      .split("")
      .filter((char, index, self) => self.indexOf(char) === index)
      .join("");

    keyword += alphabet
      .split("")
      .filter((char) => !keyword.includes(char))
      .join("");

    for (let i = 0; i < keyword.length; i++) {
      if (!keySquare.includes(keyword[i])) {
        keySquare += keyword[i];
      }
    }

    return keySquare;
  }

  encrypt(plainText) {
    plainText = plainText
      .replace(/j/g, "i")
      .toUpperCase()
      .replace(/[^A-Z]/g, "");
    let cipherText = "";

    for (let i = 0; i < plainText.length; i += 2) {
      let char1 = plainText[i];
      let char2 = plainText[i + 1] || "X"; 

      if (char1 === char2) {
        char2 = "X";
        i--;
      }

      let index1 = this.keySquare.indexOf(char1);
      let index2 = this.keySquare.indexOf(char2);

      let row1 = Math.floor(index1 / 5);
      let col1 = index1 % 5;
      let row2 = Math.floor(index2 / 5);
      let col2 = index2 % 5;

      if (row1 === row2) {
        cipherText += this.keySquare[row1 * 5 + ((col1 + 1) % 5)];
        cipherText += this.keySquare[row2 * 5 + ((col2 + 1) % 5)];
      } else if (col1 === col2) {
        cipherText += this.keySquare[((row1 + 1) % 5) * 5 + col1];
        cipherText += this.keySquare[((row2 + 1) % 5) * 5 + col2];
      } else {
        cipherText += this.keySquare[row1 * 5 + col2];
        cipherText += this.keySquare[row2 * 5 + col1];
      }
    }

    return cipherText;
  }

  decrypt(cipherText) {
    cipherText = cipherText.toUpperCase().replace(/[^A-Z]/g, "");
    let plainText = "";

    for (let i = 0; i < cipherText.length; i += 2) {
      let char1 = cipherText[i];
      let char2 = cipherText[i + 1] || "X";
      if (char1 === char2) {
        char2 = "X";
        i--;
      }

      let index1 = this.keySquare.indexOf(char1);
      let index2 = this.keySquare.indexOf(char2);

      let row1 = Math.floor(index1 / 5);
      let col1 = index1 % 5;
      let row2 = Math.floor(index2 / 5);
      let col2 = index2 % 5;

      if (row1 === row2) {
        plainText += this.keySquare[row1 * 5 + ((col1 + 4) % 5)];
        plainText += this.keySquare[row2 * 5 + ((col2 + 4) % 5)];
      } else if (col1 === col2) {
        plainText += this.keySquare[((row1 + 4) % 5) * 5 + col1];
        plainText += this.keySquare[((row2 + 4) % 5) * 5 + col2];
      } else {
        plainText += this.keySquare[row1 * 5 + col2];
        plainText += this.keySquare[row2 * 5 + col1];
      }
    }
    return plainText;
  }
}

export default PlayfairCipher;
