import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Main from "../Main/Main.js";
import { MusicListProvider } from "../../MusicContext";
import "./App.css";

const App = () => {
  return (
    <MusicListProvider>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </MusicListProvider>
  );
};

export default App;
