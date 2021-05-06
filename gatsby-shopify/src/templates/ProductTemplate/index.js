import React from 'react'
import  {graphql}  from 'gatsby';
// we used absolut path here :: look into onCreateWebpackConfig in gatsby-node.js
import {Layout, ImageGallery} from 'components';
import {Grid, SelectWrapper, Price} from './styles';
import {CartContext} from 'context/CartContext';

/*
to write a fragment:
...queryName
*/
export const query = graphql`
query ProductQuery($shopifyid: String){
        shopifyProduct(shopifyId: {eq: $shopifyid}) {
          shopifyid
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
   const {getProductById} = React.useContext(CartContext);
   const [product, setProduct] = React.useState(null);
   const [selectedVariant, setSelectedVariant] = React.useState(null)
   React.useEffect(() =>{
     getProductById(props.data.shopifyProduct.shopifyId).then((result) =>{
       //console.log(result);
       setProduct(result);
       selectedVariant(result.variants[0]);
     })
   },[getProductById, setProduct]);

   const handleVariantChange = (e) =>{
     setSelectedVariant(product?.variant.find(v => v.id === e.target.value));
   }
        return (
                <Layout>
                <Grid>
                   <div>
                        <h1>{props.data.shopifyProduct.title}</h1>
                        <p>
                            {props.data.shopifyProduct.description}
                        </p>
                        {product?.availableForSale && (
                        <>
                        <SelectWrapper>
                        <strong>variant</strong>
                        <select onChange={handleVariantChange}>
                        {product?.variants.map(v => (
                          <option key={v.id} value={v.id}>
                              {v.title}
                          </option>
                          ))}
                        </select>
                        </SelectWrapper>
                           {!!selectedVariant && <Price>${selectedVariant.price}</Price>}
                        </>
                        )}
                   </div>
                   <div>
                           <ImageGallery image={props.data.shopifyProduct.images} />
                   </div>
                </Grid>
                </Layout>
        )
}