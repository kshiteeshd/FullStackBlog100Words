import React from "react";

function CreateBlog({ setCurrentPage }) {
    return (
        <div>
            <button onClick={() => setCurrentPage("landing")}>⬅ Back</button>
            <h1>Create Blog</h1>
            <textarea placeholder="Write your 100-word blog..." rows="5"></textarea>
            <br />
            <button>Publish</button>
        </div>
    );
}

export default CreateBlog;
