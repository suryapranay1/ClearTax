import React from "react";
import "./main5.css";
import { Typography } from "@mui/material";

function Main5() {
  return (
    <>
      <div className="main5section">
        <div className="main5">
          <Typography
            sx={{ fontWeight: 700, fontSize: "3.5em", color: "#314259" }}
          >
            All our products<br />are designed to<br />deliver
          </Typography>
        </div>
        <div className="main5img">
          <img
            alt="allproductsrhs"
            width="560"
            height="370.1"
            loading="lazy"
            src="https://assets1.cleartax-cdn.com/cleartax/images/1607343426_allproductsrhs.png "
          />
        </div>
      </div>
      <div className="mainallsection">
        <div className="main5section1">
          <div className="main5logo1" style={{ marginBottom: '1em' }}>
            <img
              className="lil-h-12"
              src="https://assets1.cleartax-cdn.com/cleartax/images/1605873617_taxsaving.svg"
              alt="taxsaving"
              width="48"
              height="48"
              loading="lazy"
            />
          </div>
          <div className="main5Text1">
            <Typography
              sx={{ color: "#314259", fontWeight: "700", fontSize: "2em", mb: '0.8em' }}
            >
              Maximum tax <br />savings
            </Typography>
          </div>
          <div className="main5Paragraph1">
            <Typography
              sx={{ color: "#9092A3", fontSize: "20px", fontWeight: "500" }}
            >
              Businesses save up to 2-7% of their net<br /> GST with us every
              month. Individuals<br /> can save up to ₹86,500 by filing their<br /> tax returns through us.
            </Typography>
          </div>
        </div>
        <div className="main5section2">
          <div className="main5logo2" style={{ marginBottom: '1em' }}>
            <img
              className="lil-h-12"
              src="https://assets1.cleartax-cdn.com/cleartax/images/1605873731_unparalleled.svg"
              alt="unparalleled"
              width="48"
              height="48"
              loading="lazy"
            />
          </div>
          <div className="main5Text2">
            <Typography
              sx={{ color: "#314259", fontWeight: "700", fontSize: "2em", mb: '0.8em' }}
            >
              Unparalleled <br />speed
            </Typography>
          </div>
          <div className="main5Paragraph2">
            <Typography
              sx={{ color: "#9092A3", fontSize: "20px", fontWeight: "500" }}
            >
              Experience 3x faster GST filings, 5x<br /> faster invoice
              reconciliation and 10x<br /> faster e-waybill generation.
              Individuals <br />file their tax returns in under 3 min.
            </Typography>
          </div>
        </div>
        <div className="main5section3">
          <div className="main5logo3" style={{ marginBottom: '1em' }}>
            <img
              className="lil-h-12"
              src="https://assets1.cleartax-cdn.com/cleartax/images/1605873842_fullcompliance.svg"
              alt="fullcompliance"
              width="48"
              height="48"
              loading="lazy"
            />
          </div>
          <div className="main5Text3">
            <Typography
              sx={{ color: "#314259", fontWeight: "700", fontSize: "2em", mb: '0.8em' }}
            >
              Accurate<br /> Compliance
            </Typography>
          </div>
          <div className="main5Paragraph3">
            <Typography
              sx={{ color: "#9092A3", fontSize: "20px", fontWeight: "500" }}
            >
              Our products are designed and tested<br /> by in-house tax
              experts, ensuring every <br />new clause, form or feature is
              updated<br /> and sent to you over the cloud.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main5;
