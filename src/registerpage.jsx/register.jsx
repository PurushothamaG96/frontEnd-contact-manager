import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register(props) {
    const [form, setForm] = useState({name:"", email:"", password:"", confirmPassword:""})
    const navigate = useNavigate()
    const handleRegister=(e)=>{
        e.preventDefault()
        const jwt  = localStorage.getItem("SavedToken").split(" ")[1]
        
        fetch("http://localhost:6600/app/v1/registration", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form)
        }).then((res)=>{return res.json()})
        .then((mess)=>{
            console.log(mess)
        }).catch((e)=>{
            console.log(e)
        })
        navigate("/login")
    }
    return (
        <form onSubmit={handleRegister}>
            <input type="text" name="name" palceholder="Enter you name" required  onChange={(e)=>setForm({...form, name:e.target.value})}/>
            <input type="email" name="email" placeholder='@gmail.com' required onChange={(e)=>setForm({...form, email:e.target.value})}/>
            <input type="password" name="password" placeholder='min 6 charecter' required onChange={(e)=>setForm({...form, password:e.target.value})}/>
            <input type="password" name="confirmPassword" placeholder='min 6 charecter' required onChange={(e)=>setForm({...form, confirmPassword:e.target.value})}/>
            <button>click</button>
        </form>
    );
}

export default Register;