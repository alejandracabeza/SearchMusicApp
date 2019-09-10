import React, { useContext } from "react";
import { TermContext, MusicResContext } from "../../MusicContext";
import axios from "axios";

const SearchBar = () => {
  let [term, setTerm] = useContext(TermContext);
  let [music, setMusic] = useContext(MusicResContext);

  const handleInputChange = e => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `https://itunes.apple.com/search?media=music&term=${term}&kind=album`
      )
      .then(res => {
        setMusic(res.data.results);
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="search-bar">
        <label className="input-bar">
          SEARCH FOR MUSIC:
          <input
            type="text"
            value={term}
            name="search"
            className="searchInput"
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
