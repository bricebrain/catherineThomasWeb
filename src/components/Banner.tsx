import React from 'react'

type BannerProps= {
    title:string
}

const Banner=({title}:BannerProps)=> {
  return (
    <div
    style={{height:'20%',width:'100vw', backgroundColor:'#1D1300', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'white', fontSize:'3em' }}
    >
        {title}
        <div style={{height:5,marginTop:10, width:50, backgroundColor:'#8A8060'}}></div>
    
    </div>
  )
}

export default Banner