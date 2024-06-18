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
    <Stack spacing={2}>
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
          <div className="panelSection1">
            <div className="clearInvoice">
              <div className="cleargst">
                <Typography
                  sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
                >
                  Clear e-invoice
                </Typography>
                <Typography
                  sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
                >
                  Fast, dependable and <br></br>afforable solution
                </Typography>
              </div>
            </div>
            <div className="clearGst">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                Clear GST
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                G1 to G9 filing, 10x faster<br></br> reconciliations &amp;
                reports
              </Typography>
            </div>
          </div>
          <div className="panelSection2">
            <div className="Cleare-Invoicing">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                CLearE-Waybill
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                10x faster waybill solution for<br></br> large businesses
              </Typography>
            </div>
            <div className="ClearMaxITC">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                ClearMax ITC
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                End-to-end solution to <br></br> maximize ITC for businesses
              </Typography>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={1}>
          <div className="panelSection3">
            <div className="cleargst">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                Clear GST
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                Comprehensive platform <br></br>for core GST compliance
              </Typography>
            </div>
            <div className="cleartaxxloud">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                ClearTax Cloud
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                Seamless ITR filing <br></br>platform for accountants
              </Typography>
            </div>
          </div>
          <div className="panelSection4">
            <div className="Clearetds">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                ClearTDS
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                Go-to platform for<br></br> effortless TDS returns
              </Typography>
            </div>
            <div className="Clearproapp">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                ClearPro App
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                Track filing status from<br></br> your phone in one click
              </Typography>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={2}>
          <div className="panelSection5">
            <div className="clearGst">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                ClearGST
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                From G1 to G9, 3x faster and <br></br>2-7% tax savings
              </Typography>
            </div>
            <div className="clearone">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                ClearOne
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                Billing, Payment Collection & <br></br>Inventory Software
              </Typography>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={3}>
          <div className="panelSection6">
            <div className="FileITR">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                FileITR
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                Complete tax returns in<br></br> under 3 minutes
              </Typography>
            </div>
            <div className="clearInvest">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                ClearInvest
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                Save and grow wealth with <br></br>expert-curated funds
              </Typography>
            </div>
          </div>
          <div className="panelSection7">
            <div className="ClearServices">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                ClearServices
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                Get experts for filing taxes<br></br> and starting up
              </Typography>
            </div>
            <div className="Black">
              <Typography
                sx={{ color: "#314259", fontWeight: 700, fontSize: "24px" }}
              >
                Black
              </Typography>
              <Typography
                sx={{ color: "#9092A3", fontWeight: 500, fontSize: "20px" }}
              >
                More money in your pocket<br></br> with Black app
              </Typography>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </Stack>
  );
}
