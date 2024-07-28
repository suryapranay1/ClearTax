import React from "react";
import "./maincontent.css";
import { Typography } from "@mui/material";

const Maincontent = () => {
  return (
    <div className="main">
      <div className="main-text">
        <h1>File your taxes now in 3-easy steps</h1>
      </div>
      <div className="main-subtext">
        <h5>Beat the deadline, avoid penalties & last min rush</h5>
      </div>
      <div className="main-content">
        <div className="division1">
          <div className="logo1">
            <img src="img/boyleft.png" alt="boyleft" />
          </div>
          <div className="log1-content">
            <h2>File ITR Yourself</h2>
          </div>
          <div className="log1-subcontent">
            <h4>
              File your taxes yourself with ease in no time with 100% accuracy
            </h4>
          </div>
          <div className="log1-button">
            <button>File Now</button>
          </div>
        </div>
        <div className="division2">
          <div className="logo2">
            <img src="img/girlleft.png" alt="girlleft" />
          </div>
          <div className="log2-content">
            <h2>Hire a Tax Expert</h2>
          </div>
          <div className="log2-subcontent">
            <h4>
              Let our top tax experts file <pre></pre>your taxes end to end
            </h4>
          </div>
          <div className="log2-button">
            <button>Hire an Expert</button>
          </div>
        </div>
      </div>
      <div className="symbols">
        <div className="subsymbols">
          <div className="img1">
            <img src="https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/04f0df96-6d3a-4cc2-beaf-bdf1281e324a.svg" alt="icon1"/>
          </div>
          <div className="img1down">
            <div className="subtext1">4.9</div>
            <div className="subsubtext">
              <Typography sx={{ color: '#9092A3', fontWeight: '500', fontSize: '16px' }}>(15k+ reviews)</Typography>
            </div>
          </div>
        </div>
        <div className="subsymbols">
          <div className="img1">
            <img src="https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/26a5c526-8355-4ea0-9c60-4f25f135a698.svg" alt="icon2"/>
          </div>
          <div className="img1down">
            <div className="subtext1">6M+</div>
            <div className="subsubtext">
              <Typography sx={{ color: '#9092A3', fontWeight: '500', fontSize: '16px' }}>users trust Clear Tax</Typography>
            </div>
          </div>
        </div>
        <div className="subsymbols">
          <div className="img1">
            <img src="https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/cf96f34a-2345-4f05-830b-568ac9c0947a.svg" alt="icon3"/>
          </div>
          <div className="img1down">
            <div className="subtext1">1.8M+</div>
            <div className="subsubtext">
              <Typography sx={{ color: '#9092A3', fontWeight: '500', fontSize: '16px' }}>hours saved</Typography>
            </div>
          </div>
        </div>
        <div className="subsymbols">
          <div className="img1">
            <img src="https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/9169b3ee-90ce-43fa-9226-aeef90099db6.svg" alt="icon4"/>
          </div>
          <div className="img1down">
            <div className="subtext1">6M+</div>
            <div className="subsubtext">
              <Typography sx={{ color: '#9092A3', fontWeight: '500', fontSize: '16px' }}>worth taxes filed</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
