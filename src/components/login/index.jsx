import { useState } from "react";
import "./login.css"
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

const Login = () => {

  const [avatar, setAvatar] = useState({
    file:null,
    url:""
  })

  const handleAvatar = e => {
    if(e.target.files[0]){
        setAvatar({
            file:e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }
    
  }

  const handleLogin = e => {
    e.preventDefault();
    toast.warn("Enter details")
  }

  const handleRegister = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try{

      const res = await createUserWithEmailAndPassword(auth, email, password)

    }catch(err){
      console.log(err);
      toast.error(err.message);
    }

    
  }

  

  return (
    <div className="login">
        <div className="item">
            <h2>Welcome! back</h2>
            <form onSubmit={handleLogin}>
                <input type="text" 
                name="email" 
                placeholder="Enter your Email"/>
                <input type="password" name="password"
                placeholder="Enter your Passowrd" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <form onSubmit={handleRegister}>
            <h2>Create A New Account</h2>
            <label htmlFor="file">
                <img src={avatar.url || "./avatar.png"} alt="" />
                Upload a Profile Image</label>
            <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text" name="username" 
            placeholder="Enter your username"/>
            <input type="text" name="email" 
            placeholder="Enter your Email"/>
            <input type="password" name="password"
            placeholder="Enter your Passowrd" />
            <button>Sign Up</button>
            </form>
        </div>
    </div>
  );
};


export default Login;