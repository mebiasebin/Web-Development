import React, { useState } from 'react'

function ColorChange() {
    const [randomColor, setColor] = useState("")
    const generateColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        setColor('#' + randomColor);
    };
  return(
    <div className='cChange' style={{backgroundColor:randomColor, padding:200}}>
        <h1>Generate Random Color</h1>
        <button onClick={generateColor}>Generate random color</button>
    </div>
  )
}

export default ColorChange