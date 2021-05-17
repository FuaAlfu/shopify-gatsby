import React from 'react';
import Image from 'gatsby-image';
import {ImageGalleryWrapper} from './style';
import ImageThumbnail from './ImageThumbnail'

export const ImageGallery = ({selectedVariantImageId, images}) => {
    const [activeImageThumbnail,setActiveImageThumbnail] = React.useState(
       // images[0].localFile.childImageSharp.fluid
       images.find(({id}) => id === selectedVariantImageId || images[0])
    );
    
    React.useEffect(() => {
        setActiveImageThumbnail(
            images.find(({id}) => id === selectedVariantImageId || images[0])
        )
    },[selectedVariantImageId, images, setActiveImageThumbnail])


    const handleClick = (image) =>{
        setActiveImageThumbnail(image);
    };
        return (
            <ImageGalleryWrapper>
            <div>
                <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
            </div>
            {/*end of div*/}
            <div>
                {images.map(image =>{
                    return(
                        <ImageThumbnail 
                        key={image.id} 
                        isActive={activeImageThumbnail.id === image.id}
                        onClick={handleClick}
                        image={image} />
                    )
                })}
            </div>
            </ImageGalleryWrapper>
        )
}
