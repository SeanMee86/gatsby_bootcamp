import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>Contact Mee</h1>
            <p>Contact me here....</p>
            <p><a href="https://twitter.com/SeanMee1" target={'_blank'} rel='noopener noreferrer'>My Twitter</a></p>
            <Footer/>
        </div>
    )
};

export default ContactPage