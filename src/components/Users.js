import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Users = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  console.log(users);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(`/`);
        setUsers(res.data.msg);
      };
      fetchData();
    } catch (error) {
      return error;
    }
  }, []);

  return (
    <div>
     
 

    </div>
  );
};

export default Users;
