import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import All_activites from './All_activites';
import Create_Trip from './Create_Trip';
import About_us from './About_us';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

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
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/all_activites' element={<All_activites />} />
        <Route path='/create_trip' element={<Create_Trip />} />
        <Route path='/about_us' element={<About_us />} />
      </Routes>
    </Router>
  );
}

export default App;
