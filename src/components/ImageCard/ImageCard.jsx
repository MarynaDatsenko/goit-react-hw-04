import css from "./ImageCard.module.css";

const ImageCard = ({ url, altText, onClick }) => {
  return (
    <>
      <img className={css.img} onClick={onClick} src={url} alt={altText} />
    </>
  );
};

export default ImageCard;
