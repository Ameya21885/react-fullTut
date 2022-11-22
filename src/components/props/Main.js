import Card from "./Card";
import React from "react";
import Sdata from "./Sdata";

const Main = () => {
  const ncard = (val) => {
    return (
      <Card
        imgsrc={val.imgsrc}
        sname={val.sname}
        title={val.title}
        link={val.links}
      />
    );
  };

  return (
    <>
      Main
      {Sdata.map(ncard)}
    </>
  );
};

export default Main;
