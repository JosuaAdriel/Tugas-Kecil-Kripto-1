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
              <h3>Presented By:</h3>
              <h2>18221065 Josua Adriel Sinabutar</h2>
              <h2>18221162 Ceavin Rufus De Prayer Purba</h2>
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
