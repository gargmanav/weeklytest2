import React from 'react'

function Fouter() {
  return (
    <div className='footers' style={{width:'100%',height:'400px',backgroundColor:'#18263B',display:'flex',color:'white',fontSize:'20px',justifyContent:'space-evenly',marginTop:'40px'}}>
        <div className='Aboutus'>
            <h2 style={{color:'#66A7D9'}}>About Us</h2>
            <ol style={{listStyle:"none"}}>
                <li>Support Center</li>
                <li>Customer Support</li>
                <li>About Us</li>
                <li>Copyright</li>
            </ol>
            <img src='./images/logowhite.png' alt='picto' style={{width:'100px',height:'60px',marginLeft:'30px',marginTop:'50px'}}></img>
        </div>
        <div className='OurInformation'>
        <h2 style={{color:'#66A7D9'}}>Our Information</h2>
            <ol style={{listStyle:"none"}}>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Site Map</li>
            </ol>
            <img src='./images/logowhite.png' alt='picto' style={{width:'100px',height:'60px',marginLeft:'30px',marginTop:'50px'}}></img>
        </div>
        <div className='MyAccount'>
        <h2 style={{color:'#66A7D9'}}>My Account</h2>
            <ol style={{listStyle:"none"}}>
                <li>Press inequires</li>
                <li>Social Media</li>
                <li>Directories</li>
                <li>Images & B-roll</li>
            </ol>
            <img src='./images/logowhite.png' alt='picto' style={{width:'100px',height:'60px',marginLeft:'30px',marginTop:'50px'}}></img>
        </div>
        <div className='contacts'>
        <h2 style={{color:'#66A7D9'}}>Contact</h2>
            <ol style={{listStyle:"none"}}>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ol>
        </div>
    </div>
  )
}

export default Fouter