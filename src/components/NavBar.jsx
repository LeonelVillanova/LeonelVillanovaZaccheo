import CartWidget from './CartWidget';
import './styles.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GALAGER SKATEBOARDING</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PRODUCTOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACTO</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
    </div>
  );
};

export default NavBar;