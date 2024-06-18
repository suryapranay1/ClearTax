import { Typography } from "@mui/material";
import React from "react";
import "./designed.css";

const Designed = () => {
  return (
    <div className="designed">
      <div className="video1">
        <video
          src="./img/1608208496_desktop_fold_designedbyexperts_lhs422.mp4"
          controls
          autoPlay={true}
        ></video>
      </div>
      <div className="designedflex">
        <Typography
          sx={{
            color: "#314259",
            fontSize: "56px",
            fontWeight: "700",
            ml: "1em",
            mb: ".5em"
          }}
        >
          Designed by experts
        </Typography>
        <Typography
          sx={{
            color: "#9092A3",
            fontSize: "20px",
            fontWeight: "500",
            ml: "3em",
          }}
        >
          With our solutions, you don’t have to worry <br></br>about complying with the
          latest regulations.<br></br> 60+ in-house tax experts, co-build and test<br></br> every
          product feature. Over 60,000 tax experts<br></br> give us constant feedback which
          helps us stay<br></br> on top of every new tax clause.
        </Typography>
      </div>
    </div>
  );
};

export default Designed;
