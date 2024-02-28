import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import VigenereCipher from "../utils/VigenereCipher.js";
import ReaderTxt from "../components/ReaderTxt.jsx";
import CipherTextComponent from "../components/CipherTextComponent.jsx";

const VigenerePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const vigenere = new VigenereCipher(key);

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
              <div className="reader">
                <ReaderTxt
                  setPlaintext={setPlaintext}
                  setCiphertext={setCiphertext}
                />
              </div>
              <div className="input-group">
                <label htmlFor="key">Key:</label>
                <textarea
                  id="key"
                  value={key}
                  onChange={(e) =>
                    setKey(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
                  }
                  rows={1}
                />
              </div>
            </Col>
            <CipherTextComponent
              plaintext={plaintext}
              setPlaintext={setPlaintext}
              ciphertext={ciphertext}
              setCiphertext={setCiphertext}
              cipher={vigenere}
            />
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default VigenerePage;
