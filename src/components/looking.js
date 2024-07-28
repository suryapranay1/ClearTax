import React from "react";
import "./looking.css";
import { Typography } from "@mui/material";

const Looking = () => {
  return (
    <>
      <div className="lookingcolor">
      <div className="lookingText">
        <Typography
          sx={{
            color: "#314259",
            fontSize: "3em",
            fontWeight: 700,
            margin: "0 1em",
            textAlign: "center"
          }}
        >
          Looking for expert services
        </Typography>
      </div>
      <div className="lookingParagraph">
        <Typography
          sx={{
            color: "#9092A3",
            fontWeight: 500,
            fontSize: "1.5em",
            margin: "0 2em",
            textAlign: "center"
          }}
        >
          In addition to providing software services, we also offer expert
          services to help you manage your business
          <br />
          <center>
            <span style={{ marginRight: "9em" }}>
              and legal compliances.
            </span>
          </center>
        </Typography>
      </div>
      <div className="sec">
        <div className="lookingsec1">
          <div>
            <Typography
              sx={{
                color: "#314259",
                fontSize: "2em",
                fontWeight: 700,
                marginBottom: "0.8em"
              }}
            >
              For You
            </Typography>
          </div>
          <div className="divtypoimg">

            <div className="divimg">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1605873415_taxreturnfilled.svg " style={{marginLeft:'-1em'}} alt="wwew"></img>
            </div>
            <div className="divtypo">
            <Typography
              sx={{
                color: "#314259",
                fontSize: "1.4em",
                fontWeight: 700,
                marginBottom: "0.8em"
              }}
            >
              ITR Filing Assistance
            </Typography>
            <Typography
              sx={{ color: "#9092A3", fontWeight: 500, fontSize: "1em" }}
            >
              Get Expert assistance in tax filing for<br />
              Salaried and self-employed individuals, NRIs,<br />
              Capital gains, and more.
            </Typography>
            </div>
           
          </div>
          <div className="divtypoimg">
          <div className="divimg">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1651557178_group17737.svg" alt="wee"></img>
            </div>
            <div className="divtypo">
            <Typography
              sx={{
                color: "#314259",
                fontSize: "1.4em",
                fontWeight: 700,
                marginBottom: "0.8em",
                marginTop: "1em"
              }}
            >
              TDS on Sale of Property
            </Typography>
            <Typography
              sx={{ color: "#9092A3", fontWeight: 500, fontSize: "1em" }}
            >
              Hassle-free 26QB compliance on sale of <br />
              property
            </Typography>
            </div>
            
          </div>
          <div className="divtypoimg">
          <div className="divimg">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1651557311_group17732.svg" alt="wee"></img>
            </div>
            <div className="divtypo">
            <Typography
              sx={{
                color: "#314259",
                fontSize: "1.4em",
                fontWeight: 700,
                marginBottom: "0.8em",
                marginTop: "1em"
              }}
            >
              Legal Services
            </Typography>
            <Typography
              sx={{ color: "#9092A3", fontWeight: 500, fontSize: "1em" }}
            >
              For drafting and review of legal documents<br />
              such as Sale deed, Vendor agreement, Co-<br />
              founders agreement etc
            </Typography>
            </div>
            
          </div>
        </div>
        <div className="lookingsec2">
          <div>
            <Typography
              sx={{
                color: "#314259",
                fontSize: "2em",
                fontWeight: 700,
                marginBottom: "0.8em"
              }}
            >
              For Your Business
            </Typography>
          </div>
          <div className="divtypoimg">
          <div className="divimg">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1651559294_group17652.svg" alt="wee"></img>
            </div>
            <div className="divtypo">
            <Typography
              sx={{
                color: "#314259",
                fontSize: "1.4em",
                fontWeight: 700,
                marginBottom: "0.8em"
              }}
            >
              Launch and run a startup
            </Typography>
            <Typography
              sx={{ color: "#9092A3", fontWeight: 500, fontSize: "1em" }}
            >
              Legal drafting, documentation review,<br />
              change in company name etc.
            </Typography>
            </div>
            
          </div>
          <div className="divtypoimg">
          <div className="divimg">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1651559329_incometaxreturns.svg" alt="wee"></img>
            </div>
            <div className="divtypo">
            <Typography
              sx={{
                color: "#314259",
                fontSize: "1.4em",
                fontWeight: 700,
                marginBottom: "0.8em",
                marginTop: "1em"
              }}
            >
              Government registrations
            </Typography>
            <Typography
              sx={{ color: "#9092A3", fontWeight: 500, fontSize: "1em" }}
            >
              Registration for Shop licence, PF, PAN, FSSAI<br />
              and more
            </Typography>
            </div>
           
          </div>
          <div className="divtypoimg">
          <div className="divimg">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1651559337_group18140924.svg" alt="wee"></img>
            </div>
            <div className="divtypo">
            <Typography
              sx={{
                color: "#314259",
                fontSize: "1.4em",
                fontWeight: 700,
                marginBottom: "0.8em",
                marginTop: "1em"
              }}
            >
              Trademark & digital signature
            </Typography>
            <Typography
              sx={{ color: "#9092A3", fontWeight: 500, fontSize: "1em" }}
            >
              Trademark registrations and renewals;<br />
              Digital signature certificate
            </Typography>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Looking;
