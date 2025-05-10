import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerlottiedata from "../../assets/lottie/lottieLogin.json"
import AuthContext from '../../context/authcontext/AuthContext';
const Register = () => {
const {createUser}=useContext(AuthContext);
    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        //password validation
        //show passord validation error
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message)
        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-x-20 flex-col lg:flex-row-reverse">
          <div className="text-center max-w-1/3 lg:text-left">
           
            <Lottie animationData={registerlottiedata}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Register now!</h1>

           <form onSubmit={handleRegister} className="card-body">
          
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label" >Password</label>
                <input type="password"name="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
          
           </form>
          </div>
        </div>
      </div>
    );
};

export default Register;