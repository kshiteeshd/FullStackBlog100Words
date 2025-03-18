import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // State for messages
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage(""); // Clear previous messages

        try {
            await axios.post("http://localhost:5000/api/auth/signup", { username, email, password });
            setMessage({ text: "Signup successful! Redirecting to login...", type: "success" });
            setTimeout(() => navigate("/login"), 1500); // Redirect after showing message
        } catch (error) {
            setMessage({ text: "Signup failed. Try again.", type: "error" });
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {message && <p className={message.type}>{message.text}</p>} {/* Display message */}
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
};

export default Signup;
