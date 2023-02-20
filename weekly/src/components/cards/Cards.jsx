import React from 'react'

function Cards(props) {
  return (
    <div className='maincard' style={{backgroundColor:'#A8B8FF' , height:'300px',width:'400px',marginTop:'50px',borderRadius:'8px'}}>
        <img src={props.img} alt='picto' style={{height:'200px',width:'320px',marginTop:'-15px'}}></img>
        <h2 style={{marginTop:'50px',color:'#4A5660'}}>{props.name}</h2>
    </div>
  )
}

export default Cards