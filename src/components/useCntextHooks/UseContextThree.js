import React, { useContext } from "react";
import { FirstName, LastName } from "./UseContextHooks";

const UseContextThree = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <>
      UseContextThree
      <h1>
        My name is {fname} {lname}
      </h1>
    </>
  );
};

export default UseContextThree;
