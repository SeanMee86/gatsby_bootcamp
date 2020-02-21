import React from "react";
import Header from "./header";
import Footer from "./footer";
import {graphql, useStaticQuery} from "gatsby";
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = (props) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);

    const metaData = data.site.siteMetadata;

    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header siteTitle={metaData.title}/>
                {props.children}
            </div>
            <Footer siteAuthor={metaData.author}/>
        </div>
    )
};

export default Layout