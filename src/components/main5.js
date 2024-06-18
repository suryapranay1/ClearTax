import React from "react";
import "./main5.css";
import { Typography } from "@mui/material";
function Main5() {
  return (
    <div className="main5section">
      <div className="main5">
        <Typography sx={{fontWeight:700,fontSize:'3.5em',color:'#314259'}}>
          All our products<br></br>are designed to<br></br>deliver
        </Typography>
      </div>
      <div className="main5img">
        <img
          alt="allproductsrhs"
          width="560"
          height="500"
          loading="lazy"
          src="https://assets1.cleartax-cdn.com/cleartax/images/1607343426_allproductsrhs.png"
        ></img>
      </div>
    </div>
  );
}

export default Main5;
