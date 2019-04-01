import React from "react";

import Headers from "../layouts/Header";
import Landingpage from "../components/Home/landingpage";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Headers />
      <Landingpage />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
