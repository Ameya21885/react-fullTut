import { Button } from "@mui/material";
import React, {useState} from "react";

const Greeting = () => {

  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtimee]= useState(newTime)

  const UpdateTime =()=>{
    newTime = new Date().toLocaleTimeString();
    setCtimee(newTime)
  }
  setInterval(UpdateTime, 1000)



  

  let curDate = new Date();
  curDate = curDate.getHours();
  let GreetingCustomer = "";

  const cssStyle = { }

  if (curDate >= 1 && curDate < 12) {
    GreetingCustomer = "Good Morning";
    cssStyle.color="green"
  } else if (curDate >= 12 && curDate < 19) {
    GreetingCustomer = "Good Afternoon";
    cssStyle.color="purple"

  } else {
    GreetingCustomer = "Good Night";
    cssStyle.color="lightBlue"

  }

  return (
    <>
      Greeting
      <h1>Hello Sir, <span  style={cssStyle}>{GreetingCustomer}</span></h1>
   
   <h1>{ctime}</h1>
   {/* <Button onClick={UpdateTime}>get Time</Button> */}
    </>
  );
};

export default Greeting;
