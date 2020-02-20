import React from "react";

const Footer = (props) => {
    const date = new Date();
    return (
        <footer>
           <p>Created by {props.siteAuthor}, &copy; {date.getFullYear()}</p>
        </footer>
    )
};

export default Footer