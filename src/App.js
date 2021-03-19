import { Component } from 'react';
import axios from 'axios';

import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 19734316-10978fed4d6ca650a445cb4b9';

class App extends Component {
  state = {
    images: [],
  };

  onChangeQuery = query => {
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=1&key=19734316-10978fed4d6ca650a445cb4b9&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(({ data }) => {
        this.setState({ images: data.hits });
      });
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} />
      </div>
    );
  }
}

export default App;
