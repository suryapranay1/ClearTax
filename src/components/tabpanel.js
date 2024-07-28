import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Stack from "@mui/joy/Stack";
import { styled } from "@mui/joy/styles";
import "./tabpanel.css";
import { Typography } from "@mui/material";

const CustomTabList = styled(TabList)({
  "& .MuiTabs-indicator": {
    display: "none", // Hide the indicator
  },
});

const CustomTab = styled(Tab)({
  "&.Mui-selected": {
    borderBottom: "none", // Remove the bottom border for selected tab
  },
  borderBottom: "none", // Remove the bottom border for non-selected tabs
});

export default function TabsIconWithText() {
  return (
    <Stack spacing={2} sx={{ width: '80%', ml: 'auto', mr: 'auto', height: '45em' }}>
      <Tabs aria-label="Icon tabs" defaultValue={0}>
        <CustomTabList tabFlex="auto">
          <CustomTab orientation="vertical">
            <ListItemDecorator>
              <img
                src="https://assets1.cleartax-cdn.com/cleartax/images/1605874053_enterprise.svg"
                alt="Enterprise"
              />
            </ListItemDecorator>
            Enterprise
          </CustomTab>
          <CustomTab orientation="vertical">
            <ListItemDecorator>
              <img
                src="https://assets1.cleartax-cdn.com/cleartax/images/1605873968_taxexpert.svg"
                alt="Tax Expert"
              />
            </ListItemDecorator>
            Tax Expert
          </CustomTab>
          <CustomTab orientation="vertical">
            <ListItemDecorator>
              <img
                src="https://assets1.cleartax-cdn.com/cleartax/images/1605874025_sme.svg"
                alt="SMEs"
              />
            </ListItemDecorator>
            SMEs
          </CustomTab>
          <CustomTab orientation="vertical">
            <ListItemDecorator>
              <img
                src="https://assets1.cleartax-cdn.com/cleartax/images/1605873928_individuals.svg"
                alt="Individual"
              />
            </ListItemDecorator>
            Individual
          </CustomTab>
        </CustomTabList>
        <TabPanel value={0}>
          <div className="panelSection panelSection1">
            <div className="clearInvoice">
              <div className="img1logo">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1606372771_einvoicing3.png" alt="wee"></img>
              </div>
              <div className="cleargst">
                <Typography
                  sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" ,ml:2}}
                >
                  Clear e-invoice
                </Typography>
                <Typography
                  sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" ,ml:2}}
                >
                  Fast, dependable and <br></br>affordable solution
                </Typography>
              </div>
            </div>
            <div className="clearGst">
              <div className="img1logo">
                <img src='https://assets1.cleartax-cdn.com/cleartax/images/1603967824_ic_clear_gst.svg' alt="wee"></img>
              </div>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" ,ml:2}}
              >
                Clear GST
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" ,ml:2}}
              >
                G1 to G9 filing, 10x faster<br></br> reconciliations &amp;
                reports
              </Typography>
              </div>
              
            </div>
          </div>
          <div className="panelSection panelSection2">
            
            <div className="Cleare-Invoicing">
            <div className="img1logo">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1603967983_ic_ewayb.svg" alt="wee"></img>
            </div>
            <div>
            <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" ,ml:2}}
              >
                ClearE-Waybill
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" ,ml:2}}
              >
                10x faster waybill solution for<br></br> large businesses
              </Typography>
            </div>
              
            </div>
            <div className="ClearMaxITC">
              <div className="img1logo">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1623152598_taxsavings.png" alt="wee"></img>
              </div>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" ,ml:2}}
              >
                ClearMax ITC
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                End-to-end solution to <br></br> maximize ITC for businesses
              </Typography>
              </div>
              
            </div>
          </div>
        </TabPanel>
        <TabPanel value={1}>
          <div className="panelSection panelSection3">
            <div className="clearggst">
              <div className="imglogo1">
<img src="https://assets1.cleartax-cdn.com/cleartax/images/1603967824_ic_clear_gst.svg" alt="wee"></img>
              </div>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                Clear GST
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                Comprehensive platform <br></br>for core GST compliance
              </Typography>
              </div>
              
            </div>
            <div className="cleartaxxloud">
              <div className="imglogo1">
<img src="https://assets1.cleartax-cdn.com/cleartax/images/1606218204_cleartds.svg" alt="wee"></img>
              </div>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                ClearTax Cloud
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                Seamless ITR filing <br></br>platform for accountants
              </Typography>
              </div>
              
            </div>
          </div>
          <div className="panelSection panelSection4">
            <div className="Clearetds">
              <div className="imglogo1">
<img src="https://assets1.cleartax-cdn.com/cleartax/images/1614344289_clearproapp.svg" alt="wee"></img>
              </div>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                ClearTDS
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                Go-to platform for<br></br> effortless TDS returns
              </Typography>
              </div>
              
            </div>
            <div className="Clearproapp">
              <div className="imglogo1">
<img src="https://assets1.cleartax-cdn.com/cleartax/images/1603968183_ic_taxcloud.svg" alt="wee"></img>
              </div>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                ClearPro App
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                Track filing status from<br></br> your phone in one click
              </Typography>
              </div>
              
            </div>
          </div>
        </TabPanel>
        <TabPanel value={2}>
          <div className="panelSection panelSection5">
            <div className="clearGst">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1603967824_ic_clear_gst.svg" alt="wee"></img>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                ClearGST
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                From G1 to G9, 3x faster and <br></br>2-7% tax savings
              </Typography>
              </div>
              
            </div>
            <div className="clearone">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1618557796_clearone.svg" alt="wee"></img>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                ClearOne
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                Billing, Payment Collection & <br></br>Inventory Software
              </Typography>
              </div>
              
            </div>
          </div>
        </TabPanel>
        <TabPanel value={3}>
          <div className="panelSection panelSection6">
            <div className="FileITR">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1603968068_ic_itr.svg" alt="wee"></img>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                FileITR
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                Complete tax returns in<br></br> under 3 minutes
              </Typography>
              </div>
              
            </div>
            <div className="clearInvest">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1606217655_clearinvest.svg" alt="wee"></img>
              <div> <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                ClearInvest
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                Save and grow wealth with <br></br>expert-curated funds
              </Typography></div>
             
            </div>
          </div>
          <div className="panelSection panelSection7">
            <div className="ClearServices">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1606217684_clearservices.svg" alt="wee"></img>
              <div> <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                ClearServices
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                Get experts for filing taxes<br></br> and starting up
              </Typography></div>
             
            </div>
            <div className="Black">
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1603967633_ic_black_app.svg" alt="wee">

              </img>
              <div>
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px",ml:2 }}
              >
                Black
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px",ml:2 }}
              >
                More money in your pocket<br></br> with Black app
              </Typography>
              </div>
             
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </Stack>
  );
}
