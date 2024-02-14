import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import All_activites from './All_activites';

import Create_Trip from './Create_Trip';
import About_us from './About_us';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Bottom from './Bottom';


const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const createUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      const updatedUsers = await response.json();
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <>
<Router>
<Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
 </Routes>
      <Navbar />
      <Home />
      <Bottom/>
      <Routes>

        <Route path="/create_trip" element={<Create_Trip />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/all_activites" element={<All_activites />} />
        <Route path="/profile" element={<home/>} />
      
        
      </Routes>
    </Router>

</>

  );
}

export default App;
