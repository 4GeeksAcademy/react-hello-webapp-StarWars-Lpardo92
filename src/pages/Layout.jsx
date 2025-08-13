import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
export const Layout = () => {
  const [favoritos, setFavoritos] = useState([]);
  const addFavorite = (nombre) => {
    if (!favoritos.includes(nombre)) {
      setFavoritos([...favoritos, nombre]);
    }
  };
  const removeFavorite = (nombre) => {
    setFavoritos(favoritos.filter(fav => fav !== nombre));
  };
  return (
    <>
      <Navbar favoritos={favoritos} removeFavorite={removeFavorite} />
      <Outlet context={{ addFavorite, removeFavorite, favoritos }} />
    </>
  );
};











