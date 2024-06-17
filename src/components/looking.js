import React from "react";
import "./looking.css";
import { Typography } from "@mui/material";
const Looking = () => {
  return (
    <>
      <div className="lookingText">
        <h1>Looking for expert services</h1>
      </div>
      <div className="lookingParagraph">
         <Typography sx={{color: '#9092A3',ml:30}}> In addition to providing software services, we also offer expert
          services to help you manage your business and legal compliances.</Typography>
      </div>
      <div className="sec">
      <div className=" lookingsec1">
        <div>
          <div>
            <h3>For You</h3>
          </div>
        </div>
        <div>
          <h4>ITR Filing Assistance</h4>
          <p>
            Get Expert assistance in tax filing for Salaried and self-employed
            individuals, NRIs, Capital gains, and more.
          </p>
        </div>
        <div>
          <h4>TDS on Sale of Property</h4>
          <p>Hassle-free 26QB compliance on sale of property</p>
        </div>
        <div>
          <h4>Legal Services</h4>
          <p>
            For drafting and review of legal documents such as Sale deed, Vendor
            agreement, Co-founders agreement etc
          </p>
        </div>
      </div>
      <div className="lookingsec2">
        <div>
          <h3>For Your Business</h3>
        </div>

        <div>
          <h4>Launch and run a startup</h4>
          <p>
            Legal drafting, documentation review, change in company name etc.
          </p>
        </div>
        <div>
          <h4>Government registrations</h4>
          <p>Registration for Shop licence, PF, PAN, FSSAI and more</p>
        </div>
        <div>
          <h4>Trademark & digital signature</h4>
          <p>
            Trademark registrations and renewals; Digital signature certificate
          </p>
        </div>
      </div>
      </div>
      
      
    </>
  );
};

export default Looking;
