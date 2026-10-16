import { Link } from "react-router";

function ShowCard({ show }) {
  let image = "https://placehold.co/210x295?text=No+Image";
  if (show.image && show.image.medium) {
    image = show.image.medium;
  }

  let genre = "Genre: N/A";
  if (show.genres && show.genres.length > 0) {
    genre = show.genres.join(", ");
  }

  let rating = "";
  if (show.rating && show.rating.average) {
    rating = show.rating.average;
  }

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={show.name} className="card-image" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{show.name}</h3>

        <p className="card-genre">{genre}</p>

        <div className="card-meta">
          {rating && <span>⭐ {rating}</span>}
        </div>

        <Link to={`/shows/${show.id}`} className="btn btn-details">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
