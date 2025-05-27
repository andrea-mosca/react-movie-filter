import { useEffect, useState } from "react";
import FilmList from "../films/FilmList";
import films from "../data/films";

export default function Main() {
  const genres = ["Fantascienza", "Thriller", "Romantico", "Azione"];

  const [genreFilter, setGenreFilter] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(films);

  useEffect(() => {
    if (genreFilter === "") {
      setFilteredFilms(films);
    } else {
      const filtered = films.filter((film) => film.genre === genreFilter);
      setFilteredFilms(filtered);
    }
  }, [genreFilter]);
  return (
    <main>
      <div className="container">
        <div className="card my-5">
          <h2>filtra per genere</h2>
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option value="">nessun filtro</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="card">
          <h2>FILMS</h2>
          <FilmList films={filteredFilms} />
        </div>
      </div>
    </main>
  );
}
