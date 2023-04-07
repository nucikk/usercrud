import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Style/Home.css"

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/users")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="user_box">

          <h2 className='crud_title'>Crud App with JSON Server</h2>
          <Link to="/create">
            <button className="btn_create">Create +</button>
          </Link>

          <ul>
            {data.map((user) => (
              <li key={user.id} className="user_item">
                <p className='fullname'>{user.name} </p>
                <p className='fullname'>{user.surname} - </p>
                <p>{user.email}</p>
                <div className="user_actions">
                  <Link to={`/update/${user.id}`}> <button className="action_btn_update" >Update</button></Link>
                  <button className="action_btn_delete">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
