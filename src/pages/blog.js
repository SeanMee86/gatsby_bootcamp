import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";

const Blog = () => {

    const data = useStaticQuery(graphql`
        query {
          allContentfulBlogPost(
            sort: {
              fields: publishedDate,
              order: DESC
            }
          ) {
            edges {
              node {
                title
                slug
                publishedDate(
                  formatString: "MMMM Do, YYYY"
                )
              }
            }
          }
        }
    `);

    const posts = data.allContentfulBlogPost.edges.map((p, i) => {
        return (
            <li className={blogStyles.post} key={i}>
                <Link to={`/blog/${p.node.slug}`}>
                    <h2>{p.node.title}</h2>
                    <p>{p.node.publishedDate}</p>
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