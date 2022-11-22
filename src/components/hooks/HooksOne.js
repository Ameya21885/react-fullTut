import { Button } from '@mui/material'
import React, {useState} from 'react'

const HooksOne = () => {

    const [add, setAdd]= useState(0)

    const Add=()=>{
        setAdd(add+1)
    }

    const Sub=()=>{
        setAdd(add-1)
    }

    const Add50=()=>{
        setAdd(add+50)
    }


  return (
    <>
    HooksOne
    <h1>{add}</h1>
    <Button onClick={Add}>Click me +1</Button>
    <Button onClick={Sub}>Click me -1</Button>
    <Button onClick={Add50}>Click me +50</Button>


    </>
  )
}

export default HooksOne