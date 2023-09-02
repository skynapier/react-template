import React from "react";
import {
  CssBaseline,
  Typography,
  Container,
  Box,
  Divider,
} from "@mui/material";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Customers from "./components/Customers";
import Form from "./components/Form";

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
        <Container id="app">
          <HeaderAppBar routes={routes}></HeaderAppBar>

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
          <Divider></Divider>
          <Form></Form>
          <Footer></Footer>
        </Container>
      </Router>
    </>
  );
};

export default App;
