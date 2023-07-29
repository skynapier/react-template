import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  Divider,
  CardContent,
} from "@mui/material";

const Home = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          BYDH
        </Typography>
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Welcome to our company&apos;s profile! We are a leading construction
            company offering a wide range of services in new house construction,
            old house renovation, and house maintenance. With a team of highly
            skilled professionals, we have the expertise to bring your vision to
            life.
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Our team comprises a number of licensed building practitioners
            (LBPs) who have undergone rigorous training and hold the necessary
            certifications. This ensures that our work is carried out by
            qualified individuals who are well-versed in the latest building
            standards and practices.
          </Typography>
        </CardContent>

        <div>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                BYDH
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                BYDH
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home;
