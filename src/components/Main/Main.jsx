import React, { useContext } from "react";
import Pagination from "./../Pagination/Pagination";
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
    gridTemplateColumns: "repeat(4, 25%)"
  };

  let styleList = {
    margin: "auto"
  };

  let styleGridCard = {
    display: "inline-block"
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
              <div key={item.trackId} className="each-card">
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
                <div
                  className="card-text"
                  style={!toggle ? styleGridCard : null}
                >
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
