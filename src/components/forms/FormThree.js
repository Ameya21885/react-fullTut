import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const FormThree = () => {

  const[fullName, setFullName]= useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  })

  const inputEvent =(event)=>{

    console.log(event.target.value)

    const {name, value}= event.target;

    setFullName((prevValue)=>{
      console.log(prevValue);
      return {
        ...prevValue,
        [name]: value,
      }

    })

  }

  const onSubmits=(event)=>{
    event.preventDefault();
    alert("form submited")
  }


  return (
    <>
    FormThree
    <div>
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
    </div>

    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    
    onSubmit={onSubmits}
    >
      <TextField 
      id="outlined-basic" 
      label="First Name" 
      variant="outlined" 
      name='fname'
      onChange={inputEvent}
      value={fullName.fname}
      />
      <TextField 
      id="outlined-basic" 
      label="Last Name" 
      variant="outlined" 
      name='lname'
      onChange={inputEvent}
      value={fullName.lname}
      />
      <TextField 
      id="outlined-basic" 
      label="Email-id" 
      variant="outlined" 
      name='email'
      onChange={inputEvent}
      value={fullName.email}
      />
      <TextField 
      id="outlined-basic" 
      label="Phone" 
      variant="outlined" 
      name='phone'
      type='number'
      onChange={inputEvent}
      value={fullName.phone}
      />
      
      <br/>
    <Button variant="contained" type='submit'>Submit Me 👍</Button>

    </Box>

    </div>

    </>
  )
}

export default FormThree