import React, {useState} from 'react'
import axios from 'axios'



function Contact(props) {

    const[user, setUser] = useState({
        prenom:'',
        nom:'',
        email:'',
        telephone:'',
        message:''
    })
   const handleChange = e =>{
        setUser({...user,[e.target.id]: e.target.value})
    }
    
    
    const submit = async(e) => {
          e.preventDefault();
     const res= await  axios.post("http://localhost:3000/contact/user" , user)
     if(res)props.history.push ('/contact')
        // .then(res => console.log(res.user));

        
    }
    

   const form = () =>(
        <form onSubmit={submit}>
            <div className="from-group">
                <label htmlFor="first_name" className="text-muted">Prenom</label>
                <input onChange={handleChange}  type="text" className="form-control" id="prenom" />
               
            </div>
            <div className="from-group">
                <label htmlFor="last_name" className="text-muted">Nom</label>
                <input onChange={handleChange} type="text" className="form-control" id="nom" />
               
            </div>
            <div className="from-group">
                <label htmlFor="email" className="text-muted">Email</label>
                <input onChange={handleChange} type="email" className="form-control" id="email" />
               
            </div>
            <div className="from-group">
                <label htmlFor="phone" className="text-muted">Telephone</label>
                <input onChange={handleChange} type="text" className="form-control" id="telephone" />
               
            </div>
            <div className="from-group">
                <label htmlFor="message" className="text-muted w-100 p-3">Message</label>
                <input onChange={handleChange}  type="text" className="form-control" id="message" />
               
            </div>
            
            <button className="btn btn-lg btn-block btn-outline-success">Send</button>
            {/* { JSON.stringify(user)} */}
        </form>
   )
   return (
    
    <div>
       <div title="Contact Us">
           <div className="row">
               <div className="col-md-6 mx-auto">

                 { form() }
               </div>
            </div>
           

       </div>
    </div>
)
 }


export default Contact