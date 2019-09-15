import React, { useContext } from "react";
import Pagination from "../Pagination/Pagination";
import "./Main.css";

import {
  MusicResContext,
  ToggleContext,
  CurrentPageContext,
  CardPerPageContext
} from "../../MusicContext";

const Main = () => {
  let [music] = useContext(MusicResContext);
  let [toggle] = useContext(ToggleContext);
  let [currentPage] = useContext(CurrentPageContext);
  let [cardsPerPage] = useContext(CardPerPageContext);

  let styleGrid = {
    textAlign: "center",
    margin: "auto",
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
  };

  let styleGridCard = {
    display: "flex"
  };

  let styleList = {
    margin: "auto",
    width: "60%"
  };

  let styleListCard = {
    flexBasis: "100%"
  };

  const indexLastCard = currentPage * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const currentCard = music.slice(indexFirstCard, indexLastCard);

  return (
    <div>
      <Pagination />
      <div style={toggle ? styleGrid : styleList} className="cards-container">
        {currentCard.length >= 1 ? (
          currentCard.map(item => {
            return (
              <div
                key={item.trackId}
                className="each-card"
                style={!toggle ? styleGridCard : styleListCard}
              >
                <a
                  href={item.collectionViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img"
                    src={item.artworkUrl100}
                    alt="album art"
                  ></img>
                </a>
                <div className="card-text">
                  <h3>{item.artistName}</h3>
                  <br />
                  <h4>{item.collectionName}</h4>
                </div>
              </div>
            );
          })
        ) : (
          <div id="noResult">
            <h2>Search for your favourite music</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
