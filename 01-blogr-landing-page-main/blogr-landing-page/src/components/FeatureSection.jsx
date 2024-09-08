import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../style/FeatureSection.css'; 
import featureImage from '../assets/illustration-editor-desktop.svg'; 
import phoneImage from '../assets/illustration-phones.svg'; 
import computerImage from '../assets/illustration-laptop-desktop.svg'; 

const FeaturesSection = () => {
  return (
    <section className="features-section py-5" >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Designed for the Future</h2>
        </div>
        
        <div className="row">
          <div className="col-md-6 ">
            <div className="card border-0 h-50">
              <div className="card-body">
                <h5 className="card-title fw-bold">Introducing an extensible editor</h5>
                <p className="card-text">
                  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                </p>
              </div>
            </div> 
            <div className="card border-0 h-50">
              <div className="card-body">
                <h5 className="card-title fw-bold">Robust content management</h5>
                <p className="card-text">
                  Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you are in full control.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-50 d-flex align-items-center justify-content-center">
              <img src={featureImage} alt="Feature Visual" className="img-fluid" />
            </div>
          </div>
        </div>
       
        <div className="row feature-background mb-4">
          <div className="col-md-6">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <img src={phoneImage} alt="Feature Visual" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 ">          
              <div className="card text-white ">
                <div className="card-img-overlay">
                  <h5 className="card-title">State of the Art Infrastructure</h5>
                  <p className="card-text">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <img src={computerImage} alt="Feature Visual" className="img-fluid" />
              </div>
            </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Free, open, simple</h5>
                <p className="card-text">
                  Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
