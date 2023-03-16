import React from "react";
import Appbar from "./components/appbar/Appbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      {/* todo: fix the alignment of Toolbar icons with the navbar Hotline component */}
      <Appbar />
      <Hero />
    </>
  );
};

export default App;
