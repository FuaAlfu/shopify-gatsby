import React from 'react';
import Image from 'gatsby-image';
import {ImageGalleryWrapper} from './style';


export const ImageGallery = ({images}) => {
        return (
            <ImageGalleryWrapper>
            <div>
                <Image fluid={images[0].localFile.childImageSharp.fluid} />
            </div>
            </ImageGalleryWrapper>
        )
}
