import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imagesList, onImageClick }) => {
  return (
    <>
      <ul className={css.img_list}>
        {imagesList.map((image) => (
          <li key={image.id}>
            <ImageCard
              url={image.urls.small}
              altText={image.alt_description}
              fullPhotoUrl={image.urls.full}
              onClick={() =>
                onImageClick({
                  fullPhotoUrl: image.urls.full,
                  altText: image.alt_description,
                })
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
