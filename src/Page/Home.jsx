import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../Style/Home.css"

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <ul className="user_list">
          {data.map((user) => (
            <li key={user.id} className="user_item">
             <p className='fullname'>{user.name} </p>  
             <p className='fullname'>{user.surname} - </p>
             <p>{user.email}</p>
             <div className="user_actions">
             <button className="action_btn_update">Update</button>
             <button className="action_btn_delete">Delete</button>
             </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
