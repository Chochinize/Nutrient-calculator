import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/ContextApi";
import axios from "axios";
const Specific = () => {
  const {user, setUser, authIsDone, setAuthIsDone, state, dispatch} = useContext(GlobalContext)

  const { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5050/u/${id}`);
      setAuthIsDone(!false);
      dispatch({type:'AUTH', payload:{successs:res.data }})
    };
    fetchData();
  }, []);

  return <div>
      <div>
        <ul>
          <li>{users.name}</li>
          <li>{users.email}</li>
          <li>{users._id}</li>
        </ul>
      </div>
  </div>;
};

export default Specific;
