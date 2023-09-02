import * as React from "react";
import { Typography, Grid, CardContent, Divider, Box } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Innovation from "../resources/images/innovation.png";
import Image1 from "../resources/images/image1.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const [images, setImages] = React.useState([Innovation, Image1]);
  const [selectedImage, setSelectedImage] = React.useState(0);

  const next = () => {
    if (selectedImage == images.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };
  const [imageHeight, setImageHeight] = React.useState(600);

  const componentRef = React.useRef(0);

  React.useEffect(() => {
    if (componentRef.current) {
      const componentHeight =
        Math.round(componentRef.current.offsetHeight) * 0.5;

      if (componentHeight < imageHeight) {
        setImageHeight(componentHeight);
      }
      console.log("Component height in pixels:", componentHeight);
    }
  }, []);

  return (
    <Box id="home" maxWidth="100%" justifyContent="center" height="1200px">
      <Box maxWidth="90%" px={2} margin="0 auto">
        <Grid container display="flex" >
          <Grid container item display="flex" justifyContent="center" md={12} py={2}>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={next}
            >
              <SwiperSlide>
                <Box
                  component="img"
                  src={images[0]}
                  alt="{item.title}"
                  loading="lazy"
                  style={{ width: "100%", height: `${imageHeight}px` }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src={images[1]}
                  alt="{item.title}"
                  loading="lazy"
                  style={{ width: "100%", height: `${imageHeight}px` }}
                ></Box>
              </SwiperSlide>
            </Swiper>
          </Grid>
          <Grid container item display="flex" justifyContent="center" md={12}>
            <Box maxWidth="100%" maxHeight="60%">
              <Divider>
                <Typography
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  BYDH
                </Typography>
              </Divider>
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
