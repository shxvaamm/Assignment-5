import { Link } from "react-router";

function NotFound() {
  return (
    <div className="container">
      <div className="status-message">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-search">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
