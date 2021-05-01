import React from 'react';
import Image from 'gatsby-image';
import {ImageGalleryWrapper} from './style';
import ImageThumbnail from './ImageThumbnail'

export const ImageGallery = ({images}) => {
        return (
            <ImageGalleryWrapper>
            <div>
                <Image fluid={images[0].localFile.childImageSharp.fluid} />
            </div>
            {/*end of div*/}
            <div>
                {images.map(image =>{
                    return(
                        <ImageThumbnail key={image.id} 
                        image={image.localFile.childImageSharp.fluid} />
                    )
                })}
            </div>
            </ImageGalleryWrapper>
        )
}
