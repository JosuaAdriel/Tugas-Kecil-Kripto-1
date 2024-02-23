function PlayfairCipher(keyword) {
  const size = 5;
  let playfairMatrix = [];
  let keywordProcessed = processKeyword(keyword);

  function processKeyword(keyword) {
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

  function generateMatrix() {
    for (let i = 0; i < size; i++) {
      playfairMatrix.push([]);
      for (let j = 0; j < size; j++) {
        playfairMatrix[i].push(keywordProcessed.charAt(i * size + j));
      }
    }
  }

  function findCoordinates(char) {
    let coordinates = { x: -1, y: -1 };
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (playfairMatrix[i][j] === char) {
          coordinates.x = i;
          coordinates.y = j;
          return coordinates;
        }
      }
    }
    return coordinates;
  }

  function encryptDigram(digram) {
    let coord1 = findCoordinates(digram.charAt(0));
    let coord2 = findCoordinates(digram.charAt(1));
    let encryptedDigram = "";

    if (coord1.x === coord2.x) {
      encryptedDigram += playfairMatrix[coord1.x][(coord1.y + 1) % size];
      encryptedDigram += playfairMatrix[coord2.x][(coord2.y + 1) % size];
    } else if (coord1.y === coord2.y) {
      encryptedDigram += playfairMatrix[(coord1.x + 1) % size][coord1.y];
      encryptedDigram += playfairMatrix[(coord2.x + 1) % size][coord2.y];
    } else {
      encryptedDigram += playfairMatrix[coord1.x][coord2.y];
      encryptedDigram += playfairMatrix[coord2.x][coord1.y];
    }

    return encryptedDigram;
  }

  function decryptDigram(digram) {
    let coord1 = findCoordinates(digram.charAt(0));
    let coord2 = findCoordinates(digram.charAt(1));
    let decryptedDigram = "";

    if (coord1.x === coord2.x) {
      decryptedDigram += playfairMatrix[coord1.x][(coord1.y + size - 1) % size];
      decryptedDigram += playfairMatrix[coord2.x][(coord2.y + size - 1) % size];
    } else if (coord1.y === coord2.y) {
      decryptedDigram += playfairMatrix[(coord1.x + size - 1) % size][coord1.y];
      decryptedDigram += playfairMatrix[(coord2.x + size - 1) % size][coord2.y];
    } else {
      decryptedDigram += playfairMatrix[coord1.x][coord2.y];
      decryptedDigram += playfairMatrix[coord2.x][coord1.y];
    }

    return decryptedDigram;
  }

  this.encrypt = function (plaintext) {
    let processedPlaintext = plaintext
      .replace(/j/g, "i")
      .replace(/\s/g, "")
      .toLowerCase();
    let encryptedText = "";
    generateMatrix();

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
      encryptedText += encryptDigram(digram);
    }

    return encryptedText.toUpperCase();
  };

  this.decrypt = function (encryptedText) {
    let processedEncryptedText = encryptedText.toLowerCase();
    let decryptedText = "";
    generateMatrix();

    for (let i = 0; i < processedEncryptedText.length; i += 2) {
      let digram = processedEncryptedText.substr(i, 2);
      decryptedText += decryptDigram(digram);
    }

    return decryptedText.toUpperCase();
  };
}

// Example usage
let keyword = "jalan ganesha sepuluh";
let cipher = new PlayfairCipher(keyword);
let plaintext = "temui ibu nanti malam";
let encryptedText = cipher.encrypt(plaintext);
console.log("Encrypted:", encryptedText);
console.log("Decrypted:", cipher.decrypt(encryptedText));
