import { Col } from "react-bootstrap";
import { useState } from "react";

function CipherTextComponent({
  plaintext,
  setPlaintext,
  ciphertext,
  setCiphertext,
  cipher,
}) {
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const encrypt = () => {
    const encryptedText = cipher.encrypt(plaintext);
    setEncryptedText(encryptedText);
  };

  const decrypt = () => {
    const decryptedText = cipher.decrypt(ciphertext);
    setDecryptedText(decryptedText);
  };
  return (
    <>
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
          <label htmlFor="ciphertext">Ciphertext:</label>
          <textarea
            id="ciphertext"
            value={ciphertext}
            onChange={(e) => setCiphertext(e.target.value)}
            rows={8}
          />
        </div>
        <div className="input-group">
          <label htmlFor="decryptedText">Decrypted Ciphertext:</label>
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
    </>
  );
}

export default CipherTextComponent;
