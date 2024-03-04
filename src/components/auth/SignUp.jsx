import axios from 'axios';
import  { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   try{
    const response=await axios.post("http://localhost:3001/users",formData)
    console.log("User added successfully",response.data)
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      })
     toast.success("Sucessfully Logged In")
   }
   catch(error)
   {
    console.error('Error adding user:', error);
    toast.error("Invalid credentials")

   }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange} required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange} required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange} required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange} required
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
    <ToastContainer />
    </>
  );
}

export default SignUpForm;
