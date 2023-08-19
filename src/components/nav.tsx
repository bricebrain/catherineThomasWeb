import React,{useState} from 'react'
import {Link, useLocation } from 'react-router-dom'


function Nav() {
    const location = useLocation();
    const [menu, setMenu] = useState<boolean>(false)

    const handleMenu =()=>{
        setMenu(prev=>!prev)
    }

    const changeColor=()=>{

      if(menu){
        return 'white'
      }
      return location.pathname ==='/' ? 'white' : '#333'

    }

  return (
    <>
   
    <div  className="containerWrappNav" >
    <div className="menuCss" >
    <span  onClick={()=>handleMenu()} 
    
     style={{fontSize:40, color:changeColor()}}
    
    className="material-symbols-outlined">menu</span>
    </div>
    
    <ul >
       { menu && (<div  className="wrappNavMini">
        <li onClick={()=>handleMenu()}> <Link  className="aNav" style={{textDecoration:location.pathname ==='/' ? 'underline' : 'none'}} to='/'> Accueil</Link> </li>
        <li onClick={()=>handleMenu()}> <Link  className="aNav" style={{textDecoration:location.pathname ==='/about' ? 'underline' : 'none'}}  to='/about'>A propos</Link> </li>
        <li onClick={()=>handleMenu()}> <Link  className="aNav" style={{textDecoration:location.pathname ==='/parcours' ? 'underline' : 'none'}} to='/parcours'>Parcours</Link>  </li>
        <li onClick={()=>handleMenu()}> <Link  className="aNav" style={{textDecoration:location.pathname ==='/galerie' ? 'underline' : 'none'}} to='/galerie'>Galerie</Link> </li>
        <li onClick={()=>handleMenu()}> <Link  className="aNav" style={{textDecoration:location.pathname ==='/presse' ? 'underline' : 'none'}} to='/presse'>Presse</Link> </li>
        <li onClick={()=>handleMenu()}> <Link  className="aNav" style={{textDecoration:location.pathname ==='/contact' ? 'underline' : 'none'}}  to='/contact'>Contact</Link> </li></div>)}
    </ul>

    <ul >
      <div  className="wrappNavMax">
        <li > <Link  className="aNav" style={{textDecoration:location.pathname ==='/' ? 'underline' : 'none'}} to='/'> Accueil</Link> </li>
        <li > <Link  className="aNav" style={{textDecoration:location.pathname ==='/about' ? 'underline' : 'none'}}  to='/about'>A propos</Link> </li>
        <li > <Link  className="aNav" style={{textDecoration:location.pathname ==='/parcours' ? 'underline' : 'none'}} to='/parcours'>Parcours</Link>  </li>
        <li> <Link  className="aNav" style={{textDecoration:location.pathname ==='/galerie' ? 'underline' : 'none'}} to='/galerie'>Galerie</Link> </li>
        <li> <Link  className="aNav" style={{textDecoration:location.pathname ==='/presse' ? 'underline' : 'none'}} to='/presse'>Presse</Link> </li>
        <li> <Link  className="aNav" style={{textDecoration:location.pathname ==='/contact' ? 'underline' : 'none'}}  to='/contact'>Contact</Link> </li></div>
    </ul>
   
</div>
</>
  )
}

export default Nav


