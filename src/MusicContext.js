import React, { useState, createContext } from "react";

export const TermContext = createContext();
export const MusicResContext = createContext();
export const ToggleContext = createContext();
export const CurrentPageContext = createContext();
export const CardPerPageContext = createContext();

export const MusicListProvider = props => {
  const [term, setTerm] = useState("");
  const [music, setMusic] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(20);

  return (
    <TermContext.Provider value={[term, setTerm]}>
      <MusicResContext.Provider value={[music, setMusic]}>
        <ToggleContext.Provider value={[toggle, setToggle]}>
          <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
            <CardPerPageContext.Provider
              value={[cardsPerPage, setCardsPerPage]}
            >
              {props.children}
            </CardPerPageContext.Provider>
          </CurrentPageContext.Provider>
        </ToggleContext.Provider>
      </MusicResContext.Provider>
    </TermContext.Provider>
  );
};
