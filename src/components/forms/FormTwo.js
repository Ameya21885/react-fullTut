import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const FormTwo = () => {

    const [name, setName]= useState();
    const [lastname, setLastName]= useState();

    const [fullname, setFullName]= useState();


    const inputEvent=(event)=>{
       console.log(event.target.value)
        setName(event.target.value)
    }
    
    const inputEventTwo=(event)=>{
        console.log(event.target.value)
         setLastName(event.target.value)
     }
 

    const onSubmit=(event)=>{
        event.preventDefault();
        const fullName= name+lastname;
        setFullName(fullName);
    }

  return (
    <>
    FormTwo
    <h2>Hello, {fullname}</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        onClick={onSubmit}
      >
   
        <TextField 
        id="outlined-basic" 
        label="First Name" 
        variant="outlined"
        value={name}
        onChange={inputEvent}

        />
         <TextField 
        id="outlined-basic" 
        label="Last Name" 
        variant="outlined"
        value={lastname}
        onChange={inputEventTwo}

        />

<Button variant="contained" type="submit">Submit</Button>
      </Box>
    </>
  )
}

export default FormTwo