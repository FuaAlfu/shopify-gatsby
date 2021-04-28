import React from 'react'
import  {graphql}  from 'gatsby';
// we used absolut path here :: look into onCreateWebpackConfig in gatsby-node.js
import {Layout} from 'components';
import {Grid} from './styles'


export const query = graphql`
query ProductQuery($shopifyid: String){
        shopifyProduct(shopifyId: {eq: $shopifyid}) {
        title
     }
   }
`;

export default function ProductTemplate(props) {
    console.log(props);
        return (
                <Layout>
                <Grid>
                   <div>
                        <h1>{props.data.shopifyProduct.title}</h1>
                   </div>
                   <div>
                           Image
                   </div>
                </Grid>
                </Layout>
        )
}