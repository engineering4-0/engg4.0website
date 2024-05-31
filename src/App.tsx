import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.component";
import About from "./pages/About.page";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App() {

  return (
    <div className="bg-background">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
