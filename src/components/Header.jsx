import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HouseIcon from "@mui/icons-material/House";
import { Container, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Link,  useLocation } from "react-router-dom";



const Header = ({routes}) =>{

  const currentPath = useLocation().pathname;

  const matchingRoute = routes.find((route) => route.tab === currentPath);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={currentPath}
        // onChange={handlePageChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value={routes[0].tab}
          icon={<HouseIcon></HouseIcon>}
          component={Link} to={routes[0].tab}
          wrapped
        />
        <Tab value={routes[1].tab}
        label="About" 
        component={Link} to={routes[1].tab}
        />
        <Tab value={routes[2].tab} label="Customers" 
        component={Link} to={routes[2].tab}/>
      </Tabs>
    </Box>
  );

}


export default Header;