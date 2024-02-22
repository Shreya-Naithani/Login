import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
        navigate('/login');
    }
  }, []);
  useEffect(() => {
    // Fetch user data from an API (replace 'API_URL' with your actual API endpoint)
    fetch('http://localhost:8000/user')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  return (
    <div>
      <nav className="bg-gray-700 p-4">
        <div className="container mx-auto flex  items-center">
          <Link className="text-white mr-6" to={"/home"}>
            Home
          </Link>
          <Link className="text-white" to={"/login"}>
            Logout
          </Link>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              {/* Add more cells for additional data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default User;
