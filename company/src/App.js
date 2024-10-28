import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import IntroAndHelp from "./components/IntroAndHelp/IntroAndHelp";
import IntroAboutBook from "./components/IntroAboutBook/IntroAboutBook";
import Nhapvai from "./components/nhapvai/Nhapvai";
import Book from "./components/book/Book";
import Coursera from "./components/Coursera/Cousera";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app-container">
      <Header/>
      <div className="main-content">
        <Home />
        <IntroAndHelp />
        <IntroAboutBook/>
        <Nhapvai/>
        <Book/>
        <Coursera/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
