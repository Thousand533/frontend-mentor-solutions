import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Blogr</h5>
          </div>
          
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Overview</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Marketplace</a></li>
              <li><a href="#" className="text-white text-decoration-none">Features</a></li>
              <li><a href="#" className="text-white text-decoration-none">Integrations</a></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Team</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Connect</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white text-decoration-none">Newsletter</a></li>
              <li><a href="#" className="text-white text-decoration-none">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-3">
          <p className="small">© 2024 Blogr. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
