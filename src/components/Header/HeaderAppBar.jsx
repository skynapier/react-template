import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";

const pages = ["About", "Business"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderAppBar = ({ routes }) => {
  const currentPath = useLocation().pathname;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logo = () => {
    return (
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <AdbIcon sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to={routes[0].tab}
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          BYDH1
        </Typography>
      </Box>
    );
  };

  return (
    <Box pb={2} justifyContent="center"  diplay="flex" margin="0 auto">
      <Toolbar disableGutters>
        <Box id="test" sx={{ height:"100px", flexGrow: 1, display: { xs: "none", md: "flex" } }}  >
          <Tabs value={currentPath} aria-label="wrapped label tabs example" sx={{  width:"100%", height:"100px"}} >
            <Tab
              icon={logo()}
              value={routes[0].tab}
              component={Link}
              to={routes[0].tab}
              sx={{ width:"30%", height:"100px"}}
            ></Tab>
            {pages.map((page, index) => (
              <Tab
                key={page}
                value={routes[index + 1].tab}
                label={page}
                component={Link}
                to={routes[index + 1].tab}
                sx={{ width:"30%",  height:"100px"}}
              ></Tab>
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </Box>
  );
};
export default HeaderAppBar;
