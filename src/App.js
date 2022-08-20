import Nav from "./Nav";
import Footer from "./Footer";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Footer />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
