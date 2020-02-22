import React from "react";
import Layout from "../components/layout";
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title={"Contact"}/>
            <h1>Contact Mee</h1>
            <p>Contact me here....</p>
            <p><a href="https://twitter.com/SeanMee1" target={'_blank'} rel='noopener noreferrer'>My Twitter</a></p>
        </Layout>
    )
};

export default ContactPage