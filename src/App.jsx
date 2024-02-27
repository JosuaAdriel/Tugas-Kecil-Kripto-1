import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import VignerePage from "./pages/VigenerePage";
import ExtendedVignerePage from "./pages/ExtendedVignerePage";
import PlayfairPage from "./pages/PlayfairPage";
import ProductPage from "./pages/ProductPage";
import AffinePage from "./pages/AffinePage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="homepage">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/vignere" Component={VignerePage} />
          <Route path="/extended-vignere" Component={ExtendedVignerePage} />
          <Route path="/playfair" Component={PlayfairPage} />
          <Route path="/product" Component={ProductPage} />
          <Route path="/affine" Component={AffinePage} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
