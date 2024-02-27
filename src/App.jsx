import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import VignerePage from "./pages/VigenerePage";
import ExtendedVignerePage from "./pages/ExtendedVignerePage";
import PlayfairPage from "./pages/PlayfairPage";
import ProductPage from "./pages/ProductPage";

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
      </Routes>
    </div>
  );
}

export default App;
