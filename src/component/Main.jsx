import FilmList from "../films/FilmList";
import films from "../data/films";
export default function Main() {
  return (
    <main>
      <div className="container">
        <h2>FILMS</h2>
        <FilmList films={films} />
      </div>
    </main>
  );
}
