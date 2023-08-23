import Modal from 'react-modal';
import { StyledImageGalleryItem } from './ImageGalleryItem.styled';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <>
        <StyledImageGalleryItem>
          <img src={webformatURL} alt={tags} onClick={this.openModal}/>
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <img src={largeImageURL} alt={tags}/>
          </Modal>
        </StyledImageGalleryItem>
      </>
    );
  }
}
