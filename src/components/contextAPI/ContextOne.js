import React from "react";
import { createContext } from "react";
import ComA from "./ComA";

// create context
const FirstName = createContext();
const LastName = createContext();

const ContextOne = () => {
  return (
    <>
      ContextOne
      <hr />
      <h1>Methods</h1>
      createContext(), provider, consumer
      <hr />
      Parent components to child components
      <hr />
      <FirstName.Provider value={"Vinod"}>
        <LastName.Provider value={"Thapa"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ContextOne;
export { FirstName, LastName };
