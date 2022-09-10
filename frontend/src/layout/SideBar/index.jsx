import React from 'react';

import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav>
      <Link className='Category' to='/profile'>Profile</Link> |{" "}
      <Link className='Category' to='/project'>Project</Link> |{" "}
      <Link className='Category' to='/skill'>Skill</Link> |{" "}
      <Link className='Category' to='/board'>Board</Link> |{" "}
      <Link className='Category' to='/option'>Option</Link>
    </nav>
  )
}

export default SideBar;