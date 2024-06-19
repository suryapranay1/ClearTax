import { Typography, Box } from "@mui/material";
import React from "react";

const Pugandplay = () => {
  return (
    <Box sx={{ padding: { xs: "1em", sm: "2em", md: "4em", lg: "6em" } }}>
      <Typography
        sx={{
          color: " #314259",
          fontSize: { xs: "2em", sm: "2.5em", md: "3em", lg: "4em" },
          fontWeight: 700,
          textAlign: { xs: "center", md: "left" },
          ml: { xs: "0", md: "9em" },
        }}
      >
        Plug and Play
      </Typography>
      <Typography
        sx={{
          color: "#9092A3",
          fontWeight: 500,
          fontSize: { xs: "1em", sm: "1.2em", md: "1.4em" },
          textAlign: { xs: "center", md: "left" },
          mt: { xs: "1em", md: "0.5em" },
          ml: { xs: "0", md: "20em" },
        }}
      >
        An exhaustive portfolio of cloud-based products you could use from day
        one
        <br />
        <span style={{ marginLeft: "6em" }}>
          for personal and business compliance
        </span>
      </Typography>
    </Box>
  );
};

export default Pugandplay;
