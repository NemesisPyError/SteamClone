import { Link } from 'react-router-dom';
import './navbar.css';

function SiteNavigation() {
  return (
    <nav>
      <Link to="/">VAPOR</Link>

      <div className="menu">
        <Link to="/tienda">Tienda</Link>
        <ul className="submenu">
          <li><Link to="/inicio">Inicio</Link></li>
          <li><Link to="/deseados">Lista de Deseados</Link></li>
        </ul>
      </div>

      <div className="menu">
        <Link to="/comunidad">Comunidad</Link>
        <ul className="submenu">
          <li><Link to="/comunidad">Discusiones</Link></li>
          <li><Link to="/amigos">Amigos</Link></li>
        </ul>
      </div>

      <input type="text" placeholder="buscar" /><span>🔍 Buscar</span>

      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/soporte">Soporte</Link>

      <div className="menu">
        <Link to="/idioma">Idioma</Link>
        <ul className="submenu">
          <li><Link to="/idioma/es">Spanish</Link></li>
          <li><Link to="/idioma/en">English</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default SiteNavigation;
