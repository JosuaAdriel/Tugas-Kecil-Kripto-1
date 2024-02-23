// Fungsi untuk mengonversi teks pesan menjadi bigram
function generateBigrams(message) {
  // Menghapus karakter non-alfanumerik dan mengonversi ke huruf kecil
  message = message.toLowerCase().replace(/[^a-z]/g, "");

  // Memisahkan teks menjadi bigram
  let bigrams = [];
  for (let i = 0; i < message.length; i += 2) {
    let pair = message[i];
    if (i + 1 < message.length) {
      if (message[i] === message[i + 1]) {
        pair += "x"; // Menambahkan x jika ada dua huruf yang sama bersebelahan
        i--; // Mengulang iterasi untuk menangani huruf kedua pada pasangan
      } else {
        pair += message[i + 1];
      }
    } else {
      pair += "x"; // Menambahkan x jika panjang pesan ganjil
    }
    bigrams.push(pair);
  }
  return bigrams;
}

// Fungsi untuk menghasilkan matriks kunci
function generateKeyMatrix(key) {
  let alphabet = "abcdefghiklmnopqrstuvwxyz"; // Menghilangkan huruf j
  let keyMatrix = [];
  let keyWithoutDuplicates = "";

  // Membuang karakter duplikat dari kunci
  for (let i = 0; i < key.length; i++) {
    if (!keyWithoutDuplicates.includes(key[i])) {
      keyWithoutDuplicates += key[i];
    }
  }

  // Mengisi matriks kunci
  let index = 0;
  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      if (index < keyWithoutDuplicates.length) {
        row.push(keyWithoutDuplicates[index]);
        alphabet = alphabet.replace(keyWithoutDuplicates[index], ""); // Menghapus huruf yang sudah digunakan dari alfabet
        index++;
      } else {
        row.push(alphabet[0]);
        alphabet = alphabet.substring(1);
      }
    }
    keyMatrix.push(row);
  }
  return keyMatrix;
}

// Fungsi untuk mendapatkan posisi huruf dalam matriks kunci
function getPosition(matrix, letter) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === letter) {
        return { row: i, col: j };
      }
    }
  }
}

// Fungsi untuk mengenkripsi pesan menggunakan algoritma Playfair Cipher
function encrypt(plaintext, key) {
  let bigrams = generateBigrams(plaintext);
  let keyMatrix = generateKeyMatrix(key);
  let ciphertext = "";

  for (let i = 0; i < bigrams.length; i++) {
    let firstLetter = bigrams[i][0];
    let secondLetter = bigrams[i][1];

    let firstPosition = getPosition(keyMatrix, firstLetter);
    let secondPosition = getPosition(keyMatrix, secondLetter);

    let encryptedBigram = "";
    if (firstPosition.row === secondPosition.row) {
      // Jika dalam baris yang sama
      encryptedBigram +=
        keyMatrix[firstPosition.row][(firstPosition.col + 1) % 5];
      encryptedBigram +=
        keyMatrix[secondPosition.row][(secondPosition.col + 1) % 5];
    } else if (firstPosition.col === secondPosition.col) {
      // Jika dalam kolom yang sama
      encryptedBigram +=
        keyMatrix[(firstPosition.row + 1) % 5][firstPosition.col];
      encryptedBigram +=
        keyMatrix[(secondPosition.row + 1) % 5][secondPosition.col];
    } else {
      // Jika berada dalam baris dan kolom yang berbeda
      encryptedBigram += keyMatrix[firstPosition.row][secondPosition.col];
      encryptedBigram += keyMatrix[secondPosition.row][firstPosition.col];
    }

    ciphertext += encryptedBigram;
  }

  return ciphertext;
}

// Contoh penggunaan
let plaintext = "hello";
let key = "keyword";

console.log("Plaintext:", plaintext);
console.log("Key:", key);

let encryptedText = encrypt(plaintext, key);
console.log("Encrypted Text:", encryptedText);
