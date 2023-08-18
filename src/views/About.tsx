import React from 'react'
import TortueAbout from '../Tortues211.jpg'
import Banner from '../components/Banner'

function About() {
  return (

    <div style={{width:'100vw', height:'100vh',  justifyContent:'center', paddingTop:60}}>
 <Banner title='A PROPOS'/>
       
<div className='containerAbout'>
    <img src={TortueAbout}  className='imageAbout'/>
    <h2> La tortue, un corps à peindre</h2>
    <p>
        La tortue constitue et propose une réserve inépuisable de formes, de gestes, de mouvements où les pinceaux et les couleurs s’engouffrent avec toujours autant de curiosité. Elle dessine des espaces entre le carré et le cercle, entre l’émergence et la disparition, entre ce qui va et qui revient, entre la lumière et l’ombre.
      
        <br/>
        
        Ce corps archaïque et symbolique réveille en nous des traces multiples et profondes qui attisent notre mémoire. Le saisir dans l’instant, c’est s’interroger sur soi-même et sur les autres; c’est disposer du monde et de notre propre existence dans les thèmes ancestraux qui subsistent en chacun de nous.
        <br/>
        
      
        L’animal est travaillé dans des tensions paradoxales en série et au premier plan, en véritable sujet sans présence humaine.
        <br/>
    
        Je m’intéresse à la tortue en tant qu’ animal comme vecteur de mouvements et d’instants pris sur le vif. Ainsi, la tortue suscite-t-elle la rencontre inattendue ou la découverte étonnée avec le spectateur… Elle illustre aussi le mouvement contemporain de reconsidération et de défense de l’animal avec la nature.
        <br/>
    
        Les volumes des corps exploités au travers de la symétrie, la répétition, la frontalité, la densité formelle, la saturation sont proposés dans les tableaux colorés et sourds, aux collages discrets mais évocateurs, aux incisions de pastels et fusains.
        <br/>
   
        

        La tortue invite l’autre à sentir la force d’une présence pour signifier non pas tant son apparence que le témoignage direct, d’une vie, d’un cri !
        
        </p>
        


</div>




    </div>
   
  )
}

export default About


