import React from 'react'

function Navbar() {
  return (
    <div>
        <ul style={{listStyle:'none',display:'flex',justifyContent:'space-evenly',fontSize:'20px',fontWeight:'bold'}}>
            <li style={{marginLeft:'40px'}}>Home</li>
            <li style={{marginLeft:'40px'}}>About</li>
            <li style={{marginLeft:'40px'}}>Project</li>
            <li style={{marginLeft:'40px'}}>Services</li>
            <li style={{marginLeft:'40px'}}>Blog</li>
            <li style={{marginLeft:'40px'}}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar