import { useEffect, useState } from "react";
import FilmList from "../films/FilmList";
import films from "../data/films";

export default function Main() {
  const genres = ["Fantascienza", "Thriller", "Romantico", "Azione"];

  const [genreFilter, setGenreFilter] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [titleFilter, setTitleFilter] = useState("");

  useEffect(() => {
    let updatedFilms = films;

    if (genreFilter !== "") {
      updatedFilms = updatedFilms.filter((film) => film.genre === genreFilter);
    }

    if (titleFilter !== "") {
      updatedFilms = updatedFilms.filter((film) => film.title === titleFilter);
    }

    setFilteredFilms(updatedFilms);
  }, [genreFilter, titleFilter]);

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
          <h2>filtra per titolo</h2>
          <select
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          >
            <option value="">nessun filtro</option>
            {films.map((film) => (
              <option key={film.title} value={film.title}>
                {film.title}
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
