import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load show details");
        }
        return res.json();
      })
      .then((data) => {
        setShow(data);
        return fetch(`https://api.tvmaze.com/shows/${id}/cast`);
      })
      .then((res) => res.json())
      .then((castData) => {
        setCast(castData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div className="status-message">
          <h2>Loading show details...</h2>
        </div>
      </div>
    );
  }

  if (error || !show) {
    return (
      <div className="container">
        <div className="status-message">
          <h2>Show not found</h2>
          <p>{error}</p>
          <Link to="/shows" className="btn btn-search">
            Back to Shows
          </Link>
        </div>
      </div>
    );
  }

  let image = "https://placehold.co/210x295?text=No+Image";
  if (show.image && show.image.medium) {
    image = show.image.medium;
  } else if (show.image && show.image.original) {
    image = show.image.original;
  }

  let summary = "No summary available.";
  if (show.summary) {
    summary = show.summary.replace(/<[^>]+>/g, "");
    if (summary.length > 220) {
      summary = summary.slice(0, 220) + "...";
    }
  }

  return (
    <div className="container">
      <Link to="/shows" className="back-link">
        &larr; Back to Shows
      </Link>

      <div className="details-card">
        <div className="details-poster">
          <img src={image} alt={show.name} />
        </div>

        <div className="details-info">
          <h1>{show.name}</h1>

          <div className="details-summary">
            <h3>Summary</h3>
            <p>{summary}</p>
          </div>
        </div>
      </div>

      <div className="cast-section">
        <h2>Cast</h2>

        {cast && cast.length > 0 && (
          <ul className="cast-list">
            {cast.map((item, index) => {
              let personName = "";
              if (item.person && item.person.name) {
                personName = item.person.name;
              }

              let characterName = "";
              if (item.character && item.character.name) {
                characterName = item.character.name;
              }

              return (
                <li key={index} className="cast-item">
                  <strong>{personName}</strong> as {characterName}
                </li>
              );
            })}
          </ul>
        )}

        {(!cast || cast.length === 0) && (
          <p className="no-cast">No cast information available.</p>
        )}
      </div>
    </div>
  );
}

export default ShowDetails;
