import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Characters from "../components/Characters";
import Planets from "../components/Planets";
export const Home = () => {
  const { addFavorite, removeFavorite, favoritos } = useOutletContext();
  const [personajes, setPersonajes] = useState([]);
  const [planetas, setPlanetas] = useState([]);
  // Cargar personajes
  useEffect(() => {
    fetch("https://swapi.tech/api/people")
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
      .catch(err => console.error(err));
  }, []);
  // Cargar planetas
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => setPlanetas(data.results))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="container">
      {/* Personajes */}
      <h3 className="mt-4">Characters</h3>
      <div className="d-flex overflow-auto gap-3 p-3">
        {personajes.map((p) => (
          <div key={p.uid} className="flex-shrink-0">
            <Characters
              uid={p.uid}
              nombre={p.name}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              isFavorite={favoritos.includes(p.name)}
            />
          </div>
        ))}
      </div>
      {/* Planetas */}
      <h3 className="mt-4">Planets</h3>
      <div className="d-flex overflow-auto gap-3 p-3">
        {planetas.map((p) => (
          <div key={p.uid} className="flex-shrink-0">
            <Planets
              uid={p.uid}
              nombre={p.name}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              isFavorite={favoritos.includes(p.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};