import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom"
const Update = () => { 
  const {id} = useParams()
  const [inputDate, setInputDate] = useState({
 name: "",
 email: "",
}) 
const navigate = useNavigate()
useEffect(() => {
  axios.get('http://localhost:3030/users' + id)
  .then(res => setInputDate(res.deta))
  .catch(err => console.log(err))
})

const handleSubmit = (e) => {
 e.preventDefault()
 axios.post('http://localhost:3030/users'+id, inputDate)
 .then(res => {
   alert("successfully Update")
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
      value={inputDate.name}
      onChange={e => setInputDate({...inputDate, name: e.target.value})}/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" className="form_input"  placeholder="Enter Your Email..."
      value={inputDate.email}
       onChange={e => setInputDate({...inputDate, email: e.target.value})}/>
      <button className="submit_btn">Update</button>
      </form>
     </div>
    </div>
    </div>
  )
}

export default Update
