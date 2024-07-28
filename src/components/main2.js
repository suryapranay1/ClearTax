import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./main2.css";
const Main2 = () => {
  return (
    <>
      <div className="main">
        <div className="main-text">
          <h1>India's largest tax and financial services platform</h1>
        </div>
        <div className="main-subtext">
          <h5>Explore our wide range of software solutions</h5>
        </div>
        <div className="main-content">
          <Box
            sx={{
              perspective: "1000px",
              transition: "transform 0.4s",
              "& > div, & > div > div": {
                transition: "inherit",
              },
              "&:hover": {
                "& > div": {
                  transform: "rotateY(30deg)",
                  "& > div:nth-child(2)": {
                    transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                  },
                  "& > div:nth-child(3)": {
                    transform: "translate3d(45px, 50px, 40px)",
                  },
                },
              },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                minHeight: "200px",
                width: 300,
                backgroundColor: "#fff",
              }}
            >
              <div className="division">
                <div className="logo">
                  <img src="https://assets.clear.in/cleartax/images/1689834930_group1814218517.png" width='60px' height='60px' alt='img1'></img>
                </div>
                <Typography level="h2" fontSize="lg" textColor="#314259" mt={'1em'}> 
                  Taxcloud
                </Typography>
              </div>
              <h5 className="H5">ITR filing software for Tax Experts</h5>
              <Button
                color="primary"
                variant="plain"
                endDecorator={<ArrowForwardIcon />}
                sx={{ alignSelf: "flex-start" }}
              >
                Know More
              </Button>
            </Card>
          </Box>
          <Box
            sx={{
              perspective: "1000px",
              transition: "transform 0.4s",
              "& > div, & > div > div": {
                transition: "inherit",
              },
              "&:hover": {
                "& > div": {
                  transform: "rotateY(30deg)",
                  "& > div:nth-child(2)": {
                    transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                  },
                  "& > div:nth-child(3)": {
                    transform: "translate3d(45px, 50px, 40px)",
                  },
                },
              },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                minHeight: "200px",
                width: 300,
                backgroundColor: "#fff",
              }}
            >
              <div className="division">
                <div className="logo">
                  <img src="https://assets.clear.in/cleartax/images/1689834900_group1814218524.png" width='60px' height='60px' alt='img1'></img>
                </div>
                <Typography level="h2" fontSize="lg" textColor="#314259" mt={'1em'}>
                  Enterprise
                </Typography>
              </div>
              <h5>GST, E-Invoicing,Max-ITc,E-way bill & more</h5>
              <Button
                color="primary"
                variant="plain"
                endDecorator={<ArrowForwardIcon />}
                sx={{ alignSelf: "flex-start" }}
              >
                Know More
              </Button>
            </Card>
          </Box>
          <Box
            sx={{
              perspective: "1000px",
              transition: "transform 0.4s",
              "& > div, & > div > div": {
                transition: "inherit",
              },
              "&:hover": {
                "& > div": {
                  transform: "rotateY(30deg)",
                  "& > div:nth-child(2)": {
                    transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                  },
                  "& > div:nth-child(3)": {
                    transform: "translate3d(45px, 50px, 40px)",
                  },
                },
              },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                minHeight: "200px",
                width: 300,
                backgroundColor: "#fff",
              }}
            >
              <div className="division">
                <div className="logo">
                  <img src="https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/24752bcd-1c44-4e33-a907-d28c0c63f9d8.png" width='60px' height='60px' alt='img1'></img>
                </div>
                <Typography level="h2" fontSize="lg" textColor="#314259" mt={'1em'}>
                  E-invoicing
                </Typography>
              </div>
              <h5>Bulk invoice in Tally or any ERP</h5>
              <Button
                color="primary"
                variant="plain"
                endDecorator={<ArrowForwardIcon />}
                sx={{ alignSelf: "flex-start" }}
              >
                Know More
              </Button>
            </Card>
          </Box>
          <Box
            sx={{
              perspective: "1000px",
              transition: "transform 0.4s",
              "& > div, & > div > div": {
                transition: "inherit",
              },
              "&:hover": {
                "& > div": {
                  transform: "rotateY(30deg)",
                  "& > div:nth-child(2)": {
                    transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                  },
                  "& > div:nth-child(3)": {
                    transform: "translate3d(45px, 50px, 40px)",
                  },
                },
              },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                minHeight: "200px",
                width: 300,
                backgroundColor: "#fff",
              }}
            >
              <div className="division">
                <div className="logo">
                  <img src="https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/1c380469-b051-4882-a1dc-d71fe81fed7a.png" width='60px' height='60px' alt='img1'></img>
                </div>
                <Typography level="h2" fontSize="lg" textColor="#314259" mt={'1em'}>
                  GST software
                </Typography>
              </div>
              <h5>G1-G9 fillings made 3x faster</h5>
              <Button
                color="primary"
                variant="plain"
                endDecorator={<ArrowForwardIcon />}
                sx={{ alignSelf: "flex-start" }}
              >
                Know More
              </Button>
            </Card>
          </Box>
        </div>
      </div>
      <div className="trust">
        <div className="text">
          <h4>Trusted by your favourite brands</h4>
        </div>
        <div className="partners">
          <div className="swiggy">
            <img
              src="./img/swiggy.png"
              alt="swiggy"
              width="100"
              height="50"
            ></img>
          </div>
          <div className="swiggy">
            <img
              src="./img/myntra.png"
              alt="swiggy"
              width="100"
              height="50"
            ></img>
          </div>
          <div className="swiggy">
            <img
              src="./img/Zomato.png"
              alt="swiggy"
              width="100"
              height="50"
            ></img>
          </div>
          <div className="swiggy">
            <img
              src="./img/Flipkart.png"
              alt="swiggy"
              width="100"
              height="50"
            ></img>
          </div>
          <div className="swiggy">
            <img
              src="./img/bosch.png"
              alt="swiggy"
              width="100"
              height="50"
            ></img>
          </div>
          <div className="swiggy">
            <img
              src="./img/apollo.png"
              alt="swiggy"
              width="100"
              height="50"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main2;
