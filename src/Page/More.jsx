import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Style/more.css";
const More = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="more_container">
      <div className="more_details">
        <p className="more_details_item">{userData.id}</p>
        <p className="more_details_item">{userData.name}</p>
        <p className="more_details_item">{userData.surname}</p>
        <p className="more_details_item">{userData.email}</p>

        <Link to="/">
          <div className="back_btn">BACK</div>
        </Link>
      </div>
    </div>
  );
};

export default More;
