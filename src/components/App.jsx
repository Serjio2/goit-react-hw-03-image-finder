import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
