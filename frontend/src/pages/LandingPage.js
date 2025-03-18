import React from "react";

function LandingPage({ setCurrentPage }) {
    return (
        <div>
            <h1>Welcome to 100 Word Thoughts</h1>
            <button onClick={() => setCurrentPage("auth")}>Login / Signup</button>
            <br />
            <button onClick={() => setCurrentPage("blogs")}>View Blogs</button>
            <br />
            <button onClick={() => setCurrentPage("create")}>Create Blog</button>
        </div>
    );
}

export default LandingPage;
