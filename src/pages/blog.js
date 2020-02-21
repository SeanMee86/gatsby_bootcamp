import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";

const Blog = () => {

    const data = useStaticQuery(graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  date
                }
                fields {
                  slug
                }
              }
            }
          }
        }
    `);

    const posts = data.allMarkdownRemark.edges.map((p, i) => {
        return (
            <li className={blogStyles.post} key={i}>
                <Link to={`/blog/${p.node.fields.slug}`}>
                    <h2>{p.node.frontmatter.title}</h2>
                    <p>{p.node.frontmatter.date}</p>
                </Link>
            </li>
        )
    });

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol className={blogStyles.posts}>
                {posts}
            </ol>
        </Layout>
    )
};

export default Blog