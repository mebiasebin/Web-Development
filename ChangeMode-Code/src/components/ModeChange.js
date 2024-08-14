import React, { useState } from 'react'

function ModeChange() {
    const [mode, setMode] = useState("grey")
    const handleChange = () => {
    setMode(mode === "grey" ? "white" : "grey")
  };
  return(
    <div style={{backgroundColor: mode, padding:200}}>
        <h1>Change Mode</h1>
        <button onClick={handleChange} >Change Mode</button>
    </div>
  )
}

export default ModeChange