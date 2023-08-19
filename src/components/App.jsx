import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ButtonLoadMore } from './Button/Button';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleChangeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevPrpos, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const images = await fetchImages(
        this.state.query.slice(this.state.query.indexOf('/') + 1),
        this.state.page
      );

      this.setState({
        images,
      });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleChangeQuery} />
        <ImageGallery images={this.state.images} />
        <ButtonLoadMore onClick={this.handleLoadMore} />
      </div>
    );
  }
}
