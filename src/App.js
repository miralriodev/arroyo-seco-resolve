import { Routes, Route, useLocation } from "react-router-dom";
import Splash from "./components/Splash";
import Home from "./components/Home";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Reservations from "./components/Reservations";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/"; // ocultar en Splash

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
