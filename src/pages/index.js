import React from "react"
import {Link} from "gatsby"
import Footer from '../components/footer'

const IndexPage =  () => {
    const blogPage = '/blog';
    const aboutPage = '/about';
    const contactPage = '/contact';

    return (
        <div>
            <h1>Hello.</h1>
            <h2>I'm Sean, and I like code...derp</h2>
            <ul>
                <li><Link to={blogPage}>Blog</Link></li>
                <li><Link to={aboutPage}>About</Link></li>
                <li><Link to={contactPage}>Contact</Link></li>
            </ul>
            <Footer/>
        </div>
    )
};

export default IndexPage