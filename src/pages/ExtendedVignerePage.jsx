import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ExtendedVigenereCipher from "../utils/ExtendedVigenereCipher.js";
import ReaderFile from "../components/ReaderFile.jsx";

const ExtendedVignerePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [encryptedFile, setEncryptedFile] = useState();
  const [decryptedFile, setDecryptedFile] = useState();
  const [selected, setSelected] = useState("");

  const extendedVigenere = new ExtendedVigenereCipher(key); //tinggal ganti metode nya disini

  const encrypt = () => {
    if (selected == "Text") {
      const encryptedText = extendedVigenere.encrypt(plaintext); //tinggal ganti metode nya disini
      setEncryptedText(encryptedText);
    } else {
      // Encrypt file
      // setEncryptedFile(...)
    }
  };

  const decrypt = () => {
    if (selected == "Text") {
      const decryptedText = extendedVigenere.decrypt(ciphertext); //tinggal ganti metode nya disini
      setDecryptedText(decryptedText);
    } else {
      // Decrypt file
      // setDecryptedFile(...)
    }
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
              <div className="reader">
                {selected != "Text" && (
                  <ReaderFile
                    setPlaintext={setPlaintext}
                    setCiphertext={setCiphertext}
                  />
                )}
              </div>
              <div className="input-group">
                <label htmlFor="key">Key:</label>
                <textarea
                  id="key"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  rows={1} // Set the number of rows for the textarea
                />
              </div>
            </Col>
            {selected == "Text" ? (
              <>
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
              </>
            ) : (
              <>
                {" "}
                <Col className="col-spacing">
                  <div className="button-group">
                    <button onClick={encrypt}>Encrypt File</button>
                  </div>
                </Col>
                <Col className="col-spacing">
                  <div className="button-group">
                    <button onClick={decrypt}>Decrypt File</button>
                  </div>
                </Col>
              </>
            )}
          </Row>
          <Row className="download d-flex align-items-center">
            {selected == "Text" && <p>Download Cipher Text File Disini.</p>}
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default ExtendedVignerePage;
