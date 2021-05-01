import React from 'react';
import Image from 'gatsby-image';
import {ImageThumbnailWrapper} from './style';

export default function ImageThumbnail({isActive, onClick, image}) {
    return (
      <ImageThumbnailWrapper onClick={() =>{
          console.log('click');
      }}>
         <Image fluid={image} />
      </ImageThumbnailWrapper>
    );
}
