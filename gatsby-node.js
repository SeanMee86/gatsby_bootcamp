const path = require('path');

module.exports.onCreateNode = ({node, actions}) => {
    // Destructuring 101, could pass obj as the parameter and pull variables as below instead.
    // const node = obj.node;
    // const actions = obj.actions;
    // const { createNodeField } = actions;

    // if(node.internal.type === 'MarkdownRemark'){
    //     const slug = path.basename(node.fileAbsolutePath, '.md');
    //     createNodeField({
    //         node,
    //         name: 'slug',
    //         value: slug
    //     })
    // }
};

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');

    res = await graphql(`
        query {
          allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
        }
    `);

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
};