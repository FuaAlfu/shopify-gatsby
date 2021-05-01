import React from 'react'
import  {graphql}  from 'gatsby';
// we used absolut path here :: look into onCreateWebpackConfig in gatsby-node.js
import {Layout, ImageGallery} from 'components';
import {Grid} from './styles'

/*
to write a fragment:
...queryName
*/
export const query = graphql`
query ProductQuery($shopifyid: String){
        shopifyProduct(shopifyId: {eq: $shopifyid}) {
        title
        description
        images {
          id
      localFile {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
     }
   }
`;

export default function ProductTemplate(props) {
   // console.log(props);
        return (
                <Layout>
                <Grid>
                   <div>
                        <h1>{props.data.shopifyProduct.title}</h1>
                        <p>
                            {props.data.shopifyProduct.description}
                        </p>
                   </div>
                   <div>
                           <ImageGallery image={props.data.shopifyProduct.images} />
                   </div>
                </Grid>
                </Layout>
        )
}