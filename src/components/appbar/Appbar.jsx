import React from "react";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  [theme.breakpoints.up("md")]: {
    backgroundColor: grey[100],
  },
}));

const Appbar = () => {
  return (
    <StyledAppBar>
      <Header />
      <Navigation />
    </StyledAppBar>
  );
};

export default Appbar;
