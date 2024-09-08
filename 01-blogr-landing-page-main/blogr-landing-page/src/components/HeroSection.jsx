import 'bootstrap/dist/css/bootstrap.min.css'; 
import heroImage from '../assets/bg-pattern-intro-desktop.svg'; 


const HeroSection = () => {
  return (
    <section className="hero-section text-white" style={{ 
        backgroundImage: `linear-gradient(to right, rgba(255, 129, 103, 0.7), rgba(255, 51, 51, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh' 
      }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1 className="display-4 fw-bold">A modern publishing platform</h1>
              <p className="lead text-center">Grow your audience and build your online brand</p>
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-light btn-orange-text btn-lg me-2">Start for Free</button>
                <button className="btn btn-outline-light btn-lg">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
