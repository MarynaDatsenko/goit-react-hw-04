import toast from "react-hot-toast";
import { useState } from "react";
import css from "./SearchBar.module.css";

function SearchBar({ onSearchChanged, onSearchClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value.trim();
    setInputValue(value);
    onSearchChanged(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onSearchClick(inputValue);
    } else {
      toast.error("Please enter a search query");
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
