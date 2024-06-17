import { Typography } from "@mui/material";
import React from "react";
import './designed.css';

const Designed = () => {
  return (
    <div className="designed">
      <div className="video1">
        <video
          src="./img/1608208496_desktop_fold_designedbyexperts_lhs422.mp4"
          controls autoPlay='true'
        ></video>
      </div>
      <div className="designedflex">
      <div className="designed text">
        <Typography sx={{ color: "#314259",fontSize:'56px',fontWeight:'700',ml:'1em' }}>Designed by experts</Typography>
      </div>
      
        <Typography sx={{ color: '#9092A3',fontSize:'20px',fontWeight:'500',ml:'15em'}}>
        <div className="designedSubtext">
        <p>With our solutions, you don’t have to worry</p>
<p>about complying with the latest regulations.</p>
<p>60+ in-house tax experts, co-build and test</p>
<p>every product feature. Over 60,000 tax experts</p>
<p>give us constant feedback which helps us stay</p>
<p>on top of every new tax clause.</p>
</div>
        </Typography>
      
      </div>
      
    </div>
  );
};

export default Designed;
