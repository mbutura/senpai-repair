import React, { useEffect, useState, Fragment } from "react";
import Header from "../components/Header";
import ModifiableTable from "../components/ModifiableTable";

const ManagePersonnel = () => {
  //State to show state of initial API request on render
  const [data, setData] = useState(null);
  //Load data from API on render
  useEffect(() => {
    fetch("http://localhost:9292/service_people")
    .then((r) => r.json())
    .then((personnelData) => setData(data))
  }, [data])

  return (
    <>
      <Header />
      {(data == null) ? null: <ModifiableTable {...{setData:setData, data:data}} />}
    </>
  );
};

export default ManagePersonnel;