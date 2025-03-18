import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // State for success/error messages
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage(""); // Clear previous messages

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            setMessage({ text: "Login successful! Redirecting...", type: "success" });
            setTimeout(() => navigate("/profile"), 1500); // Redirect after showing message
        } catch (error) {
            setMessage({ text: "Invalid email or password.", type: "error" });
        }
    };

    return (
        <div>
            <h2>User Login</h2>
            {message && <p className={message.type}>{message.text}</p>} {/* Display message */}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
        </div>
    );
};

export default Login;
