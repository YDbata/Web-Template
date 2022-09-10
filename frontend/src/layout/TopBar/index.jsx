import React from 'react';

import { Link } from "react-router-dom";

function TopBar() {
  return (
    <nav>
      <Link className='Category' to='/home'>Home</Link> |{" "}
      <Link className='Category' to='/view'>View</Link> |{" "}
      <Link className='Category' to='/state'>State</Link> |{" "}
      <Link className='Category' to='/terminal'>Terminal</Link> |{" "}
      <Link className='Category' to='/git'>Git</Link> |{" "}
      <Link className='Category' to='/edit'>Edit</Link> |{" "}
      <Link className='Category' to='/help'>Help</Link>
    </nav>
  )
}

export default TopBar;