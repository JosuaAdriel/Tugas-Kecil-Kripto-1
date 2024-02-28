import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaRegPaste } from "react-icons/fa6";

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

  const downloadEncryptedText = () => {
    const blob = new Blob([encryptedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "encrypted.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadDecryptedText = () => {
    const blob = new Blob([decryptedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "decrypted.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Col className="col-spacing">
        <div className="input-group">
          <div style={{ width: "100%" }} className="flex justify-between">
            <label htmlFor="plaintext">Plaintext:</label>
            <div style={{ marginRight: "4px", gap: "4px" }} className="flex">
              <FaRegCopy
                style={{ cursor: "pointer" }}
                onClick={() => navigator.clipboard.writeText(plaintext)}
              />
              <FaRegPaste
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigator.clipboard.readText().then((text) => {
                    setPlaintext(text);
                  })
                }
              />
            </div>
          </div>
          <textarea
            id="plaintext"
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
            rows={6} // Set the number of rows for the textarea
          />
        </div>
        <div className="input-group">
          <div style={{ width: "100%" }} className="flex justify-between">
            <label htmlFor="encryptedPlainTextt">Encrypted Text (UTF-8):</label>
            <div style={{ marginRight: "4px", gap: "4px" }} className="flex">
              <FaRegCopy
                style={{ cursor: "pointer" }}
                onClick={() => navigator.clipboard.writeText(encryptedText)}
              />
            </div>
          </div>
          <textarea
            id="encryptedPlainTextt"
            value={encryptedText}
            readOnly
            rows={3}
          />
        </div>
        <div className="input-group">
          <div style={{ width: "100%" }} className="flex justify-between">
            <label htmlFor="encryptedPlainText">Encrypted Text (Base64):</label>
            <div style={{ marginRight: "4px", gap: "4px" }} className="flex">
              <FaRegCopy
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigator.clipboard.writeText(btoa(encryptedText))
                }
              />
            </div>
          </div>
          <textarea
            id="encryptedPlainTextt"
            value={btoa(encryptedText)}
            readOnly
            rows={4}
          />
        </div>
        <div className="button-group">
          <button onClick={encrypt}>Encrypt</button>
        </div>
        {encryptedText && (
          <Row className="download">
            <p>UTF-8 Encrypted File is Ready!</p>
            <button onClick={downloadEncryptedText}>
              Download encrypted.txt
            </button>
          </Row>
        )}
      </Col>
      <Col className="col-spacing">
        <div className="input-group">
          <div style={{ width: "100%" }} className="flex justify-between">
            <label htmlFor="ciphertext">Ciphertext:</label>
            <div style={{ marginRight: "4px", gap: "4px" }} className="flex">
              <FaRegCopy
                style={{ cursor: "pointer" }}
                onClick={() => navigator.clipboard.writeText(ciphertext)}
              />
              <FaRegPaste
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigator.clipboard.readText().then((text) => {
                    setCiphertext(text);
                  })
                }
              />
            </div>
          </div>
          <textarea
            id="ciphertext"
            value={ciphertext}
            onChange={(e) => setCiphertext(e.target.value)}
            rows={8}
          />
        </div>
        <div className="input-group">
          <div style={{ width: "100%" }} className="flex justify-between">
            <label htmlFor="decryptedText">Decrypted Ciphertext:</label>
            <div style={{ marginRight: "4px", gap: "4px" }} className="flex">
              <FaRegCopy
                style={{ cursor: "pointer" }}
                onClick={() => navigator.clipboard.writeText(decryptedText)}
              />
            </div>
          </div>
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
        {decryptedText && (
          <Row className="download">
            <p>File Decrypted!</p>
            <button onClick={downloadDecryptedText}>
              Download decrypted.txt file
            </button>
          </Row>
        )}
      </Col>
    </>
  );
}

export default CipherTextComponent;
