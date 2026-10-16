function About() {
  return (
    <div className="container">
      <div className="about-card">
        <h1>About ShowTime</h1>
        <p className="about-subtitle">
          A TV show directory and cast explorer built for Web Engineering Assignment 5 (PS06).
        </p>

        <section className="about-section">
          <h2>Overview</h2>
          <p>
            ShowTime is a single-page React application that allows users to discover
            and explore television shows. The application uses the TVMaze public API
            to display popular series, search for any show by keyword, filter by
            genres, and view individual show pages with complete cast details.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul className="about-list">
            <li>Browse the top 40 TV shows from TVMaze</li>
            <li>Instant live search across the entire TVMaze catalog</li>
            <li>Filter shows by genre (Drama, Comedy, Action, etc.)</li>
            <li>Sort by rating or alphabetical name</li>
            <li>Detailed show information including cleaned HTML summaries and ratings</li>
            <li>Cast list with actor names, character roles, and photos</li>
            <li>Fallback placeholder handling for shows or actors with missing posters</li>
            <li>Client-side routing with React Router</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">React 19</span>
            <span className="tech-tag">React Router</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">TVMaze Public API</span>
            <span className="tech-tag">CSS3</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
