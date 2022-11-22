import React from 'react'

const JsxAttributes = () => {

   const fname="Ameya"
   const img1="https://images.unsplash.com/photo-1667835949430-a2516cc93d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
const newlink= "https://reactjs.org/docs/create-a-new-react-app.html"

const heading={
  color:'#fa9191',
  textTransform: "capitalize",
  margin: '10px',
    padding: '5px',
    fontFamily: 'cursive'
}


  return (
    <>
    JsxAttributes
    <h1 contentEditable="true" style={{color: "lightblue"}}>{`My name: ${fname}`} </h1>
   <a href={newlink} target="_ameya">
   <img 
    src={img1} 
    alt='hi img'/>
   </a>

<hr/>
<h3>inLine css</h3>
<h3>internal css</h3>
<h3>externalcss adding a file call nameoffile.css</h3>
   <p style={heading}>and discover plugins for your favorite writing, design</p>
   <p>Lorem Ipsum placeholder text for use in your graphic, print </p>
<p>Generate and web layouts,  and blogging tools. Explore the origins, history and meaning of the famous passage, </p>
    </>
  )
}

export default JsxAttributes