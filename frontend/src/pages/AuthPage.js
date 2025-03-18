import React, { useState } from "react";

function AuthPage({ setCurrentPage }) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            <button onClick={() => setCurrentPage("landing")}>⬅ Back</button>
            <h2>{isLogin ? "Login" : "Signup"}</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                {!isLogin && <input type="text" placeholder="Username" required />}
                <button type="submit">{isLogin ? "Login" : "Signup"}</button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </p>
        </div>
    );
}

export default AuthPage;
