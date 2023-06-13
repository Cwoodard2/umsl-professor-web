import React, {useState} from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/firebaseConfiguration";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const verifyLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
        navigate("/ResearchEditor");
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl text-webGreen rockwell">Login</h1>
      <div className="flex flex-col gap-2">
        <input
          placeholder="Username"
          className="border border-webGreen rounded p-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          className="border border-webGreen rounded p-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
      </div>
      <br></br>
        <button className="bg-webGreen text-white p-2 rounded-md hover:bg-white hover:text-webGreen hover:border hover:border-webGreen transition-all" onClick={() => verifyLogin()}>
          Login
        </button>
    </div>
  );
};

export default LoginPage;
