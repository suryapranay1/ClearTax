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
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        position: "relative",
        height: "40em",
      }}
    >
      <Typography sx={{color:'#314259',fontWeight:'700',fontSize:'3.5em',ml:'0.7em'}}>
        Trusted by businesses and experts
      </Typography>
      <Slider {...settings}>
        <div>
          <Card sx={{ width: 600, height: 450, margin: "1em" }}>
            <CardContent>
              <Typography sx={{color:'#314259',fontSize:'2em',fontWeight:'700',mb:'1em'}}>
                <span style={{color:'#1678FB'}}> 600,000+ </span>
                business trust our SMB offerings
              </Typography>
              <Typography sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",mb:'6em' }}>
                My executives could learn it so quickly and we implemented
                literally in a couple of days. I am impressed with time-saving
                features embedded in the software like advanced reconciliation
                of 2A data with invoices.
              </Typography>
              <Button endIcon={<ArrowForwardIosIcon/>}>Explore Products for small business</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 600, height: 450, margin: "1em" }}>
          <CardContent>
              <Typography sx={{color:'#314259',fontSize:'2em',fontWeight:'700',mb:'1em'}}>
            More than  
                <span style={{color:'#1678FB'}}> 60,000+ </span>
                tax experts use our platform
                
              </Typography>
              <Typography sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",mb:'6em' }}>
                My executives could learn it so quickly and we implemented
                literally in a couple of days. I am impressed with time-saving
                features embedded in the software like advanced reconciliation
                of 2A data with invoices.
              </Typography>
              <Button endIcon={<ArrowForwardIosIcon/>}>Explore Products for tax experts</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 600, height: 450, margin: "1em" }}>
          <CardContent>
              <Typography sx={{color:'#314259',fontSize:'2em',fontWeight:'700',mb:'1em'}}>
                over
                <span style={{color:'#1678FB'}}> 1200+ </span>
                enterprises uses our compiliance stack
                
              </Typography>
              <Typography sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",mb:'6em' }}>
                My executives could learn it so quickly and we implemented
                literally in a couple of days. I am impressed with time-saving
                features embedded in the software like advanced reconciliation
                of 2A data with invoices.
              </Typography>
              <Button endIcon={<ArrowForwardIosIcon/>}>Explore Products for large enterprises</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 600, height: 450, margin: "1em" }}>
          <CardContent>
              <Typography sx={{color:'#314259',fontSize:'2em',fontWeight:'700',mb:'1em'}}>
                over 
                <span style={{color:'#1678FB'}}> 5million+ </span>
                tax payers have filed with us 
              </Typography>
              <Typography sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",mb:'6em' }}>
                My executives could learn it so quickly and we implemented
                literally in a couple of days. I am impressed with time-saving
                features embedded in the software like advanced reconciliation
                of 2A data with invoices.
              </Typography>
              <Button endIcon={<ArrowForwardIosIcon/>}>Fil ITR yourself or take our experts assistance</Button>
            </CardContent>
          </Card>
        </div>
      </Slider>
    </Box>
  );
}

export default SimpleCarousel1;
