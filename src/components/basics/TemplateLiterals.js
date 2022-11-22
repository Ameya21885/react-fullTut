import React from 'react'

const TemplateLiterals = () => {

    const fname= "Ameya"
    const lname= "Thakur"


  return (
    <>
    TemplateLiterals
    <h1>{`My name: ${fname} ${lname}`}</h1>
    <p>{5+5}</p>
    </>
  )
}

export default TemplateLiterals