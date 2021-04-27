import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Reponse(props) {
  const {id} = useParams()
  const [message,setMessage] = useState('')
  const handleClick =async (e)=>{
    e.preventDefault();
    try {
        const res = await axios.post(`http://localhost:3000/contact/email/${id}`,{message});
        if(res) props.history.push('/contact')
      } catch (error) {
        if(error) console.log(error.response);
      }
  }
  const handleChange = (e)=>{
    // console.log(e.target.value);
    setMessage(e.target.value)
  }
   const [contact,setContact]= useState([])

  const getContact =async ()=>{
   try {
      const {data} = await axios.post(`http://localhost:3000/contact/searsh/${id}`);
    if(data) setContact(data)
   } catch (error) {
     if(error) console.log(error.response);
   }
  }
  useEffect(()=>{
    getContact()
  },[])
  return(
     <div className="container">
     {
       contact && (
         <>
              
          <p>
            <span>A : {contact.prenom} {contact.nom}</span> 
          </p>
          <p>
            <span>Email :  {contact.email}</span> 
          </p>
          <p>
            <span>Message :{contact.message} </span> 
          </p>
         </>
       )
     }

      <form>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Entre Your Message</label>
          <textarea
            onChange={handleChange}
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
  

  
}

export default Reponse