import FilmCard from "./FilmCard";

export default function FilmList({ films }) {
  return (
    <div className="row row-cols-2 g-2">
      {films.map((film, index) => (
        <FilmCard key={index} film={film} />
      ))}
    </div>
  );
}
