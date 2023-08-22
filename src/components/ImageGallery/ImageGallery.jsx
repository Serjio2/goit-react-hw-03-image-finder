import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = (props) => {
// const {id} = props.images.hits;

  console.log(props.images.hits)
  // props.images.hits.map(item => console.log(item.id))
  return (
    <>
    
    </>
    // <StyledImageGallery>
    //   {images.map(image => (
    //     <ImageGalleryItem image={image} key={image.id} />
    //   ))}
    // </StyledImageGallery>
  );
};
