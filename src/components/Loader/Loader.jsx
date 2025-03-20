import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <ClipLoader
        color="#0000CD"
        loading={true}
        size={90}
        aria-label="clip-loader"
      />
    </div>
  );
};

export default Loader;
