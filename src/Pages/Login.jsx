import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.REACT_APP_NODE_URL, {
        name,
        password,
      });
      if (response.status === 200) {
        dispatch({ type: "LOG_IN", payload: { user: true } });
        const data = JSON.stringify({ user: true });
        localStorage.setItem("user", data);
        navigate("/");
      }
    } catch (err) {
      setError(true);
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
        {error && (
          <p className="text-red-500 text-center mb-1 text-sm">
            Something went wrong!
          </p>
        )}
        <button className="text-white bg-green-500 w-full p-2 rounded">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Login;
