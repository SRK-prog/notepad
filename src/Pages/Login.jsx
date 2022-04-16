import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/", {
        name,
        password,
      });
     data && navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-screen pt-40 px-5">
      <form
        className="mx-auto p-5 max-w-sm bg-white rounded"
        onSubmit={loginHandler}
      >
        <input
          className="w-full bg-slate-100 focus:outline-none p-2 rounded mb-5"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full bg-slate-100 focus:outline-none p-2 rounded mb-5"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="text-white bg-green-500 w-full p-2 rounded">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Login;
