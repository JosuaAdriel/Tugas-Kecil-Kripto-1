//AutokeyVigenerePage.jsx
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import AutokeyVigenereCipher from "../utils/AutokeyVigenereCipher.js";
import ReaderTxt from "../components/ReaderTxt.jsx";
import CipherTextComponent from "../components/CipherTextComponent.jsx";

const AutoKeyVigenerePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const autoKeyVigenere = new AutokeyVigenereCipher(key); //tinggal ganti metode nya disini

  return (
    <div className="homepage">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col className="col-spacing">
            <div className="">
              <h1>Auto-key Vigenere Cipher</h1>
              <p>
                Metode menyandikan teks, variasi dari Vigenere Cipher, yang
                menggunakan kata kunci sebagai bagian dari teks terenkripsi.
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
                rows={1} // Set the number of rows for the textarea
              />
            </div>
          </Col>
          <CipherTextComponent
            plaintext={plaintext}
            setPlaintext={setPlaintext}
            ciphertext={ciphertext}
            setCiphertext={setCiphertext}
            cipher={autoKeyVigenere}
          />
        </Row>
      </Container>
    </div>
  );
};

export default AutoKeyVigenerePage;
