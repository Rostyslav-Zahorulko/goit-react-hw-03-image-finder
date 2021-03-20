import { Component } from 'react';

import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';

import imageFinderApi from './services/image-finder-api';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    imageFinderApi.fetchImages(options).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        currentPage: prevState.currentPage + 1,
      }));
    });
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} />

        {images.length > 0 && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
