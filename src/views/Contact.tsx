import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import Banner from '../components/Banner'

function Contact() {
  const [done, setDone] = useState<boolean>(false)
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null >(null)
  const [text, setText] = useState<string | null>(null)
  const [error, setError] = useState<boolean>(false)

  const sendEmail = () => {
    emailjs.send(
      'service_3fr5d9e',
      'template_gr2epar', // Utilisez l'ID du modèle que vous avez créé sur EmailJS
      {
        to_email: 'catherinethomassiteweb@gmail.com',
        message: text,
        from_name:name,
        email_contact:email
      },
      'zFz_vvRRy-jJpY7fj'
    )
    .then((response) => {
      console.log('Email sent:', response);
      setDone(true)
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  };


  const submit =()=>{
    if(name == null ){
        setError(true)
        return 0
    }
    if(text == null ){
      setError(true)
      return 0
  }

  if(email == null ){
    setError(true)
    return 0
}
sendEmail()

}


const handleChangeName= (e:any)=>{
  setName(e.target.value)}

const handleChangeEmail= (e:any)=>{
  setEmail(e.target.value)
  }
  const handleChangeText= (e:any)=>{
    setText(e.target.value)
    }




  return (

    <div style={{width:'100vw', height:'100vh',  justifyContent:'center', paddingTop:60}}>
 <Banner title='CONTACT'/>
       
{done == false && <div className='containerAbout'>
    <h2> ATELIER 147</h2>
    <h2>13, rue de Chatillon 92170 Vanves</h2>
    <br/>
    <br/>
    

    <h3>Nom Prenom </h3>
    <input 
        onChange={(e)=>handleChangeName(e)}

    style={{padding:5, width:300}}
    placeholder={'Nom et Prénom '} name="name"></input>
    <br/>
    <br/>

    <h3>Email</h3>
    <input 
    onChange={(e)=>handleChangeEmail(e)}
    type='email'
    style={{padding:5, width:300}}
    placeholder={'Email'} name="eamil"></input>
    <br/>
    <br/>

  <h3>Votre Message</h3>
    <textarea 
        onChange={(e)=>handleChangeText(e)}

     style={{padding:5, width:300}}
    placeholder={'Entrez votre message'}
    rows={5} cols={60} name="text"></textarea>
    <br/>
    <br/>

    <button onClick={()=> submit()} style={{padding:5, borderRadius:5}}> Envoyez</button>
    <br/>
    <br/>
    {error && <span style={{color:'red'}}>Merci de remplir tous les champs</span>}

</div>}



{done && <div className='containerAbout' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
  Votre message a été envoyé
<span  style={{fontSize:80}} className="material-symbols-outlined">
check_circle
</span>
</div>}






    </div>
   
  )
}

export default Contact


