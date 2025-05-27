import { useEffect, useState } from "react";
import FilmList from "../films/FilmList";
import films from "../data/films";

export default function Main() {
  const [filmsData, setFilmsData] = useState(films);
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [genreFilter, setGenreFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [newFilm, setNewFilm] = useState({ title: "", genre: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFilmsData([...filmsData, newFilm]);
    setNewFilm({ title: "", genre: "" });
  };

  useEffect(() => {
    let updatedFilms = filmsData;

    if (genreFilter !== "") {
      updatedFilms = updatedFilms.filter((film) => film.genre === genreFilter);
    }

    if (titleFilter !== "") {
      updatedFilms = updatedFilms.filter((film) => film.title === titleFilter);
    }

    setFilteredFilms(updatedFilms);
  }, [genreFilter, titleFilter, filmsData]);
  return (
    <main>
      <div className="container">
        <div className="card my-5">
          <h2>Filtra per genere</h2>
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option value="">nessun filtro</option>
            {[...new Set(filmsData.map((film) => film.genre))].map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <h2>Filtra per titolo</h2>
          <select
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          >
            <option value="">nessun filtro</option>
            {filmsData.map((film) => (
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

        <div className="card mt-4 p-3">
          <h2>Aggiungi un nuovo film</h2>
          <form
            className="d-flex flex-column gap-2"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              placeholder="Genre"
              value={newFilm.genre}
              onChange={(e) =>
                setNewFilm({ ...newFilm, genre: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Title"
              value={newFilm.title}
              onChange={(e) =>
                setNewFilm({ ...newFilm, title: e.target.value })
              }
            />
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </main>
  );
}
