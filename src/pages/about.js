import React from "react";
import {Link} from "gatsby";
import Footer from "../components/footer";

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is a piece about mee</p>
            <p><Link to={'/'}>Back Home</Link></p>
            <p><Link to={'/contact'}>Contact</Link></p>
            <Footer/>
        </div>
    )
};

export default AboutPage