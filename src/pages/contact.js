import React from "react";
import {Link} from "gatsby";

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Mee</h1>
            <p>Contact me here....</p>
            <p><Link to={'/'}>Back Home</Link></p>
            <p><a href="https://twitter.com/SeanMee1" target={'_blank'}>My Twitter</a></p>
        </div>
    )
};

export default ContactPage