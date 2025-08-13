import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CharacterDetails = () => {
  const { uid } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    if (!uid) return;
    fetch(`https://www.swapi.tech/api/people/${uid}`)
      .then(res => res.json())
      .then(data => setCharacter(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card p-4" style={{ width: "80%" }}>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 col-md-5">
            <img
              src="/src/assets/img/rigo-baby.jpg"
              alt={character.name}
              className="img-fluid w-100 rounded"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6 col-md-7">
            <h2>{character.name}</h2>
            <p>
              Gender: {character.gender} <br />
              Skin Color: {character.skin_color} <br />
              Hair Color: {character.hair_color} <br />
              Eye Color: {character.eye_color} <br />
            </p>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col fw-bold">Name</div>
          <div className="col fw-bold">Birth Year</div>
          <div className="col fw-bold">Gender</div>
          <div className="col fw-bold">Height</div>
        </div>
        <div className="row text-center">
          <div className="col">{character.name}</div>
          <div className="col">{character.birth_year}</div>
          <div className="col">{character.gender}</div>
          <div className="col">{character.height}</div>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetails;






