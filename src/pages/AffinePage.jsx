import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import AffineCipher from "../utils/AffineCipher.js";
import ReaderFile from "../components/ReaderFile.jsx";

const AffinePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [ciphertext, setCiphertext] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const affine = new AffineCipher(a, b);

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
              <ReaderFile setPlaintext={setPlaintext} />
            </Col>
            <Col className="col-spacing">
              <div className="input-group">
                <label htmlFor="plaintext">Plaintext:</label>
                <textarea
                  id="plaintext"
                  value={plaintext}
                  onChange={(e) => setPlaintext(e.target.value)}
                  rows={10} // Set the number of rows for the textarea
                />
              </div>
              <div className="input-group">
                <label htmlFor="a">a:</label>
                <input
                  id="b"
                  value={a}
                  type="number"
                  onChange={(e) => setA(Number(e.target.value))}
                />
                <label htmlFor="b">b:</label>
                <input
                  id="b"
                  value={b}
                  type="number"
                  onChange={(e) => setB(Number(e.target.value))}
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
                  rows={10}
                />
              </div>
              <div className="input-group">
                <label htmlFor="decryptedText">Decrypted Text:</label>
                <textarea
                  id="decryptedText"
                  value={decryptedText}
                  readOnly
                  rows={10}
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

export default AffinePage;
