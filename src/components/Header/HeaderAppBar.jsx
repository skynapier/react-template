import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link,  useLocation } from "react-router-dom";


const pages = ['About', 'Business' ];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderAppBar = ({routes}) => {
  const currentPath = useLocation().pathname;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logo = () =>{
    return(
      <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
          <AdbIcon sx={{mr:1}}/>
          <Typography
            variant="h6"
            noWrap
            component={Link} to={routes[0].tab}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BYDH1
          </Typography>
      </Box>
    );
  }


  return (
    // <AppBar position="static" color='transparent'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
          sx={{ 
            flexGrow: 1,
             display: { xs: 'flex', md: 'none' },
            }}
             >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={routes[index+1].tab}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1,  ml: { xs: 5, md: 0 }   }} />
          <Typography
            variant="h5"
            noWrap
            component={Link} to={routes[0].tab}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BYDH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Tabs
              value={currentPath}
              aria-label="wrapped label tabs example"
            >
              <Tab icon={logo()} value={routes[0].tab} component={Link} to={routes[0].tab}></Tab>
              {pages.map( (page,index) =>(
                <Tab key={page}
                value={routes[index+1].tab}
                label={page}
                component={Link} to={routes[index+1].tab}
                ></Tab>
              ))}
            </Tabs>
            {/* {pages.map((page,index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: 'block' }}
                component={Link} to={routes[index+1].tab}   
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }} >
          <Button variant="contained" size="small" sx={{ my: 2,  display: 'block' }}>Contact</Button>
          </Box>
        </Toolbar>
      </Container>
    // </AppBar>
  );
}
export default HeaderAppBar;