import { useState } from "react";

export default function Login ()
{
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
  


    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) 
    {
      onSignup(data.user); // App.jsx me user set hoga
    } 

    else 
    {
      alert("User already exists");
    }
  } catch (err) {
    console.log(err);
    alert("Something went wrong");
  }
};


       

   return(
        <form  className="form">
      <h2>Login</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
      <button onClick={handle} type="submit">Sign Up</button>
    </form>

   ) 
}