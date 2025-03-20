import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <button className={css.load_more} onClick={loadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
