export default function FilmCard({ film }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">{film.genre}</div>
        <div className="card-body">{film.title}</div>
      </div>
    </div>
  );
}
