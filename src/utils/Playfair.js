class Playfair {
  constructor(keyword) {
    this.keyword = keyword;
    this.size = 5;
    this.playfairMatrix = [];
    this.keywordProcessed = this.processKeyword(keyword);
  }

  processKeyword(keyword) {
    let processedKeyword = "";
    let keywordSet = new Set();
    keyword = keyword.replace(/j/g, "i").replace(/\s/g, "");

    for (let char of keyword) {
      if (!keywordSet.has(char)) {
        keywordSet.add(char);
        processedKeyword += char;
      }
    }

    let alphabet = "abcdefghiklmnopqrstuvwxyz";
    for (let char of alphabet) {
      if (!keywordSet.has(char)) {
        processedKeyword += char;
      }
    }

    return processedKeyword;
  }

  generateMatrix() {
    for (let i = 0; i < this.size; i++) {
      this.playfairMatrix.push([]);
      for (let j = 0; j < this.size; j++) {
        this.playfairMatrix[i].push(
          this.keywordProcessed.charAt(i * this.size + j)
        );
      }
    }
  }

  findCoordinates(char) {
    let coordinates = { x: -1, y: -1 };
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.playfairMatrix[i][j] === char) {
          coordinates.x = i;
          coordinates.y = j;
          return coordinates;
        }
      }
    }
    return coordinates;
  }

  encryptDigram(digram) {
    let coord1 = this.findCoordinates(digram.charAt(0));
    let coord2 = this.findCoordinates(digram.charAt(1));
    let encryptedDigram = "";

    if (coord1.x === coord2.x) {
      encryptedDigram +=
        this.playfairMatrix[coord1.x][(coord1.y + 1) % this.size];
      encryptedDigram +=
        this.playfairMatrix[coord2.x][(coord2.y + 1) % this.size];
    } else if (coord1.y === coord2.y) {
      encryptedDigram +=
        this.playfairMatrix[(coord1.x + 1) % this.size][coord1.y];
      encryptedDigram +=
        this.playfairMatrix[(coord2.x + 1) % this.size][coord2.y];
    } else {
      encryptedDigram += this.playfairMatrix[coord1.x][coord2.y];
      encryptedDigram += this.playfairMatrix[coord2.x][coord1.y];
    }

    return encryptedDigram;
  }

  decryptDigram(digram) {
    let coord1 = this.findCoordinates(digram.charAt(0));
    let coord2 = this.findCoordinates(digram.charAt(1));
    let decryptedDigram = "";

    if (coord1.x === coord2.x) {
      decryptedDigram +=
        this.playfairMatrix[coord1.x][(coord1.y + this.size - 1) % this.size];
      decryptedDigram +=
        this.playfairMatrix[coord2.x][(coord2.y + this.size - 1) % this.size];
    } else if (coord1.y === coord2.y) {
      decryptedDigram +=
        this.playfairMatrix[(coord1.x + this.size - 1) % this.size][coord1.y];
      decryptedDigram +=
        this.playfairMatrix[(coord2.x + this.size - 1) % this.size][coord2.y];
    } else {
      decryptedDigram += this.playfairMatrix[coord1.x][coord2.y];
      decryptedDigram += this.playfairMatrix[coord2.x][coord1.y];
    }

    return decryptedDigram;
  }

  encrypt(plaintext) {
    let processedPlaintext = plaintext
      .replace(/j/g, "i")
      .replace(/\s/g, "")
      .toLowerCase();
    let encryptedText = "";
    this.generateMatrix();

    for (let i = 0; i < processedPlaintext.length; i += 2) {
      let digram = processedPlaintext.charAt(i);
      if (
        i + 1 < processedPlaintext.length &&
        processedPlaintext.charAt(i) === processedPlaintext.charAt(i + 1)
      ) {
        digram += "x";
        i--;
      } else if (i + 1 < processedPlaintext.length) {
        digram += processedPlaintext.charAt(i + 1);
      } else {
        digram += "x";
      }
      encryptedText += this.encryptDigram(digram);
    }

    return encryptedText.toUpperCase();
  }

  decrypt(encryptedText) {
    let processedEncryptedText = encryptedText.toLowerCase();
    let decryptedText = "";
    this.generateMatrix();

    for (let i = 0; i < processedEncryptedText.length; i += 2) {
      let digram = processedEncryptedText.substr(i, 2);
      decryptedText += this.decryptDigram(digram);
    }

    return decryptedText.toUpperCase();
  }
}

export default Playfair;
