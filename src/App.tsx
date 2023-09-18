import { BrowserRouter, Routes, Route } from "react-router-dom";

import DesignSystem from "./pages/design_system";
import Home from "./pages/home";
import Ide from "./pages/about";

import "./assets/styles/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designsystem" element={<DesignSystem />} />
          <Route path="/ide" element={<Ide />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
