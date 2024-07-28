import React, { useState } from "react";
import { Typography, Box, Divider } from "@mui/material";
import { Modal } from "@mui/joy";
import './HoverModalProducts.css';
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
            overflowY:'scroll',
            display:'flex',
            justifyContent:'space-between'
          }}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className="individual">
            <Typography>INDIVIDUAL PRODUCTS</Typography>
            <Divider />
            <div className="individual1">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1683875611_cleartds.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>GST</Typography>
            </div>
            <div className="individual2">
              <div className="individuallogos">
                <img src="https://assets.clear.in/cleartax/images/1702036542_financing.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>Accounts payable</Typography>
            </div>
            <div className="individual3">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1683876414_cimplyfive.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>Vendor Management</Typography>
            </div>
            <div className="individual4">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1683875669_cleargst.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>MaxITC</Typography>
            </div>
            <div className="individual5">
              <div className="individuallogos">
                <img src="https://assets.clear.in/cleartax/images/1702036465_group181447822.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>E-Invoicing & E-Way Bill</Typography>
            </div>
            <div className="individual6">
              <div className="individuallogos">
                <img src="https://cdn.prod.website-files.com/6093bce33d9b4bae841b04e3/667addb87d1a644b52ef6af2_Vendor%20management%20(1).png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>TDS</Typography>
            </div>
            <div className="individual7">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1676974439_group1000004144.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>Invoice Discounting</Typography>
            </div>
            <div className="individual8">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1676974427_group1000004146.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>Financing</Typography>
            </div>
            <div className="individual8">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1683875525_id.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>Climplyfive</Typography>
            </div>
          </div>
          <div className="product">
            <Typography>PRODUCT SUITES</Typography>
            <Divider />
            <div className="product1">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1683876315_cfc.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>clear Finance Cloud</Typography>
            </div>
            <div className="product2">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1683876341_ccc.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>Clear Compliance Cloud</Typography>
            </div>
            <div className="individual3">
              <div className="individuallogos">
                <img src="https://assets.clear.in/cleartax/images/1716990871_supplaychain_.svg" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>Clear Supply Chain Cloud</Typography>
            </div>
          </div>
          <div className="consumer">
            <Typography>CONSUMER PRODUCTS</Typography>
            <Divider />
            <div className="consumer1">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1683875678_fileitr.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>clear Finance Cloud</Typography>
            </div>
            <div className="consumer2">
              <div className="individuallogos">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1683876285_taxconsultant.png" width='50' height='50' alt="img"></img>
              </div>
              <Typography sx={{mt:2}}>Clear Compliance Cloud</Typography>
            </div>
          </div>
          
        </Box>
      </Modal>
    </Box>
  );
};

export default HoverModalP;
