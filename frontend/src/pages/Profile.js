import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isAuthenticated } from "../utils/auth";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
      return;
    }
    axios
      .get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user ? <p>Welcome, {user.username}</p> : <p>Loading...</p>}
      <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>Logout</button>
    </div>
  );
};

export default Profile;
