import React from "react";
import { useState } from "react";
import { CssBaseline, Typography, Container } from "@mui/material";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Customers from "./components/Customers";

import HeaderAppBar from "./components/Header/HeaderAppBar";



import "./style.css";

const App = () => {
  const homePagePath = process.env.REACT_APP_PUBLISH_URL;
  console.log("homepagepath", homePagePath);

  const routes = [
    { tab: homePagePath + "/", component: Home },
    { tab: homePagePath + "/About", component: About },
    { tab: homePagePath + "/Customers", component: Customers },
  ];

  return (
    <>
      <CssBaseline />
      <Router basename="/">
        <Container id="app" >
          <Container>
            <HeaderAppBar routes={routes}></HeaderAppBar>
          </Container>
          <Routes>
            {routes.map((item, index) => {
              console.log("item.path", item.tab, index);
              return (
                <Route
                  exact
                  key={item.tab}
                  path={item.tab}
                  Component={item.component}
                ></Route>
              );
            })}
          </Routes>
          <Footer></Footer>
        </Container>
      </Router>
    </>
  );
};

export default App;
