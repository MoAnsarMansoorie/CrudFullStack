import axios from "axios";
import React, { useState, useEffect } from "react";

const UserList = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const resp = await axios.get("/getUser");
    console.log(resp);

    // if no user is ther please dont set the value
    if (resp.data.users.length > 0) {
      setUserData(resp.data.users);
    }
  };

  useEffect(() => {
    fetchUserData()
  },[userData])

  // EDIT
  const handleEdit = async (user) => {
    const userName = prompt("Enter your name!")
    const userEmail = prompt("Enter your email!")

    if(!userName || !userEmail){
      alert("Please provide name and email!")
    } else {
      const resp = await axios.put(`/editUser/${user._id}`, {
        name : userName,
        email: userEmail
      });
      console.log(resp);
    }
  }

  // DELETE
  const handleDelete = async (userId) => {
    const resp = await axios.delete(`/deleteUser/${userId}`)
    console.log(resp);
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              All Users
            </h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Edit
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData && userData.map((user) => (
                  <tr>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    <button className="hover:text-green-500" 
                    onClick={() => handleEdit(user)}
                    >Edit</button>
                  </td>
                  <td className="px-4 py-3 text-lg text-gray-900">
                    <button className="hover:text-red-500"
                    onClick={() => handleDelete(user._id)}
                    >Delete</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserList;
