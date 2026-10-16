import { Link } from "react-router";

function Hero() {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">ShowTime</h1>
          <p className="hero-description">
            Find and browse your favorite TV shows.
          </p>
          <div className="hero-actions">
            <Link to="/shows" className="btn btn-hero">
              Browse Shows
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
