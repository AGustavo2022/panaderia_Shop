import CartWidget from "../cartWidget/CartWidget";
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (

    <header>
      <div className="container-fluid p-3 mb-2 bg-warning">
        <div className="row d-flex align-items-center">
          <div className="col-3">
              <Link to='/'>PANADERIA-SHOP</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="col-6">
              <ul className="flex-row justify-content-around navbar-nav ">
                  <li className="nav-item">
                    <Link to='/category/1'>Panificado</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/category/2'>Pasteleria</Link>
                  </li>
              </ul>
          </div>
          <div className="col-3 d-flex justify-content-end">
          <CartWidget />
          </div>
        </div>
      </div>
    </header>

  );
}

