import React from "react";

function BlogShowcase({ setCurrentPage }) {
    return (
        <div>
            <button onClick={() => setCurrentPage("landing")}>⬅ Back</button>
            <h1>Blog Showcase</h1>
            <p>List of blogs here...</p>
        </div>
    );
}

export default BlogShowcase;
