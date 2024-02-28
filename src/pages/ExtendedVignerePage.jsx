import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ExtendedVigenereCipher from "../utils/ExtendedVigenereCipher.js";
import ReaderFile from "../components/ReaderFile.jsx";
import CipherTextComponent from "../components/CipherTextComponent.jsx";

const ExtendedVignerePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [encryptedFile, setEncryptedFile] = useState();
  const [decryptedFile, setDecryptedFile] = useState();
  const [selected, setSelected] = useState("Text");

  const extendedVigenere = new ExtendedVigenereCipher(key); //tinggal ganti metode nya disini

  const encryptFile = () => {
    // Encrypt file
    const encryptedContent = extendedVigenere.encryptFile(file);
    setEncryptedFile(encryptedContent);
    setDecryptedFile(null);
  };

  const decryptFile = () => {
    // Decrypt file
    const decryptedContent = extendedVigenere.decryptFile(file);
    setDecryptedFile(decryptedContent);
    setEncryptedFile(null);
  };

  const downloadEncryptedFile = () => {
    const blob = new Blob([encryptedFile]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      fileName.split(".")[0] +
      "_encrypted." +
      fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2); // Set desired file name here
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
      fileName.split(".")[0] +
      "_decrypted." +
      fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2); // Set desired file name here
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
              <div className="input-group flex gap-2">
                <label htmlFor="selectOption">Select input source:</label>
                <select
                  id="selectOption"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="p-2"
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
              <CipherTextComponent
                plaintext={plaintext}
                setPlaintext={setPlaintext}
                ciphertext={ciphertext}
                setCiphertext={setCiphertext}
                cipher={extendedVigenere}
              />
            ) : (
              <>
                <Col className="col-spacing">
                  <Row className="">
                    <div className="button-group">
                      <button onClick={encryptFile}>Encrypt File</button>
                      <p>or</p>
                      <button onClick={decryptFile}>Decrypt File</button>
                    </div>
                  </Row>
                  <Row className="file-result">
                    {selected !== "Text" && encryptedFile && (
                      <>
                        <p>File Encrypted!</p>
                        <button onClick={downloadEncryptedFile}>
                          Download Encrypted File
                        </button>
                      </>
                    )}
                    {selected !== "Text" && decryptedFile && (
                      <>
                        <p>File Decrypted!</p>
                        <button onClick={downloadDecryptedFile}>
                          Download Decrypted File
                        </button>
                      </>
                    )}
                  </Row>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default ExtendedVignerePage;
