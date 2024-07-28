import React, { useState } from "react";
import { Typography, Box, Divider } from "@mui/material";
import { Modal } from "@mui/joy";
import './HoverModalResources.css'
const HoverModalP = ({ text, modalContent }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      sx={{ display: "inline-block", cursor: "pointer" }}
    >
      <Typography>{text}</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 1,
            position: "relative",
            width: "85vw",
            height: "85vh",
            maxWidth: "85vw",
            overflowY: "scroll",
            display: "flex",
            justifyContent: "space-between",
          }}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className="Read">
            <Typography>READ</Typography>
            <Divider />
            <div className="read1">
              <div className="readlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196404_case_studies.png"
                  width="50"
                  height="50"
                  alt='img1'
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Case Studies</Typography>
            </div>
            <div className="read2">
              <div className="readlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196177_newsletter.png"
                  width="50"
                  height="50"
                  alt="img2"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Newsletter</Typography>
            </div>
            <div className="read3">
              <div className="readlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683877966_opinion_notes.png"
                  width="50"
                  height="50"
                  alt="img3"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Opinion Notes</Typography>
            </div>
            <div className="read4">
              <div className="readlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196187_clear_learn.png"
                  width="50"
                  height="50"
                  alt="img4"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>ClearLearn</Typography>
            </div>
            <div className="read5">
              <div className="readlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196200_product_guides.png"
                  width="50"
                  height="50"
                  alt="img5"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Product Guides</Typography>
            </div>
            <div className="read6">
              <div className="readlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196211_newsroom.png"
                  width="50"
                  height="50"
                  alt="img6"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Newsroom</Typography>
            </div>
            <div className="read7">
              <div className="readlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196222_blog.png"
                  width="50"
                  height="50"
                  alt="img7"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Blog</Typography>
            </div>
          </div>
          <div className="watch">
            <Typography>WATCH</Typography>
            <Divider />
            <div className="watch1">
              <div className="watchlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196239_webinars.png"
                  width="50"
                  height="50"
                  alt="img10"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Webinars</Typography>
            </div>
            <div className="watch2">
              <div className="watchlogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196252_product_guidevideos.png"
                  width="50"
                  height="50"
                  alt="img11"
                ></img>
              </div>
              <Typography sx={{mt:2}}>Product Guides Videos</Typography>
            </div>
          </div>
          <div className="engage">
            <Typography>ENG</Typography>
            <Divider />
            <div className="engage1">
              <div className="engagelogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196264_events.png"
                  width="50"
                  height="50"
                  alt="img12"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Events</Typography>
            </div>
            <div className="engage2">
              <div className="engagelogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196276_faqs.png"
                  width="50"
                  height="50"
                  alt="img13"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>FAQs</Typography>
            </div>
            <div className="engage3">
              <div className="engagelogos">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1683196286_help_center.png"
                  width="50"
                  height="50"
                  alt="img14"
                ></img>
              </div>
              <Typography sx={{ mt: 2 }}>Help Center (Product Support)</Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default HoverModalP;
