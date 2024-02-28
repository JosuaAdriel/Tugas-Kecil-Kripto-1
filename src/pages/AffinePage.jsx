import { Container, Row, Col } from "react-bootstrap";
import { useState, useRef } from "react";
import AffineCipher from "../utils/AffineCipher.js";
import ReaderTxt from "../components/ReaderTxt.jsx";
import CipherTextComponent from "../components/CipherTextComponent.jsx";

const AffinePage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [ciphertext, setCiphertext] = useState("");
  const decrementButtonRef = useRef(null);
  const incrementButtonRef = useRef(null);

  const affine = new AffineCipher(a, b);

  const isCoprimeWith26 = (num) => {
    // Check if 'a' is coprime with 26
    return gcd(num, 26) === 1;
  };

  const gcd = (a, b) => {
    // Calculate the greatest common divisor using Euclid's algorithm
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const handleBlurA = (e) => {
    if (
      e.relatedTarget !== decrementButtonRef.current &&
      e.relatedTarget !== incrementButtonRef.current
    ) {
      setA((prevValue) => {
        if (!isCoprimeWith26(prevValue)) {
          let newValue = prevValue + 1;
          while (!isCoprimeWith26(newValue)) {
            newValue++;
          }
          return newValue;
        } else {
          return prevValue;
        }
      });
    }
  };
  const handleChangeA = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue)) {
      if (inputValue !== 0) {
        setA(inputValue);
      }
    } else {
      setA("");
    }
  };
  const handleChangeB = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue)) {
      if (inputValue !== 0) {
        setB(inputValue);
      }
    } else {
      setB("");
    }
  };
  const handleIncrementA = () => {
    setA((prevValue) => {
      let newValue = prevValue + 1;
      while (!isCoprimeWith26(newValue)) {
        newValue++;
      }
      return newValue;
    });
  };

  const handleDecrementA = () => {
    setA((prevValue) => {
      if (prevValue !== 1) {
        let newValue = prevValue - 1;
        while (newValue > 0 && !isCoprimeWith26(newValue)) {
          newValue--;
        }
        return newValue;
      } else {
        return 1;
      }
    });
  };
  const handleIncrementB = () => {
    setB((prevValue) => {
      let newValue = prevValue + 1;

      return newValue;
    });
  };

  const handleDecrementB = () => {
    setB((prevValue) => {
      if (prevValue !== 1) {
        let newValue = prevValue - 1;

        return newValue;
      } else {
        return 1;
      }
    });
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col className="col-spacing">
              <div className="">
                <h1>Affine Cipher</h1>
                <p>
                  Affine cipher adalah perluasan dari algoritma caesar cipher
                  yang diperoleh dengan mengalikan plainteks dengan suatu
                  bilangan yang relatif prima dengan nilai pergeseran, kemudian
                  hasilnya dijumlahkan dengan nilai pergeseran.
                </p>
              </div>
              <div className="reader">
                <ReaderTxt
                  setPlaintext={setPlaintext}
                  setCiphertext={setCiphertext}
                />
              </div>
              <div className="input-group">
                <div>
                  <label htmlFor="a">a:</label>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className=""
                  >
                    <button ref={decrementButtonRef} onClick={handleDecrementA}>
                      -
                    </button>
                    <input
                      id="a"
                      value={a}
                      onChange={handleChangeA}
                      onBlur={handleBlurA}
                    />
                    <button ref={incrementButtonRef} onClick={handleIncrementA}>
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="b">b:</label>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className=""
                  >
                    <button onClick={handleDecrementB}>-</button>
                    <input id="b" value={b} onChange={handleChangeB} />
                    <button onClick={handleIncrementB}>+</button>
                  </div>
                </div>
              </div>
            </Col>
            <CipherTextComponent
              plaintext={plaintext}
              setPlaintext={setPlaintext}
              ciphertext={ciphertext}
              setCiphertext={setCiphertext}
              cipher={affine}
            />
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default AffinePage;
