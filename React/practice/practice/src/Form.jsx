// AuthForm.jsx

import "./Form.css";
import React ,{useState} from 'react'

const Form = () => {
    const[name,setName]=useState('')
    const[Email,setEmail]=useState('')
    const[password,setPassword]=useState('')


    const handleSubmit =(e)=>{
        e.preventDefault()
        const data ={name,Email,password}
        console.log(data)
        setName('')
        setEmail('')
        setPassword('')
    }
   
  return (
    <div className="container">
      <div className="form-box">
        <h2 className="title">Sign Up</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input type="text"onChange={(e)=>setName(e.target.value)} value={name}  name="name" placeholder="Full Name" className="input" required />
          <input type="email"onChange={(e)=>setEmail(e.target.value)} value={Email} name="email" placeholder="Email" className="input" required />
          <input type="password"onChange={(e)=>setPassword(e.target.value)}  value={password} name="password" placeholder="Password" className="input" required />
          <button type="submit" className="btn signup">Sign Up</button>
        </form>

        {/* <h2 className="title">Login</h2>

        <form className="form">
          <input type="email" name="email" placeholder="Email" className="input" required />
          <input type="password" name="password" placeholder="Password" className="input" required />
          <button type="submit" className="btn login">Login</button>
        </form> */}
      </div>
    </div>
  );
};

export default Form;
