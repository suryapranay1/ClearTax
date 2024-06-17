import { Typography } from "@mui/material";
import React from "react";
import './commited.css'
const Commited = () => {
  return (
    <div className="commited">
      <div className="commitedSection">
        <div className="commitedText">
            <h2>Commited
            <br></br>
            to security</h2>
            
        </div>
        <div className="commitedParagraph">
          <p>We value your data as if it were ours. All our<br></br>
          certifications and licenses, including GSP,<br></br>
          were awarded after rigorous scrutiny of our<br></br>
          systems and multiple VAPT audits.</p>
        </div>
      </div>

      <div className="commitedLogo">
        <img
          alt="security_icons"
          width="500"
          height="200"
          loading="lazy"
          src="https://assets1.cleartax-cdn.com/cleartax/images/1620036013_security_certificates.png"
        ></img>
      </div>
    </div>
  );
};

export default Commited;
