import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">Arroyo Seco Resolve</div>
      <ul className="navbar__links">
        <li><NavLink to="/home">Inicio</NavLink></li>
        <li><NavLink to="/services">Servicios</NavLink></li>
        <li><NavLink to="/reservations">Reservas</NavLink></li>
        <li><NavLink to="/profile">Perfil</NavLink></li>
        <li><NavLink to="/admin">Admin</NavLink></li>
      </ul>
    </nav>
  );
}