import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HouseIcon from "@mui/icons-material/House";
import { Container, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";



const Header = ({page, handlePageChange, tabValue}) =>{

  console.log("check header page", page);
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={page}
        onChange={handlePageChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value={0}
          icon={<HouseIcon></HouseIcon>}
          component={Link} to="/"
          wrapped
        />
        <Tab value={1} 
        label="About" 
        component={Link} to="/About"
        />
        <Tab value={2} label="Customers" 
        component={Link} to="/Customers"/>
      </Tabs>
    </Box>
  );

}


export default Header;