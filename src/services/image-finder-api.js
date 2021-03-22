// import axios from 'axios';

// const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=19734316-10978fed4d6ca650a445cb4b9&image_type=photo&orientation=horizontal&per_page=${perPage}`,
//     )
//     .then(({ data }) => data.hits);
// };

// const imageFinderApi = { fetchImages };

// export default imageFinderApi;

// ________________________________________________________________________________________________________________________________________

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19734316-10978fed4d6ca650a445cb4b9';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
};

const fetchImages = async ({
  searchQuery = '',
  currentPage = 1,
  perPage = 12,
}) => {
  const response = await axios.get('', {
    params: { q: searchQuery, page: currentPage, per_page: perPage },
  });

  return response.data.hits;
};

const imageFinderApi = { fetchImages };

export default imageFinderApi;

// export default { fetchImages };
