import React from 'react'
import Tort from '../Tort.jpg'

const Open =()=>{

    return <div style={{backgroundColor:'black', color:'white', fontSize:'16px', padding: 10 }}>
        Entree dans mon univers
    </div>
}


const Title =()=>{

    return <div style={{ color:'white', fontFamily:'cursive', width:'70%' ,
    marginLeft: '20%',
    display:'flex', justifyContent:'center', flexDirection:'column'
    
    }}>
      <h1  className="fontTitle" style={{ zIndex:999}}> Catherine Thomas</h1>
      <h3> Artiste Amoureuse des Tortues</h3>
    </div>
}




function Landing() {
  return (
    <div 
    className='landing'
    
    style={{ 
    display:'flex',
    //flexDirection:'column',
    //alignItems:'flex-end',
   
    
   }}>


     <Title/>

    <img src={Tort} width={'35%'} height={'100%'} style={{objectFit:'contain'}}/>
        
        
        
        {/* <Open/> */} 
        </div>
  )
}

export default Landing