import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const FormOne = () => {

    const [name, setName]= useState();
    const [fullname, setFullName]= useState();


    const inputEvent=(event)=>{
       console.log(event.target.value)
        setName(event.target.value)
    }

    const onSubmit=()=>{
        setFullName(name);
    }

  return (
    <>
      FormOne
      <h2>{fullname}</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
      
        <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined"
        value={name}
        onChange={inputEvent}

        />

<Button variant="contained" onClick={onSubmit}>Submit</Button>
      </Box>
    </>
  );
};

export default FormOne;
