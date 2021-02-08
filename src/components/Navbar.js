import React from 'react'

// Function name matches file name
const Navbar = () => {
    // return must have one parent element
    return (
        <div>
      <nav>
          <ul className="nav-link"> 
          <li><a href ="#NASA">NASA</a></li>
          <li><a href ="#Weather">Weather</a></li>
          <li><a href ="#Restaurant">Restaurant</a></li>
          </ul>
      </nav>
         </div>
    )
}

// Makes it available for import
export default Navbar;