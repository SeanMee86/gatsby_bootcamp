import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import Layout from "../components/layout";

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
            <li key={i}>
                <h2>
                    <Link to={`/blog/${p.node.fields.slug}`}>
                        {p.node.frontmatter.title}
                    </Link>
                </h2>
                <p>{p.node.frontmatter.date}</p>
            </li>
        )
    });

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol>
                {posts}
            </ol>
        </Layout>
    )
};

export default Blog