import * as React from 'react';
import './Terminal.css'

function Terminal() {
  return (
    <div>
      <h1>Hello, Terminal</h1>
      <div className="terminalInput">
        <p>$ </p><input></input>
      </div>
    </div>
  )
}

export default Terminal;