import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './carousel.css'; // Import the custom CSS

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={`custom-arrow next-arrow ${className}`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '50%',
        right: -10,
        transform: 'translateY(-50%)',
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'black',
        borderRadius: '50%',
        padding: '8px',
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
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: -10,
        transform: 'translateY(-50%)',
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'black',
        borderRadius: '50%',
        padding: '8px',
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
}

function SimpleCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box sx={{ width: '80%', margin: '0 auto', position: 'relative' }}>
      <Typography sx={{color:'#314259',fontSize:'3em',fontWeight:'700',ml:'0.8em',mb:'1em'}}>
        Press and Awards
      </Typography>
      <Slider {...settings}>
        <div>
          <Card sx={{ width: 380, height: 250, margin: '1em' }}>
            <CardContent>
              <Typography sx={{color:'#314259',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                2023
              </Typography>
              <Typography sx={{color:'#1678FB',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                BW Disrupt <br></br>Techtors
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 380, height: 250, margin: '1em' }}>
            <CardContent>
            <Typography sx={{color:'#314259',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                2022
              </Typography>
              <Typography sx={{color:'#1678FB',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                Fintech Scaleup <br></br>of the year
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 380, height: 250, margin: '1em' }}>
            <CardContent>
            <Typography sx={{color:'#314259',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                2021
              </Typography>
              <Typography sx={{color:'#1678FB',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                Emerging Fintech <br></br>Player
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 380, height: 250, margin: '1em' }}>
            <CardContent>
            <Typography sx={{color:'#314259',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                2020
              </Typography>
              <Typography sx={{color:'#1678FB',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                Fintech Solution <br></br>of the Year
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 380, height: 250, margin: '1em' }}>
            <CardContent>
            <Typography sx={{color:'#314259',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                2019
              </Typography>
              <Typography sx={{color:'#1678FB',fontSize:'1.5em',fontWeight:'700',textAlign:'center',mb:'2em'}}>
                Tech Leader <br></br>of the year
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 380, height: 250, margin: '1em' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                2018
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of card 6
              </Typography>
            </CardContent>
          </Card>
        </div>
        
      </Slider>
    </Box>
  );
}

export default SimpleCarousel;
