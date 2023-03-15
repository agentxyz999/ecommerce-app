import React from "react";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import AppBar from "@mui/material/AppBar";
import { grey } from "@mui/material/colors";

const Appbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: grey[50] }}>
      <Header />
      <Navigation />
    </AppBar>
  );
};

export default Appbar;
