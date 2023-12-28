import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand qr-font2 fs-2" to="/">
          إِسْلَامُنَا
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                القرآن
              </a>
              <ul class="dropdown-menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    قراءة القرآن
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reciters">
                    القراء
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/azkar">
                لاذكار
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/azan">
                لاذان
              </Link>
            </li>
            {/* <li className="nav-item">
            <Link className="nav-link" to="/favorites">المفضلة</Link>
          </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
