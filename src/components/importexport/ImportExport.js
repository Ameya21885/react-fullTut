import React from 'react'
import youtuber, {favprog, myName} from './One'
import * as ques from './Two'

const ImportExport = () => {
  return (
    <>
    ImportExport
    
    <ol>
      <li>Thapa</li>
      <li>{youtuber}</li>
      <li>{favprog}</li>
    <li>{myName()}</li>
     
    <li>{ques.default}</li>
<li>{ques.favprog}</li>
<li>{ques.myName()}</li>

    </ol>

    </>
  )
}

export default ImportExport

