import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import VigenereCipher from "../utils/VigenereCipher.js";
import ReaderFile from "../components/ReaderFile.jsx";

const VigenerePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const vigenere = new VigenereCipher(key);

  const encrypt = () => {
    const encryptedText = vigenere.encrypt(plaintext);
    setEncryptedText(encryptedText);
  };

  const decrypt = () => {
    const decryptedText = vigenere.decrypt(ciphertext);
    setDecryptedText(decryptedText);
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col className="col-spacing">
              <div className="">
                <h1>Vigenere Cipher</h1>
                <p>
                  Metode menyandikan teks (26 karakter alfabet) dengan
                  menggunakan deretan sandi Caesar berdasarkan huruf-huruf pada
                  kata kunci.
                </p>
              </div>
              <div className='reader'>
                <ReaderFile setPlaintext={setPlaintext} setCiphertext={setCiphertext} />
              </div>
              <div className="input-group">
                <label htmlFor="key">Key:</label>
                <textarea
                  id="key"
                  value={key}
                  onChange={(e) =>
                    setKey(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))
                  }
                  rows={1} // Set the number of rows for the textarea
                />
              </div>
            </Col>
            <Col className="col-spacing">
              <div className="input-group">
                <label htmlFor="plaintext">Plaintext:</label>
                <textarea
                  id="plaintext"
                  value={plaintext}
                  onChange={(e) => setPlaintext(e.target.value)}
                  rows={8} // Set the number of rows for the textarea
                />
              </div>
              <div className="input-group">
                <label htmlFor="encryptedPlainText">Encrypted Text:</label>
                <textarea
                  id="encryptedPlainTextt"
                  value={encryptedText}
                  readOnly
                  rows={8}
                />
              </div>
              <div className="button-group">
                <button onClick={encrypt}>Encrypt</button>
              </div>
            </Col>
            <Col className="col-spacing">
              <div className="input-group">
                <label htmlFor="ciphertext">Ciphertext:</label>
                <textarea
                  id="ciphertext"
                  value={ciphertext}
                  onChange={(e) => setCiphertext(e.target.value)}
                  rows={8}
                />
              </div>
              <div className="input-group">
                <label htmlFor="decryptedText">Decrypted Ciphertext:</label>
                <textarea
                  id="decryptedText"
                  value={decryptedText}
                  readOnly
                  rows={8}
                />
              </div>
              <div className="button-group">
                <button onClick={decrypt}>Decrypt</button>
              </div>
            </Col>
          </Row>
          <Row className="download d-flex align-items-center">
            <p>Download Cipher Text File Disini.</p>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default VigenerePage;
