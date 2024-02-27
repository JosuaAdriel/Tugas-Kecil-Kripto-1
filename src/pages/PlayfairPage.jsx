import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import PlayfairCipher from "../utils/PlayfairCipher.js"; //Ganti import metode disini
import ReaderFile from "../components/ReaderFile.jsx";

const PlayfairPage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const playfair = new PlayfairCipher(key); //tinggal ganti metode nya disini

  const encrypt = () => {
    const encryptedText = playfair.encrypt(plaintext); //tinggal ganti metode nya disini
    setCiphertext(encryptedText);
  };

  const decrypt = () => {
    const decryptedText = playfair.decrypt(ciphertext); //tinggal ganti metode nya disini
    setDecryptedText(decryptedText);
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col className="col-spacing">
              <div className="">
                <h1>Playfair Cipher</h1>
                <p>
                  Metode menyandikan teks (26 karakter alfabet) dengan
                  mengenkripsi pasangan huruf (bigram) untuk mempersulit
                  analisis frekuensi kemunculan huruf pada teks.
                </p>
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
                  onChange={(e) =>
                    setCiphertext(e.target.value)
                  }
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

export default PlayfairPage;
