import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../style/Header.css'; 

const Header = () => {
  return (
    <header className="header-transparent" style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Blogr</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link text-white" href="#">Product</a>
              <a className="nav-item nav-link text-white" href="#">Company</a>
              <a className="nav-item nav-link text-white" href="#">Connect</a>
            </div>
            <div className="navbar-nav ms-auto">
              <a className="nav-item nav-link text-white" href="#">Login</a>
              <li className="nav-item">
                <button className="btn btn-light btn-orange-text ms-2">Sign Up</button>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
