import { useState } from "react";
import { Link } from "react-router-dom";
function FilmList({ films }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filmMap = films.map((film, index) => (
    <Link
      className="bg-dark text-white text-decoration-none"
      key={film.id}
      to={`/film/${film.videoName}`}
    >
      <li
        key={film.id}
        className={
          selectedIndex === index
            ? "list-group-item active bg-light text-dark"
            : "list-group-item bg-dark text-white"
        }
        onMouseOver={() => {
          setSelectedIndex(index);
        }}
      >
        {film.videoName}
      </li>
    </Link>
  ));

  return (
    <div className="vstack gap-3">
      <ul className="list-group">{filmMap}</ul>
      <Link to={`/addFilm`}>
        {/* <button type="submit" className="btn btn-light">
          AddFilm Page
        </button> */}
      </Link>
    </div>
  );
}

export default FilmList;
