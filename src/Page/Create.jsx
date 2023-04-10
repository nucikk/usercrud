import axios from 'axios'
import React, { useState } from 'react'
import "../Style/create.css" 
import { useNavigate } from 'react-router-dom'

const Create = () => {
 
  const [inputDate, setInputDate] = useState({
    name: "",
    email: "",
  }) 

const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3030/users', inputDate)
    .then(res => {
      alert("Sent successfully")
      navigate('/')
    })
  } 

  return (
    <div className="form_container">
      
     <div className="form_field">
      <form onSubmit={handleSubmit}>
      <label htmlFor="Full Name">Name</label>
      <input type="text" name="Full Name" className="form_input" placeholder="Enter Your Name..."
      onChange={e => setInputDate({...inputDate, name: e.target.value})}/>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" className="form_input"  placeholder="Enter Your Email..."
       onChange={e => setInputDate({...inputDate, email: e.target.value})}/>
      <button className="submit_btn">Submit</button>
      </form>
     </div>
    </div>
  )
}

export default Create
