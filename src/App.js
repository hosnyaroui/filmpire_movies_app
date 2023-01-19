import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Actors from "./components/Actors/Actors";
import Movies from "./components/Movies/Movies";
import MovieInformation from "./components/MovieInformation/MovieInformation";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";


import useStyles from './components/styles';

function App() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
    <CssBaseline />
    <NavBar />
    <main className={classes.content}>
    <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      </div>
  );
}

export default App;
