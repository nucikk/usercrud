import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    <ul>
      {data.map((user) => (
        <li key={user.id} className="user_box">
          {user.name} {user.surname}
          {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Home;
