import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./responsive.scss";
import Layout from "./Layout/Layout";
import Home from "./routes/Home";
import Entertainment from "./routes/Entertainment";
import MovieDetails from "./routes/MovieDetails";
import MoviePlay from "./routes/MoviePlay";
import ListMovie from "./routes/ListMovie";

const ReactRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/entertainment" element={<Entertainment />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/entertainment/moviedetails" element={<MovieDetails />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/entertainment/movieplay" element={<MoviePlay />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/entertainment/listmovie" element={<ListMovie />} />
      </Route>
    </Routes>
  );
};
export default ReactRoutes;
