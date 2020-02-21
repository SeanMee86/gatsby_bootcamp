import React from "react";
import footerStyles from './footer.module.scss';

const Footer = (props) => {
    const date = new Date();
    return (
        <footer className={footerStyles.footer}>
           <p>Created by {props.siteAuthor}, &copy; {date.getFullYear()}</p>
        </footer>
    )
};

export default Footer