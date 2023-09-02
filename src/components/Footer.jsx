import * as React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Hidden,
  Box,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export default function Footer() {

  const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

  return (
    <Box
      display="flex"
      position="relative"
      justifyContent="center"
      m={2}
    >
      <Grid container maxWidth="70%" justifyContent="center" m={2} >
        <Grid container item md={1} >
          <CallIcon fontSize="small"></CallIcon>
        </Grid>
        <Grid container item md={2} zeroMinWidth>
          <Typography noWrap>+64 1231456</Typography>
        </Grid>
        <Grid container item md={9} zeroMinWidth>
          <Typography >{message}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
