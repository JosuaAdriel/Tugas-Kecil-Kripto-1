//PlayfairPage.jsx
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import PlayfairCipher from "../utils/PlayfairCipher.js"; //Ganti import metode disini
import ReaderTxt from "../components/ReaderTxt.jsx";
import CipherTextComponent from "../components/CipherTextComponent.jsx";

const PlayfairPage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const playfair = new PlayfairCipher(key); //tinggal ganti metode nya disini

  const organizeIntoMatrix = (array) => {
    let matrix = [];
    for (let i = 0; i < array.length; i += 5) {
      matrix.push(array.slice(i, i + 5));
    }
    return matrix;
  };

  const matrixSquare = organizeIntoMatrix(playfair.keySquare);

  return (
    <div className="homepage">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col className="col-spacing">
            <div className="">
              <h1>Playfair Cipher</h1>
              <p>
                Metode menyandikan teks (26 karakter alfabet) dengan
                mengenkripsi pasangan huruf (bigram) untuk mempersulit analisis
                frekuensi kemunculan huruf pada teks.
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
            <div>
              <h3>Key Square:</h3>
              {matrixSquare.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                  {row.split("").map((element, columnIndex) => (
                    <div
                      className="flex justify-center items-center border border-black"
                      key={columnIndex}
                      style={{ height: 40, width: 40, margin: 2 }}
                    >
                      <p className="w-full m-0">{element}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Col>
          <CipherTextComponent
            plaintext={plaintext}
            setPlaintext={setPlaintext}
            ciphertext={ciphertext}
            setCiphertext={setCiphertext}
            cipher={playfair}
          />
        </Row>
      </Container>
    </div>
  );
};

export default PlayfairPage;
