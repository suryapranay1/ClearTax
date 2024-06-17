import React from "react";
import "./Ready.css";
import { Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
const Ready = () => {
  return (
    <>
      <div className="ReadySec">
        <div className="readyflex">
          <div className="readyText">
            <h2>Ready to get started?</h2>
          </div>
          <div className="readyButtons">
            <div className="readyButton1">
              <Button
                color="primary"
                sx={{
                  backgroundColor: "skyblue",
                  "&:hover": { backgroundColor: "deepskyblue" },
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
            class="sm:lil-object-scale-down sm:lil-h-full"
            loading="lazy"
            width="418"
            height="350"
            src="https://assets1.cleartax-cdn.com/cleartax/images/1605855097_desktop_fold_readytogetstarted_rhs.png"
            alt="readysection"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Ready;
