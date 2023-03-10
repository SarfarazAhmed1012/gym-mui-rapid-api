import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo1.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "108px", height: "38px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            borderBottom: "3px solid #80b3ff",
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "white" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
