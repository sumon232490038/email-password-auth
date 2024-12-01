import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessage("");
    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // console.log(result.user);

        if (!result.user.emailVerified) {
          setErrorMessage("Plase verify your email");
          return;
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        // console.log("ERROR", error);
        setErrorMessage(error.message);
      });
  };
  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("bangaldesh");
    }
    {
      sendPasswordResetEmail(auth, email).then(() => {
        alert("please give valid email");
      });
    }
  };
  // console.log(errorMessage);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgotPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <h1 className="text-center text-red-600 pb-5">{errorMessage}</h1>
          {success && (
            <h1 className="text-center pb-5 text-green-700">
              Login Successfull
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
