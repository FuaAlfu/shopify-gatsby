const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({graphql, actions}) =>{
  const {createPage} = actions;
  //promise, we used await to fitch up our data
  const {data} = await graphql(`
  {
    allShopifyProduct {
      edges {
        node {
          shopifyId
          handle
        }
      }
    }
  }  
  `);
  data.allShopifyProduct.edges.forEach(({node}) => {
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve('./src/templates/ProductTemplate/index.js')
    });
  });
};