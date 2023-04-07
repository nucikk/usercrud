import React, { useState } from 'react'
import axios from 'axios';
import {navigate} from "react-router-dom"
const Update = () => {  const [inputDate, setInputDate] = useState({
 name: "",
 email: "",
}) 

const handleSubmit = (e) => {
 e.preventDefault()
 axios.post('http://localhost:3030/users', inputDate)
 .then(res => {
   alert("ss")
   navigate('/')
 })
} 
  return (
    <div>
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
    </div>
  )
}

export default Update
