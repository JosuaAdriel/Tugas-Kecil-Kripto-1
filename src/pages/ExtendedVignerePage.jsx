import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ExtendedVigenereCipher from "../utils/ExtendedVigenereCipher.js";
import ReaderFile from "../components/ReaderFile.jsx";

const ExtendedVignerePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [fileFormat, setFileFormat] = useState("");
  const [base64, setBase64] = useState("");

  const vigenere = new ExtendedVigenereCipher(key); //tinggal ganti metode nya disini

  const encrypt = () => {
    const encryptedText = vigenere.encrypt(base64); //tinggal ganti metode nya disini
    setCiphertext(fileFormat + encryptedText);
    setBase64(encryptedText);
  };

  const decrypt = () => {
    const decryptedText = vigenere.decrypt(base64); //tinggal ganti metode nya disini
    setDecryptedText(fileFormat + decryptedText);
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col className="col-spacing">
              <div className="">
                <h1>Extended Vigenere Cipher</h1>
                <p>
                  Metode menyandikan teks (256 karakter ASCII) dengan
                  menggunakan deretan sandi Caesar berdasarkan huruf-huruf pada
                  kata kunci.
                </p>
              </div>
              <ReaderFile
                onlyTxt={false}
                setPlaintext={setPlaintext}
                setFileFormat={setFileFormat}
                setBase64={setBase64}
              />
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
                <label htmlFor="key">Key:</label>
                <textarea
                  id="key"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  rows={8} // Set the number of rows for the textarea
                />
              </div>
              <div className="button-group">
                <button onClick={encrypt}>Encrypt</button>
              </div>
            </Col>
            <Col className="col-spacing">
              <div className="input-group">
                <label htmlFor="ciphertext">Ciphertext (Base64):</label>
                <textarea
                  id="ciphertext"
                  value={ciphertext}
                  readOnly
                  rows={8}
                />
              </div>
              <div className="input-group">
                <label htmlFor="decryptedText">Decrypted Text:</label>
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

export default ExtendedVignerePage;
