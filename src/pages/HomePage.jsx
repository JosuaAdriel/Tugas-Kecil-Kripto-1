import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/HeroImage.png";
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <h1>Selamat Datang!</h1>
              <h1>Tugas MK II403</h1>
              <h1>Kriptografi dan Koding</h1>
              <p>Situs ini dibuat oleh </p>
              <li> 18221065 Josua Adriel Sinabutar dan</li>
              <li>18221162 Ceavin Rufus De Prayer Purba</li>
            </Col>
            <Col>
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
