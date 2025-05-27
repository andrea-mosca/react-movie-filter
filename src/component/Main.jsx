import films from "../data/films";
export default function Main() {
  return (
    <main>
      <div className="container">
        <h2>FILMS</h2>
        <div className="row row-cols-2 g-2">
          {films.map((film, index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-header">{film.genre}</div>
                <div className="card-body">{film.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
