import React from 'react';

// import { Link } from "react-router-dom";


function BottomBar() {
  return (
    <nav>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">Instagram</a> |{" "}
      <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">YouTube</a> |{" "}
      <a target="_blank" rel="noreferrer" href="https://www.github.com/">GitHub</a> 
    </nav>
  )
}

export default BottomBar;

// Garbage bin
// <Link className='Category' to={{ pathname: "https://www.instagram.com/" }} target="_blank">Instagram</Link> |{" "}
// <Link className='Category' to={{ pathname: "https://www.youtube.com/" }} target="_blank">YouTube</Link> |{" "}
// <Link className='Category' to={{ pathname: "https://www.github.com/" }} target="_blank">GitHub</Link>
