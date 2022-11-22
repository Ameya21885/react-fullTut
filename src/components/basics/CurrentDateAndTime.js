import React from 'react'

const CurrentDateAndTime = () => {

    const currDate= new Date().toLocaleDateString();
    const currTime= new Date().toLocaleTimeString();

  return (
    <>
    CurrentDateAndTime
    <h1>{`Current Date: ${currDate}`}</h1>
    <h1>{`Current Time: ${currTime}`}</h1>

    </>
  )
}

export default CurrentDateAndTime