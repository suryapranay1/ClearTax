import { Typography } from "@mui/material";
import React from "react";
import './commited.css';

const Commited = () => {
  return (
    <div className="commited">
      <div className="commitedSection">
        <div className="commitedText">
          <Typography sx={{fontSize:'3.5em',fontWeight:'700',color:'#314259',marginBottom:'.5em'}}>
            Commited <br /> to security
          </Typography> 
        </div>
        <div className="commitedParagraph">
          <Typography sx={{color:'#9092A3',fontSize:'19px',fontWeight:'500',textAlign:'left'}}>
            We value your data as if it were ours. All our<br />
            certifications and licenses, including GSP,<br />
            were awarded after rigorous scrutiny of our<br />
            systems and multiple VAPT audits
          </Typography>
        </div>
      </div>

      <div className="commitedLogo">
        <img
          alt="security_icons"
          width="500"
          height="200"
          loading="lazy"
          src="https://assets1.cleartax-cdn.com/cleartax/images/1620036013_security_certificates.png"
        />
      </div>
    </div>
  );
};

export default Commited;
