import { Routes, Route, HashRouter } from "react-router-dom";

import DesignSystem from "./pages/design_system";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

import "./index.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designsystem" element={<DesignSystem />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
