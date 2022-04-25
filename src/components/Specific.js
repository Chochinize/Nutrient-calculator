import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/ContextApi";
import axios from "axios";
const Specific = () => {
  const {user, setUser, authIsDone, setAuthIsDone, state, dispatch} = useContext(GlobalContext)

  const { id } = useParams();
  const [users, setUsers] = useState([]);

 

  return <div>
      <div>
        <ul>
      
        </ul>
      </div>
  </div>;
};

export default Specific;
