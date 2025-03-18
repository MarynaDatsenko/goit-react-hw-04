import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {};

  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <>
      <SearchBar
        onSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
    </>
  );
}

export default App;
