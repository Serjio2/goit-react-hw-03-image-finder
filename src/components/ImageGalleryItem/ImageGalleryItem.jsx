import { ModalWin } from 'components/Modal/Modal';
import { StyledImageGalleryItem } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component({ image }) {
  state = {
    isModalOpen: false,
  }

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false })


  render() {
  return (
    <StyledImageGalleryItem onClick={this.openModal}>
      <a href={image.largeImageURL}>
        
      </a>
      <ModalWin largeImageURL={largeImageURL}
            alt={tags}
            onCloseModal={this.closeModal}/>
    </StyledImageGalleryItem>
  );
};
}