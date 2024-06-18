import React from "react";
import "./looking.css";
import { Typography } from "@mui/material";
const Looking = () => {
  return (
    <>
    <div className="lookingcolor">
      
    </div>
      <div className="lookingText">
        <Typography sx={{color:' #314259',ml:'9em',fontSize:'3em',fontWeight:700}}>Looking for expert services</Typography>
      </div>
      <div className="lookingParagraph">
         <Typography sx={{color: '#9092A3',ml:28,fontWeight:500,fontSize:'1.5em'}}> In addition to providing software services, we also offer expert
          services to help you manage your business<br></br> <center><span style={{marginRight:'9em'}}>and legal compliances.</span></center></Typography>
      </div>
      <div className="sec">
      <div className=" lookingsec1">
        <div>
          <div>
            <Typography sx={{color:' #314259',fontSize:'2em',fontWeight:700,mb:'0.8em'}}>For You</Typography>
          </div>
        </div>
        <div>
          <Typography sx={{color:' #314259',fontSize:'1.4em',fontWeight:700}}>ITR Filing Assistance</Typography>
          <Typography sx={{color:'#9092A3',fontWeight:500,fontSize:'1em'}}>
            Get Expert assistance in tax filing for<br></br> Salaried and self-employed
            individuals, NRIs,<br></br> Capital gains, and more.
          </Typography>
        </div>
        <div>
          <Typography sx={{color:' #314259',fontSize:'1.4em',fontWeight:700}}>TDS on Sale of Property</Typography>
          <Typography sx={{color:'#9092A3',fontWeight:500,fontSize:'1em'}}>Hassle-free 26QB compliance on sale of <br></br>property</Typography>
        </div>
        <div>
          <Typography sx={{color:' #314259',fontSize:'1.4em',fontWeight:700}}>Legal Services</Typography>
          <Typography sx={{color:'#9092A3',fontWeight:500,fontSize:'1em'}}>
            For drafting and review of legal documents<br></br> such as Sale deed, Vendor
            agreement, Co-<br></br>founders agreement etc
          </Typography>
        </div>
      </div>
      <div className="lookingsec2">
        <div>
        <Typography sx={{color:' #314259',mb:'0.8em',fontSize:'2em',fontWeight:700}}>For Your Business</Typography>
        </div>

        <div>
          <Typography sx={{color:' #314259',fontSize:'1.4em',fontWeight:700}}>Launch and run a startup</Typography>
          <Typography sx={{color:'#9092A3',fontWeight:500,fontSize:'1em'}}>
            Legal drafting, documentation review,<br></br> change in company name etc.
          </Typography>
        </div>
        <div>
          <Typography sx={{color:' #314259',fontSize:'1.4em',fontWeight:700}}>Government registrations</Typography>
          <Typography sx={{color:'#9092A3',fontWeight:500,fontSize:'1em'}}>Registration for Shop licence, PF, PAN, FSSAI<br></br> and more</Typography>
        </div>
        <div>
          <Typography sx={{color:' #314259',fontSize:'1.4em',fontWeight:700}}>Trademark & digital signature</Typography>
          <Typography sx={{color:'#9092A3',fontWeight:500,fontSize:'1em'}}>
            Trademark registrations and renewals;<br></br> Digital signature certificate
          </Typography>
        </div>
      </div>
      </div>
      
      
    </>
  );
};

export default Looking;
