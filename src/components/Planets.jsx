import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
const Planets = ({ uid, nombre, addFavorite, removeFavorite, isFavorite }) => {
  const toggleFavorite = () => {
    if (!isFavorite) {
      addFavorite(nombre);
    } else {
      removeFavorite(nombre);
    }
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="/src/assets/img/rigo-baby.jpg" className="card-img-top" alt={nombre} />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">Name: {nombre}</h5>
          <FontAwesomeIcon
            icon={isFavorite ? solidHeart : regularHeart}
            onClick={toggleFavorite}
            style={{
              fontSize: '1.5rem',
              color: isFavorite ? 'red' : 'gray',
              cursor: 'pointer'
            }}
          />
        </div>
        <Link to={`/PlanetsDetails/${uid}`} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};
export default Planets;














