import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Vigenere from "../utils/Vigenere.js";

const VigenerePage = () => {
    const [plaintext, setPlaintext] = useState('');
    const [key, setKey] = useState('');
    const [ciphertext, setCiphertext] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const vigenere = new Vigenere(key);

    const encrypt = () => {
        const encryptedText = vigenere.encrypt(plaintext);
        setCiphertext(encryptedText);
    };

    const decrypt = () => {
        const decryptedText = vigenere.decrypt(ciphertext);
        setDecryptedText(decryptedText);
    };

    return (
        <div className="homepage">
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="header-box d-flex align-items-center">
                        <Col className="col-spacing">
                            <h1>Vigenere Cipher</h1>
                            <p>Metode menyandikan teks (26 karakter alfabet) dengan menggunakan deretan sandi Caesar berdasarkan huruf-huruf pada kata kunci.</p>
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
                                <label htmlFor="key">Key:</label>
                                <textarea
                                    id="key"
                                    value={key}
                                    onChange={(e) => setKey(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))}
                                    rows={10} // Set the number of rows for the textarea
                                />
                            </div>
                            <div className="button-group">
                                <button onClick={encrypt}>Encrypt</button>
                            </div>
                        </Col>
                        <Col className="col-spacing">
                            <div className="input-group">
                                <label htmlFor="ciphertext">Ciphertext (Base64):</label>
                                <textarea id="ciphertext" value={ciphertext} readOnly rows={10} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="decryptedText">Decrypted Text:</label>
                                <textarea id="decryptedText" value={decryptedText} readOnly rows={10}/>
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

export default VigenerePage;
