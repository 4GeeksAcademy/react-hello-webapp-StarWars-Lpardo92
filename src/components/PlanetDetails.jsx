import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const PlanetDetails = () => {
  const { uid } = useParams();
  const [planetas, setPlanetas] = useState({});
  useEffect(() => {
    if (!uid) return;
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then(res => res.json())
      .then(data => setPlanetas(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card p-4" style={{ width: "80%" }}>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 col-md-5">
            <img
              src="/src/assets/img/rigo-baby.jpg"
              alt={planetas.name}
              className="img-fluid w-100 rounded"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6 col-md-7">
            <h2>{planetas.name}</h2>
            <p>
              Climate: {planetas.climate} <br />
              Diameter: {planetas.diameter} <br />
              Terrain: {planetas.terrain} <br />
              Gravity: {planetas.gravity} <br />
            </p>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col fw-bold">Climate</div>
          <div className="col fw-bold">Diameter</div>
          <div className="col fw-bold">Terrain</div>
          <div className="col fw-bold">Gravity</div>
        </div>
        <div className="row text-center">
          <div className="col">{planetas.climate}</div>
          <div className="col">{planetas.diameter}</div>
          <div className="col">{planetas.terrain}</div>
          <div className="col">{planetas.gravity}</div>
        </div>
      </div>
    </div>
  );
};
export default PlanetDetails;