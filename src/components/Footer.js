import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { LinkedIn } from "@mui/icons-material";
import Logo from "../assets/images/logo1.png";
import Link from "@mui/material";

const Footer = () => (
  <Box mt="80px">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "70px" }} />
    </Stack>
    <Typography
      variant="h6"
      sx={{ fontSize: { lg: "18px", xs: "15px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      color="white"
    >
      Made with React JS, Material UI, and Rapid API @2023
    </Typography>
    <Stack
      gap="40px"
      flexWrap="wrap"
      px="40px"
      pb="30px"
      flexDirection="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <a href="https://github.com/">
        <GitHubIcon style={{ color: "white" }} />
      </a>
      <a href="https://linkedin.com/">
        <LinkedIn style={{ color: "white" }} />
      </a>
      <a href="mailto:sarfarazahmed1012@gmail.com">
        <AttachEmailIcon style={{ color: "white" }} />
      </a>
    </Stack>
  </Box>
);

export default Footer;
