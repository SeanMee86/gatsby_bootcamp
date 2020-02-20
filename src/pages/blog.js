import React from "react";
import {Link} from "gatsby";
import Footer from "../components/footer";

const Blog = () => {

    return (
        <div>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <Link to={'/'}>Back Home</Link>
            <Footer/>
        </div>
    )
};

export default Blog