import React from 'react';
function Login() {
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let formData = new FormData(e.target)
        let dataFromForm = Object.fromEntries(formData.entries());
        console.log(dataFromForm)
        await fetch("http://localhost:6600/app/v1/login", {
            method: "post",
            body: formData,
            redirect: "follow"
        })
            .then(res => {
                return res.json();
            })
            .then(text => {
                console.log(text.message)
                const token =text.message
                localStorage.setItem("SavedToken", 'Bearer ' + token);
            })
            .catch(err => {
                console.log(err);
            })
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="@gmail.com" />
            <input type="password" name="password" placeholder="password" />
            <button>ok</button>
        </form>
    );
}

export default Login;