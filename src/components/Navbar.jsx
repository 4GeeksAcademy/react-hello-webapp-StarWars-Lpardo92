import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
import { Dropdown as BootstrapDropdown } from "bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ favoritos = [], removeFavorite }) => {
  useEffect(() => {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.forEach(dropdownToggleEl => {
      new BootstrapDropdown(dropdownToggleEl);
    });
  }, []);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <img
            src="/src/assets/img/star_wars_logo.png"
            alt="Star Wars Logo"
            width="60"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {favoritos.length === 0 ? (
              <li><span className="dropdown-item-text">Empty!</span></li>
            ) : (
              favoritos.map((name, index) => (
                <li
                  key={index}
                  className="d-flex justify-content-between align-items-center px-3"
                >
                  <span>{name}</span>
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ cursor: "pointer" }}
                    onClick={() => removeFavorite(name)}
                  />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
