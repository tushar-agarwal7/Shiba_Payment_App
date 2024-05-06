"use client"
// pages/signup.js
import { useState } from 'react';
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone,setPhone]=useState('')
  const [name,setName]=useState('')
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    setSubmitted(true); // Set submitted state to true for animation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-500 to-indigo-600">
      <h1 className="text-4xl font-bold  mb-8">Get Started</h1>
      <form
        className="bg-black text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80"
        onSubmit={handleSubmit}
      >
         <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button onClick={async () => {
    const response = await axios.post("http://localhost:3001/api/user", {
        phone,
        email,
        name,
        password
    });
    
    console.log(response)
}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Get Started</button>

    
      </form>
    </div>
  );
};

export default Signup;
 