import ImageGalleryItem from '../ImageGalleryItem';

import './ImageGallery.scss';

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} url={webformatURL} />
    ))}
  </ul>
);

export default ImageGallery;
