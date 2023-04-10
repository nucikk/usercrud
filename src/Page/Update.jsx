import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3030/users/${id}`, inputData)
      .then((res) => {
        alert("Update successfully");
        navigate("/");
      });
  };

  return (
    <div>
      <div className="form_container">
        <div className="form_field">
          <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID</label>
            <input
              type="number"      
              disabled
              name="id"
              className="form_input"
              placeholder="Enter Your Name..."
              value={inputData.id}
            />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form_input"
              placeholder="Enter Your Name..."
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form_input"
              placeholder="Enter Your Email..."
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
            <button className="submit_btn">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
