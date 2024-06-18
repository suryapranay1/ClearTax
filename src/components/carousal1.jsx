import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './carousal1.css'; // Import the custom CSS

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

function SimpleCarousel1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box sx={{ width: '80%', margin: '0 auto',position: 'relative',border:'2px solid black',height:'40em' }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Simple Carousel
      </Typography>
      <Slider {...settings}>
        <div>
          <Card sx={{ width: 600, height: 450, margin: '1em' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of card 1
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 600, height: 450, margin: '1em' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of card 2
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 600, height: 450, margin: '1em' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of card 3
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 600, height: 450, margin: '1em' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of card 4
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 600, height: 450, margin: '1em' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of card 5
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 600, height: 450, margin: '1em' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 6
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

export default SimpleCarousel1;
