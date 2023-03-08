import React, { useEffect, useState, Fragment } from "react";
import Header from "../components/Header";

const ManagePersonnel = () => {
  //State to show state of initial API request on render
  const [data, setData] = useState(null);
  //Load data from API on render
  useEffect(() => {
    fetch("http://localhost:9292/service_people")
    .then((r) => r.json())
    .then((personnelData) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <ModifiableList data = {data} />        
    </>
  );
};

export default ManagePersonnel;