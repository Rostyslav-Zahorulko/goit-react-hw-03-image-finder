import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ url }) => (
  <li className="ImageGalleryItem">
    <img src={url} alt="" className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
