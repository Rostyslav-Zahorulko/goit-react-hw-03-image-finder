import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=19734316-10978fed4d6ca650a445cb4b9&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(({ data }) => data.hits);
};

const imageFinderApi = { fetchImages };

export default imageFinderApi;
