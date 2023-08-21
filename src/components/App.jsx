import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ButtonLoadMore } from './Button/Button';
import { fetchImages } from './api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  handleChangeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevPrpos, prevState) {
      try {
      if (
        prevState.query !== this.state.query ||
        prevState.page !== this.state.page 
      ) {
        this.setState({ loading: true });
        const images = await fetchImages(
          this.state.query.slice(this.state.query.indexOf('/') + 1),
          this.state.page
        );

        this.setState({
          images,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>  
      <GlobalStyle />
        <Searchbar onSubmit={this.handleChangeQuery} />
        {this.state.loading ? (
          <Loader/>
        ) : (
          <ImageGallery images={this.state.images} />
        )}

        <ButtonLoadMore onClick={this.handleLoadMore} />
      </>
    );
  }
}
