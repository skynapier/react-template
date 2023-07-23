import React from "react";
import { useState } from "react";
import { CssBaseline, Typography, Container } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Customers from "./components/Customers";

const App = () => {

    const routes = [
        {tab:"/", component: Home},
        {tab:"/About", component: About},
        {tab:"/Customers", component: Customers},
    ]

  const [page, setPage] = useState(0);
  const tabValues = ["/", "/About", "/Customers"];
  const componentValue = [Home, About, Customers];

  const handlePageChange = (event, newValue) => {
    console.log("handlePageChange was called ", newValue);
    setPage(newValue);
    console.log("page changed to ", page);
  };

  console.log(" test ", tabValues[0], page);

  return (
    <>
      <CssBaseline />
      <Router basename="/React-Template">
        <div>
          <Container>
            <Header page={page} handlePageChange={handlePageChange}></Header>
          </Container>
          <Routes>
            {routes.map( (item,index) =>{
                console.log("item.path", item.tab, index)
                return (
                    <Route
                    exact
                    key={item.tab}
                    path={item.tab}
                    Component={componentValue[index]}
                  ></Route>
                )
            } )}
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
};

export default App;
