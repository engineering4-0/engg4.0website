import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.page'
import About from './pages/About.page'
import Event from './pages/Event.page'
import Navbar from './components/Navbar/Navbar.component'
import Footer from './components/Footer/Footer.component'
import AdminGuard from './guards/AdminGuard.component'
import Admin from './pages/Admin.page'

function App() {
  return (
    <div className="bg-background flex flex-col">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/events" element={<Event />}></Route>
          <Route path="/admin" element={<AdminGuard />}>
            <Route path="" element={<Admin />}></Route>
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
