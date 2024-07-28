import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Box, IconButton, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./carousal1.css"; // Import the custom CSS

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={`custom-arrow next-arrow ${className}`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right: -10,
        transform: "translateY(-50%)",
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        color: "black",
        borderRadius: "50%",
        padding: "8px",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={`custom-arrow prev-arrow ${className}`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left: -10,
        transform: "translateY(-50%)",
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        color: "black",
        borderRadius: "50%",
        padding: "8px",
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
}

function SimpleCarousel1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        position: "relative",
        height: { xs: "auto", md: "40em" },
      }}
    >
      <Typography
        sx={{
          color: '#314259',
          fontWeight: '700',
          fontSize: { xs: '2em', md: '3.5em' },
          ml: '0.7em',
          mb: '1em',
        }}
      >
        Trusted by businesses and experts
      </Typography>
      <Slider {...settings}>
        <div>
          <Card sx={{ width: { xs: '100%', md: 600 }, height: { xs: 'auto', md: 450 }, margin: "1em" }}>
            <CardContent>
              <Typography sx={{ color: '#314259', fontSize: { xs: '1.5em', md: '2em' }, fontWeight: '700', mb: '1em' }}>
                <span style={{ color: '#1678FB' }}> 600,000+ </span>
                business trust our SMB offerings
              </Typography>
              <Typography sx={{ color: "#9092A3", fontWeight: 500, fontSize: { xs: "16px", md: "20px" }, mb: { xs: '1em', md: '6em' } }}>
                My executives could learn it so quickly and we implemented
                literally in a couple of days. I am impressed with time-saving
                features embedded in the software like advanced reconciliation
                of 2A data with invoices.
              </Typography>
              <Button endIcon={<ArrowForwardIosIcon />}>Explore Products for small business</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: { xs: '100%', md: 600 }, height: { xs: 'auto', md: 450 }, margin: "1em" }}>
            <CardContent>
              <Typography sx={{ color: '#314259', fontSize: { xs: '1.5em', md: '2em' }, fontWeight: '700', mb: '1em' }}>
                More than
                <span style={{ color: '#1678FB' }}> 60,000+ </span>
                tax experts use our platform
              </Typography>
              <Typography sx={{ color: "#9092A3", fontWeight: 500, fontSize: { xs: "16px", md: "20px" }, mb: { xs: '1em', md: '6em' } }}>
                My executives could learn it so quickly and we implemented
                literally in a couple of days. I am impressed with time-saving
                features embedded in the software like advanced reconciliation
                of 2A data with invoices.
              </Typography>
              <Button endIcon={<ArrowForwardIosIcon />}>Explore Products for tax experts</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: { xs: '100%', md: 600 }, height: { xs: 'auto', md: 450 }, margin: "1em" }}>
            <CardContent>
              <Typography sx={{ color: '#314259', fontSize: { xs: '1.5em', md: '2em' }, fontWeight: '700', mb: '1em' }}>
                over
                <span style={{ color: '#1678FB' }}> 1200+ </span>
                enterprises use our compliance stack
              </Typography>
              <Typography sx={{ color: "#9092A3", fontWeight: 500, fontSize: { xs: "16px", md: "20px" }, mb: { xs: '1em', md: '6em' } }}>
                My executives could learn it so quickly and we implemented
                literally in a couple of days. I am impressed with time-saving
                features embedded in the software like advanced reconciliation
                of 2A data with invoices.
              </Typography>
              <Button endIcon={<ArrowForwardIosIcon />}>Explore Products for large enterprises</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: { xs: '100%', md: 600 }, height: { xs: 'auto', md: 450 }, margin: "1em" }}>
            <CardContent>
              <Typography sx={{ color: '#314259', fontSize: { xs: '1.5em', md: '2em' }, fontWeight: '700', mb: '1em' }}>
                over
                <span style={{ color: '#1678FB' }}> 5 million+ </span>
                tax payers have filed with us
              </Typography>
              <Typography sx={{ color: "#9092A3", fontWeight: 500, fontSize: { xs: "16px", md: "20px" }, mb: { xs: '1em', md: '6em' } }}>
                My executives could learn it so quickly and we implemented
                literally in a couple of days. I am impressed with time-saving
                features embedded in the software like advanced reconciliation
                of 2A data with invoices.
              </Typography>
              <Button endIcon={<ArrowForwardIosIcon />}>File ITR yourself or take our expert assistance</Button>
            </CardContent>
          </Card>
        </div>
      </Slider>
    </Box>
  );
}

export default SimpleCarousel1;
