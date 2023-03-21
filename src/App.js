import React from "react";
import Appbar from "./components/appbar/Appbar";
import Hero from "./components/hero/Hero";
import NavMenu from "./components/navigation/NavMenu";

const App = () => {
  return (
    <>
      {/* todo: fix the alignment of Toolbar icons with the navbar Hotline component */}
      <Appbar />
      <NavMenu />
      <Hero />
    </>
  );
};

export default App;
