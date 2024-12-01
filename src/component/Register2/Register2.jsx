import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register2 = () => {
  const [errorMasssage, setErrorMasssage] = useState("");
  const [successFull, setSuccessFull] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSingUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.Name.value;
    const photoUrl = e.target.photoURL.value;
    console.log(name, photoUrl);
    setErrorMasssage("");
    setSuccessFull("");

    if (!terms) {
      setErrorMasssage("please accecpt our terms");
      return;
    }

    // const regex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    // if (!regex.test(password)) {
    //   setErrorMasssage(
    //     "at least one upcase, one lowercase,one spaicel charectar"
    //   );
    //   return;
    // }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        sendEmailVerification(auth.currentUser).then(() => {
          alert("validetion is send");
        });
        setSuccessFull("Sign in Successfull");
      })
      .catch((error) => {
        // console.log(error);
        setErrorMasssage(error.code);
      });
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    updateProfile(auth.currentUser, profile)
      .then(() => {
        console.log("profile uptodate");
      })
      .catch(() => {
        console.log("error");
      });
  };
  // console.log(errorMasssage);
  return (
    <div className="hero-content ">
      <div className="text-center lg:text-left"></div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSingUp} className="card-body">
          <div className="form-control">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="Name"
              required
            />
            <label className="label">
              <span className="label-text">photoURL</span>
            </label>
            <input
              type="text"
              placeholder="photoURL"
              className="input input-bordered"
              name="photoURL"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 bottom-4"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Accept this form terams</span>
              <input
                name="terms"
                type="checkbox"
                defaultChecked
                className="checkbox"
              />
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-2xl text-green-600 mb text-center ">{successFull}</p>
        <p className="text-center text-2xl text-red-700 mb-5">
          {errorMasssage}
        </p>
      </div>
    </div>
  );
};

export default Register2;
