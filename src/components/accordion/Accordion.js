import React, { useState } from 'react'
import AccordionMaterialUI from './AccordionMaterialUI';
import {questions} from './questions';

const Accordion = () => {

    const [data, setData]= useState(questions)
  return (
    <>
    Accordion
    
   <div style={{    width: '54%',
    justifyContent: 'center',
    margin: '15px',
    padding: '10px'}}>
   {
        data.map((curElem)=>{
            const{id}= curElem;
            return (
                <>
                <AccordionMaterialUI key={id} {...curElem}/>
                
                </>
            )
        })
    }
   </div>

    </>
  )
}

export default Accordion