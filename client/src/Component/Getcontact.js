import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


const Getcontact =() =>{
  
  const [contact,setContact]= useState([])
  const [formData,setData] = useState({email:'',
date:'',})
  const getContact =async ()=>{
    const {data} = await axios.get('http://localhost:3000/contact/info');
    if(data) setContact(data)
  }
  useEffect(()=>{
    getContact()
  },[])
 

  const handleClick =async (e)=>{
   e.preventDefault();
   try {
      const {data} = await axios.post('http://localhost:3000/contact/filtre',formData)
    if(data) setContact(data)
   } catch (error) {
     if(error) console.log(error.response);
   }
  }
  const handelChange = (e)=>{
    const {name,value} = e.target
    setData({...formData,[name]:value})
  }
  return(

    <div className="container">
    
       <form>
        <div className="form-group">
          <label for="validationCustom01"></label>
          <input
            onChange={handelChange}
            name="email"
            type="email"
            className="form-control"
            id="validationCustom01"
            placeholder="Email"
            required
          />
          <input
            onChange={handelChange}
            name="date"
            type="date"
            className="form-control"
            id="validationCustom01"
            placeholder="Date"
            required
          />
         <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Search
        </button>
        </div>
        </form>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Prenom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
         {contact &&
            contact.map((Data,index)=>(
              <tr>
                <th scope="row">{index+1}</th>
                <td>{Data.prenom}</td>
                <td>{Data.nom}</td>
                <td>{Data.email}</td>
                <td>{Data.telephone}</td>
                <td>{Data.message}</td>
                <td>{Data.date}</td>
                <td>
                  <Link to={`/Reponse/${Data._id}`}>
                    <button  className="btn btn-primary"> Repondre</button>
                  </Link>
                </td>
               
          </tr>
           ))
         }
        </tbody>
      </table>
    </div>
  )



           

     

}

export default Getcontact