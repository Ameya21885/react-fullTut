import React, { createContext } from "react";
import UseContextOne from "./UseContextOne";

const FirstName = createContext();
const LastName = createContext();

const UseContextHooks = () => {
  return (
    <>
      UseContextHooks
      <br />
      <FirstName.Provider value={"Vinod"}>
        <LastName.Provider value={"Thapa"}>
          <UseContextOne />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default UseContextHooks;
export {FirstName, LastName}
