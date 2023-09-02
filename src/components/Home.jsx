import * as React from "react";
import {
  Typography,
  Grid,
  CardContent,

  Button,
  Box,
} from "@mui/material";

import Innovation from "../resources/images/innovation.png";
import Image1 from "../resources/images/image1.jpeg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style.css";

const Home = () => {
  const [images, setImages] = React.useState([
    Innovation,
    Image1,
    Innovation,
  ]);
  const [selectedImage, setSelectedImage] = React.useState(0);

  const next = ()=>{

    if (selectedImage == images.length -1 ){
      setSelectedImage(0);
    }else{

      setSelectedImage(selectedImage+1);
    }

  }

  return (
    <Box id="home" maxWidth="100%" justifyContent="center" height="1200px">
      <Box maxWidth="90%" px={2} margin="0 auto">
        <Grid container display="flex">
          <Grid container item display="flex" justifyContent="center" md={12}>
              <img
                key={selectedImage} // Add a unique key for each image in the array
                src={images[selectedImage]}
                alt="{item.title}" // Use double curly braces to interpolate the value
                loading="lazy"
                style={{ width: "90%", height:"100%"}}
              />

          </Grid>
          <Grid container item display="flex" justifyContent="center" md={12} m={2}>
          <Button variant="contained" sx={{ width: "100%" }} onClick={next}>
          Next
        </Button>

          </Grid>

          <Grid container item display="flex" justifyContent="center" md={12}>
            <Box maxWidth="100%" maxHeight="60%">
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
                  Welcome to our company&apos;s profile! We are a leading
                  construction company offering a wide range of services in new
                  house construction, old house renovation, and house
                  maintenance. With a team of highly skilled professionals, we
                  have the expertise to bring your vision to life.
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
                  (LBPs) who have undergone rigorous training and hold the
                  necessary certifications. This ensures that our work is
                  carried out by qualified individuals who are well-versed in
                  the latest building standards and practices.
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
