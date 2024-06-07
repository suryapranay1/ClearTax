import React from "react";
import "./maincontent.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HandshakeIcon from "@mui/icons-material/Handshake";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ArticleIcon from "@mui/icons-material/Article";

const Maincontent = () => {
  return (
    <div className="main">
      <div className="main-text">
        <h1>ITR filing has never been simpler</h1>
      </div>
      <div className="main-subtext">
        <h5>
          India’s only end-to-end tax filing platform for all kinds of income
        </h5>
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
              File your taxes yourself with ease<pre></pre> in no time with 100% accuracy
            </h4>
          </div>
          <div className="log1-button">
            <button>Start for free, pay only when you file</button>
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
              File taxes yourself with ease,<pre></pre>hire our tax experts if you need
            </h4>
          </div>
          <div className="log2-button">
            <button>Hire an Expert</button>
          </div>
        </div>
      </div>
      <div className="logos">
        <div className="symbols">
          <div className="subsymbols">
            <StarBorderIcon />
            <div className="symbol1">
              <div className="subtext1">4.9</div>
              <div>
                <h3>(15k+ reviews)</h3>
              </div>
            </div>
          </div>
          <div className="subsymbols">
            <HandshakeIcon />
            <div className="symbol2">
              <div className="subtext2">6M+</div>
              <div>
                <h3>users trust Clear Tax</h3>
              </div>
            </div>
          </div>
          <div className="subsymbols">
            <QueryBuilderIcon />
            <div className="symbol3">
              <div className="subtext3">1.8M+</div>
              <div>
                <h3>hours saved</h3>
              </div>
            </div>
          </div>
          <div className="subsymbols">
            <ArticleIcon />
            <div className="symbol4">
              <div className="subtext4">6M+</div>
              <div>
                <h3>worth taxes filed</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
