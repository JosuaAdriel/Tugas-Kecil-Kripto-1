import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import AffineCipher from "../utils/AffineCipher.js";
import ReaderFile from "../components/ReaderFile.jsx";

const AffinePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [ciphertext, setCiphertext] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const affine = new AffineCipher(a, b);

  const checkCoprime = () => {
    // Check if 'a' is coprime with 26
      if (gcd(a, 26) !== 1) {
        alert("'a' must be coprime with 26.");
        return 1;
      }
    return 0; // 'a' is coprime with 26
  };
  

  const gcd = (a, b) => {
    // Calculate the greatest common divisor using Euclid's algorithm
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const encrypt = () => {
    if (checkCoprime() == 1) {
      window.location.reload();
    }
    const encryptedText = affine.encrypt(plaintext);
    setEncryptedText(encryptedText);
  };

  const decrypt = () => {
    if (checkCoprime() == 1) {
      window.location.reload();
    }
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
                <p>Affine cipher adalah perluasan dari algoritma caesar cipher yang diperoleh dengan mengalikan plainteks dengan suatu bilangan yang relatif prima dengan nilai pergeseran, kemudian hasilnya dijumlahkan dengan nilai pergeseran.</p>
              </div>
              <div className='reader'>
                <ReaderFile setPlaintext={setPlaintext} setCiphertext={setCiphertext}/>
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
                <label htmlFor="ciphertext">Ciphertext (Base64):</label>
                <textarea
                  id="ciphertext"
                  value={ciphertext}
                  onChange={(e) => setCiphertext(e.target.value)}
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

export default AffinePage;
