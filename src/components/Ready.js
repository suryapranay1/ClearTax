import React from "react";
import "./Ready.css";
import { Button, Typography } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

const Ready = () => {
  return (
    <div className="ReadySec">
      <div className="readyflex">
        <div className="readyText">
          <Typography
            sx={{
              color: '#314259',
              marginTop: '1em',
              fontWeight: '700',
              fontSize: '2.7em',
              width: 'auto',
            }}
          >
            Ready to get started?
          </Typography>
        </div>
        <div className="readyButtons">
          <div className="readyButton1">
            <Button
              color="primary"
              sx={{
                backgroundColor: "skyblue",
                "&:hover": { backgroundColor: '#F5F5F5' },
              }}
            >
              Try for Free
            </Button>
          </div>
          <div className="readyButton2">
            <Button color="primary" endIcon={<ArrowRight />}>
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="readyLogo">
        <img
          className="sm:lil-object-scale-down sm:lil-h-full"
          loading="lazy"
          width="418"
          height="350"
          src="https://assets1.cleartax-cdn.com/cleartax/images/1605855097_desktop_fold_readytogetstarted_rhs.png"
          alt="readysection"
        />
      </div>
    </div>
  );
};

export default Ready;
