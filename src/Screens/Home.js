import React from "react";
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import Project from "../Components/Project";
import Blog from "../Components/Blog";
import Technologies from "../Components/Technologies";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
      <Navbar isFromHome={true} />
      <Herosection />
      <Project isFromHome={true} />
      <Blog isFromHomes={true} />
      <Technologies />
      <Contact />
    </>
  );
}

export default Home;
