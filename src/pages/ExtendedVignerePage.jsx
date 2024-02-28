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
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [encryptedFile, setEncryptedFile] = useState();
  const [decryptedFile, setDecryptedFile] = useState();
  const [selected, setSelected] = useState("Text");

  const extendedVigenere = new ExtendedVigenereCipher(key); //tinggal ganti metode nya disini

  const encrypt = () => {
    if (selected == "Text") {
      const encryptedText = extendedVigenere.encrypt(plaintext); //tinggal ganti metode nya disini
      setEncryptedText(encryptedText);
    } else {
      // Encrypt file
      const encryptedContent = extendedVigenere.encryptFile(file);
      setEncryptedFile(encryptedContent);
      setDecryptedFile(null);
    }
  };

  const decrypt = () => {
    if (selected == "Text") {
      const decryptedText = extendedVigenere.decrypt(ciphertext); //tinggal ganti metode nya disini
      setDecryptedText(decryptedText);
    } else {
      // Decrypt file
      const decryptedContent = extendedVigenere.decryptFile(file);
      setDecryptedFile(decryptedContent);
      setEncryptedFile(null);
    }
  };

  const downloadEncryptedFile = () => {
    const blob = new Blob([encryptedFile]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      fileName.split(".")[0] + "_encrypted." + fileName.split(".")[1]; // Set desired file name here
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadDecryptedFile = () => {
    const blob = new Blob([decryptedFile]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      fileName.split(".")[0] + "_decrypted." + fileName.split(".")[1]; // Set desired file name here
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
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
              <div className="input-group">
                <label htmlFor="selectOption">Select input source:</label>
                <select
                  id="selectOption"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  <option value="Text">Text</option>
                  <option value="File">File</option>
                </select>
              </div>
              <div className="reader">
                {selected != "Text" && (
                  <ReaderFile setFile={setFile} setFileName={setFileName} />
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
                    <p>or</p>
                    <button onClick={decrypt}>Decrypt File</button>
                  </div>
                </Col>
              </>
            )}
          </Row>
          <Row className="download d-flex align-items-center">
            {selected !== "Text" && encryptedFile && (
              <div>
                <p>File Encrypted!</p>
                <button onClick={downloadEncryptedFile}>
                  Download Encrypted File
                </button>
              </div>
            )}
            {selected !== "Text" && decryptedFile && (
              <div>
                <p>File Decrypted!</p>
                <button onClick={downloadDecryptedFile}>
                  Download Decrypted File
                </button>
              </div>
            )}
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default ExtendedVignerePage;
