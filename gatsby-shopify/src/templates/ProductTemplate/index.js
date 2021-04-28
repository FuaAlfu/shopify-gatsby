import React from 'react'
import  {graphql}  from 'gatsby';


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
                <h1>{props.data.shopifyProduct.title}</h1>
        )
}