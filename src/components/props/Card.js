import { Button } from "@mui/material";
import React from "react";
import './card.css';


const Card = (props) => {
 
  return(
    <>
   <div className="main">
    <img src="https://images.unsplash.com/photo-1492112007959-c35ae067c37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80" alt=""/>
   <div className="content">
    <h3>sname</h3>
    <h4>title</h4>
   </div>
   <div>
    <a href="https://unsplash.com/photos/6mwtDZUOFrw" target='blank'>
    <Button>Watch now</Button>
    </a>
   </div>
   </div>


   <div className="main">
    <img src={props.imgsrc} alt=""/>
   <div className="content">
    <h3>{props.sname}</h3>
    <h4>{props.title}</h4>
   </div>
   <div>
    <a href={props.link} target='blank'>
    <Button>Watch now</Button>
    </a>
   </div>
   </div>
 
    </>
  )
};

export default Card;
