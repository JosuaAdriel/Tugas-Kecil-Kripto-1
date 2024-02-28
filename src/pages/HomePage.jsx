import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/HeroImage.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col>
            <h1>Selamat Datang!</h1>
            <h1>Tugas MK II403</h1>
            <h1>Kriptografi dan Koding</h1>
            <br />
            <h3>Presented By:</h3>
            <li style={{ listStyle: "none" }}>
              18221065 Josua Adriel Sinabutar
            </li>
            <li style={{ listStyle: "none" }}>
              18221162 Ceavin Rufus De Prayer Purba
            </li>
          </Col>
          <Col className="conan-image">
            <img src={HeroImage} alt="hero-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
