import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";

function Navigator() {
  const user = useSelector((state) => state.user.user);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        <Route path="/details/:id" element={user ? <Details /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Navigator;
