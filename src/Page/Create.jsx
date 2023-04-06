import React from 'react'
import "../Style/create.css"
const Create = () => {
  return (
    <div className="form_container">
     <div className="form_field">
      <form>
      <label htmlFor="Full Name">Name</label>
      <input type="text" name="Full Name" className="form_input" placeholder="Enter Your Name..."/>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" className="form_input"  placeholder="Enter Your Email..."/>
      <button className="submit_btn">Submit</button>
      </form>
     </div>
    </div>
  )
}

export default Create
