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
import News from "./routes/News";
import NewsView from "./routes/NewsView";
import About from "./routes/About";
import Live from "./routes/Live";
import ShowsView from "./routes/ShowsView";
// talent page //
import TalentLayout from "./Layout/TalentLayout";
import TalentHub from "./routes/TalentHub";
import TalentView from "./routes/TalentView";
import ProfileView from "./routes/ProfileView";
import TalentRegister from "./routes/TalentRegister";

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
      <Route element={<Layout />}>
        <Route path="/news" element={<News />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/news/newsview" element={<NewsView />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/about" element={<About />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/live" element={<Live />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/live/showsview" element={<ShowsView />} />
      </Route>
      {/* Talent Hub */}
      <Route element={<TalentLayout />}>
        <Route path="/talenthub" element={<TalentHub />} />
      </Route>
      <Route element={<TalentLayout />}>
        <Route path="/talenthub/talentview" element={<TalentView />} />
      </Route>
      <Route element={<TalentLayout />}>
        <Route path="/talenthub/profileview" element={<ProfileView />} />
      </Route>
      <Route element={<TalentLayout />}>
        <Route path="/talentregister" element={<TalentRegister />} />
      </Route>
      {/* Talent hub end */}
    </Routes>
  );
};
export default ReactRoutes;
