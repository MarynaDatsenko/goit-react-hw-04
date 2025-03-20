import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, modalData, onClose }) => {
  if (!isOpen || !modalData) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={modalData.fullPhotoUrl}
        alt={modalData.altText}
        className={css.full_img}
      />
    </ReactModal>
  );
};

export default ImageModal;
