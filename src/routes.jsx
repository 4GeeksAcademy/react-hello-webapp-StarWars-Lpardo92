import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import CharacterDetails from "./components/CharacterDetails";
import PlanetDetails from "./components/PlanetDetails";
import { Layout } from "./pages/Layout";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />
      <Route path="CharacterDetails/:uid" element={<CharacterDetails />} />
      <Route path="PlanetsDetails/:uid" element={<PlanetDetails />} />
    </Route>
  )
);











