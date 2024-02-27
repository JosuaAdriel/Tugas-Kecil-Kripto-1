import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import AffineCipher from "../utils/AffineCipher.js";
import ReaderFile from "../components/ReaderFile.jsx";

const VigenerePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const affine = new AffineCipher(3, 8);

  const encrypt = () => {
    const encryptedText = affine.encrypt(plaintext);
    setCiphertext(encryptedText);
  };

  const decrypt = () => {
    const decryptedText = affine.decrypt(ciphertext);
    setDecryptedText(decryptedText);
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col className="col-spacing">
              <div className="">
                <h1>Affine Cipher</h1>
                <p></p>
              </div>
              <ReaderFile onlyTxt={false} setPlaintext={setPlaintext} />
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
                  onChange={(e) =>
                    setKey(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))
                  }
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

export default VigenerePage;
