import React, { useState, Fragment } from "react";
import Header from "../components/Header";
import Map from "../components/Map";

const Manage = () => {
  const mapHeightVar = "512px";
  // eslint-disable-next-line
  const [JobOfInterest, setJobOfInterest] = useState(null);

  return (
    <>
      <Header />
      <Map setJobOfInterest={setJobOfInterest} mapHeightVar={mapHeightVar} />
    </>
  );
};

export default Manage;