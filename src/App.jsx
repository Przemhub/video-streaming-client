import { useState, useEffect } from "react";
import "./App.css";
import Hello from "./Hello";
import FilmList from "./pages/FilmList";

function App() {
  const [films, setFilms] = useState([
    { id: 0, videoName: "HarryPotte", description: "Harry Potter Movie" },
    { id: 1, videoName: "Captain Jack", description: "Captain Jack Movie" },
  ]);

  useEffect(() => {
    fetch("/film")
      .then((response) => response.json())
      .then((data) => console.log(data.body));
  }, []);

  // console.log("logging films: ", films);
  const films2 = films.map((film) => {
    return {
      id: film.id,
      videoName: film.videoName.substring(0, film.videoName.length - 4),
      description: film.description,
    };
  });
  return (
    <div className="bg-dark text-white p-3 m-3">
      <Hello />
      <FilmList films={films2} />
    </div>
  );
}

export default App;
