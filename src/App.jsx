import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import VignerePage from "./pages/VigenerePage";
import ExtendedVignerePage from "./pages/ExtendedVignerePage";
import PlayfairPage from "./pages/PlayfairPage";
import ProductPage from "./pages/ProductPage";
import AffinePage from "./pages/AffinePage";
import AutokeyVigenerePage from "./pages/AutokeyVigenerePage";
import RC4Page from "./pages/RC4Page";
function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/vignere" Component={VignerePage} />
        <Route path="/extended-vignere" Component={ExtendedVignerePage} />
        <Route path="/playfair" Component={PlayfairPage} />
        <Route path="/product" Component={ProductPage} />
        <Route path="/affine" Component={AffinePage} />
        <Route path="/autokey-vigenere" Component={AutokeyVigenerePage} />
        <Route path="/rc4" Component={RC4Page} />
      </Routes>
    </div>
  );
}

export default App;
