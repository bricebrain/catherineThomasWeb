import React, { useState } from 'react'
import Banner from '../components/Banner'
import { dataAssets } from '../data'

const groupGalerie = [
{nameData : 'ALL', label: 'ALL'},
{nameData : 'Venus', label: 'Venus 2000'} ,
{nameData : 'SeriedesTerracota2006', label: 'Serie des Terracota 2006'}, 
{nameData : 'SeriedesImpressionsTissus2009', label: 'Serie des Impressions Tissus 2009'}, 
{nameData : 'SeriedesPapiersChinois2011', label: 'Serie des Papiers Chinois 2011'}, 
]


function Galeries() {
    const ALL =  [...dataAssets.SeriedesTerracota2006, ...dataAssets.SeriedesImpressionsTissus2009,...dataAssets.SeriedesPapiersChinois2011, ...dataAssets.Venus]
    const [data, setData] = useState<string[]>(ALL)
    const [select, setSelect] = useState<string>('ALL')
    
const selectItem=(item:string)=>{
    setSelect(item)
    switch (item) {
        case 'ALL':
            
            setData(ALL)
            break;
        case 'SeriedesTerracota2006':
            setData(dataAssets.SeriedesTerracota2006)

            break;
        case 'SeriedesImpressionsTissus2009':
            setData(dataAssets.SeriedesImpressionsTissus2009)
            break;
        case 'SeriedesPapiersChinois2011':
            setData(dataAssets.SeriedesPapiersChinois2011)
            break;
        case 'Venus':
            setData(dataAssets.Venus)
            break;
        default:
            setData(ALL)
            break;
    }

   
}

  return (

    <div style={{width:'100vw', height:'100vh',  justifyContent:'center', paddingTop:60}}>
 <Banner title='GALERIE'/>
       
    
 <div > 
 <div style={{ height: 200,display: 'flex',justifyContent: 'center', marginTop:20}}>
    <div  style={{display: 'flex',flexDirection:'column',justifyContent: 'center', alignItems:'center', padding:10}}>
    {
        groupGalerie.map(item=> <span onClick={()=>selectItem(item.nameData)} key={crypto.randomUUID()}
         style={{paddingRight:10, cursor:'pointer', 
        fontSize:select === item.nameData ? '20px' : '16px', padding:10
        }}>{item.label}</span> )
    }

    </div>
   
 </div>


    <div className='wrapperGrid'>
    
      {data.map((item:any) => <img key={crypto.randomUUID()} className='itemGrid' src={require(`../assets/peintures/${item}`)} alt='dgg' style={{objectFit:'contain'}}/>)}
           
          
      
      
  

      

    </div>
   
        


</div>




     </div>
   
  )
}

export default Galeries

