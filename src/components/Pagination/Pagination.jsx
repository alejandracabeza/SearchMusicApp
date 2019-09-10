import React, { useContext } from "react";
import {
  CardPerPageContext,
  MusicResContext,
  CurrentPageContext
} from "../../MusicContext";
import "./Pagination.css";

const Pagination = () => {
  let [cardsPerPage] = useContext(CardPerPageContext);
  let [music] = useContext(MusicResContext);
  let [currentPage, setCurrentPage] = useContext(CurrentPageContext);

  const totalCards = music.length;
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handlePaginate(pageNumbers) {
    setCurrentPage(pageNumbers);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => {
          return (
            <li key={number}>
              <a onClick={() => handlePaginate(number)} href="!#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
