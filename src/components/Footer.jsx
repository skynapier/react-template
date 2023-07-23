import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container, Grid, Typography,Button, Avatar, Hidden } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

  return (
    <Container maxWidth='lg' sx={{ position:'fixed', bottom:0, left:0, right:0 }}>
      <Grid container spacing={3} >
        <Grid item xs={4} md={1} lg={1}><CallIcon fontSize='small'></CallIcon></Grid>
        <Grid item xs md={2} lg={2} zeroMinWidth>
            <Typography noWrap>+64 1231456</Typography>
        </Grid>
        <Hidden only="xs">
          <Grid item xs={false} md={9} lg={9} zeroMinWidth>{message}</Grid>
        </Hidden>
      </Grid>
      </Container>
  );
}