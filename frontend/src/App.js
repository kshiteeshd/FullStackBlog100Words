import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import BlogShowcase from "./pages/BlogShowcase";
import CreateBlog from "./pages/CreateBlog";
import AuthPage from "./pages/AuthPage"; // Single component for Login/Signup

function App() {
    const [currentPage, setCurrentPage] = useState("landing"); // Track active page

    return (
        <div>
            {currentPage === "landing" && <LandingPage setCurrentPage={setCurrentPage} />}
            {currentPage === "auth" && <AuthPage setCurrentPage={setCurrentPage} />}
            {currentPage === "blogs" && <BlogShowcase setCurrentPage={setCurrentPage} />}
            {currentPage === "create" && <CreateBlog setCurrentPage={setCurrentPage} />}
        </div>
    );
}

export default App;
