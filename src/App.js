import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { MusicListProvider } from "./MusicContext";
import "./assets/App.css";

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
