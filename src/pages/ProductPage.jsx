import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import VigenereCipher from "../utils/VigenereCipher.js"; //Ganti import metode disini
import CipherTextComponent from "../components/CipherTextComponent.jsx";
import ReaderTxt from "../components/ReaderTxt.jsx";
import TranspositionCipher from "../utils/TranspositionCipher.js";
import ProductCipher from "../utils/ProductCipher.js";

const ProductPage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const vigenere = new VigenereCipher(key1);
  const transposition = new TranspositionCipher(key2);
  const product = new ProductCipher([vigenere, transposition]);

  return (
    <div className="homepage">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col className="col-spacing">
            <div className="">
              <h1>Product Cipher</h1>
              <p>
                Metode menyandikan teks (26 karakter alfabet) dengan kombinasi
                Vigenere Cipher (26 huruf alfabet) dan cipher transposisi
                berbasis kolom (26 huruf alfabet).
              </p>
            </div>
            <div className="reader">
              <ReaderTxt
                setPlaintext={setPlaintext}
                setCiphertext={setCiphertext}
              />
            </div>
            <div className="input-group">
              <label htmlFor="key1">Key 1 (Vigenere cipher key):</label>
              <input
                id="key1"
                value={key1}
                type="text"
                onChange={(e) =>
                  setKey1(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
                }
              />
              <label htmlFor="key2">Key 2 (Transposition cipher key):</label>
              <input
                id="key2"
                value={key2}
                type="number"
                onChange={(e) => setKey2(Number(e.target.value))}
              />
            </div>
          </Col>
          <CipherTextComponent
            plaintext={plaintext}
            setPlaintext={setPlaintext}
            ciphertext={ciphertext}
            setCiphertext={setCiphertext}
            cipher={product}
          />
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
