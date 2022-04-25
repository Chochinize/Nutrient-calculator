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
        const res = await axios.get(`/u/db/${id}`);
        setUsers(res.data.msg);
      };
      fetchData();
    } catch (error) {
      return error;
    }
  }, []);

  return (
    <div>
      <ul ><img className="rounded-full w-32 h-32" src={users.avatar}/></ul>
      <ul>{users._id}</ul>
      <ul>{users.name}</ul>
 

    </div>
  );
};

export default Users;
