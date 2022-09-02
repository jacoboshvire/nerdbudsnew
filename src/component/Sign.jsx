import React from 'react';
import '../style/sign.css';
import { NavLink } from 'react-router-dom';

function Sign() {
  return (
    <div className='sign_page'>
      <div id="inside_page">
        <div className='the_header'>
          <NavLink to={"/"} className="ink_sign">Home</NavLink>
        </div>
        <div id="main_path">
          <h1>
            Coming Soon
          </h1>
          <p>
          We will be launch of our new site very soon!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sign
