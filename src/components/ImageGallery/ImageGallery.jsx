import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <li key={image.id}>
          <ImageGalleryItem image={image} />
        </li>
      ))}
    </StyledImageGallery>
  );
};
