import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={css.error}>
        Sorry, we don&#x27;t have image for you:( Please change your request
      </p>
    </div>
  );
};

export default ErrorMessage;
