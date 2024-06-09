<<<<<<< HEAD
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page';
import About from './pages/About.page';
import Event from './pages/Event.page';
import Navbar from './components/Navbar/Navbar.component';
import Footer from './components/Footer/Footer.component';
import AdminGuard from './guards/AdminGuard.component';
import Admin from './pages/Admin.page';
import RegistrationPage from './pages/Registration.page';
=======
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.page'
import About from './pages/About.page'
import Event from './pages/Event.page'
import Navbar from './components/Navbar/Navbar.component'
import Footer from './components/Footer/Footer.component'
<<<<<<< HEAD
>>>>>>> 5259692 (firebase initial setup)
=======
import AdminGuard from './guards/AdminGuard.component'
import Admin from './pages/Admin.page'
>>>>>>> 057c332 (added admin flow and firebase hook)

function App() {
  return (
    <div className="bg-background">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/events" element={<Event />}></Route>
          <Route path="/admin" element={<AdminGuard />}>
            <Route path="" element={<Admin />}></Route>
          </Route>
<<<<<<< HEAD
          <Route path="/register" element={<RegistrationPage />}></Route>
=======
>>>>>>> 057c332 (added admin flow and firebase hook)
        </Routes>
        <Footer />
      </HashRouter>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 5259692 (firebase initial setup)
}

export default App
