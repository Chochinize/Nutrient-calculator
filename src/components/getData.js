import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetData = () => {
  const [users, setUsers] = useState([]);

  console.log(users);
 
  return (
    <div className="w-58  m-2">
      <table className=" w-full  ">
        <thead >
          <tr>
            <th>N#</th>
            <th >ID's</th>
            <th>Username</th>
            <th>Role</th>
            <th>email</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody >
          {/* {users.map((user, index) => (
            <tr key={user._id} className='border-2    border-black'> 
              <th className="border-r-2 border-black p-4 ">{index + 1}</th>
              
              <th className="border-r-2  border-black p-4">
              
              </th>

              <th className="border-r-2 border-black p-2">{user.name}</th>
              <th className="border-r-2 border-black ">{user.role}</th>
              <th className="border-r-2 border-black ">{user.email}</th>

                  
              <th className="">Update</th>
              <th className="cursor-pointer" >Delete</th>
              
            </tr>
          ))} */}
        </tbody>
      </table>
      ))
    </div>
  );
};

export default GetData;
