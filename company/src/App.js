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
import News from "./components/News/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PCStore from "./components/PC_Store/PCStore";
import Product from "./components/Productdetail/Product";
import Pays from "./components/Pays/Pays";
import PaysDetail from "./components/PaysDetail/PaysDetail";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";
import Introduction from "./components/Introduction/Introduction";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Home />
              <IntroAndHelp />
              <IntroAboutBook />
              <Nhapvai />
              <Book />
              <Coursera />
              
            </> 
          }
        />

        <Route path="/tin-tuc-su-kien" element={<News />} />
        <Route path="/cua-hang" element={<PCStore />} />
        <Route path="/gioi-thieu-va-huong-dan" element={<IntroAndHelp />} />
        <Route path="/gioi-thieu-ve-sach" element={<IntroAboutBook />} />
        <Route path="/nhap-vai" element={<Nhapvai />} />
        <Route path="/sach" element={<Book />} />
        <Route path="/coursera" element={<Coursera />} />
        <Route path="/pays" element={<Pays />} />
        <Route path="/news" element={<News />} />
        <Route path="/paydetail" element={<PaysDetail/>} />
        <Route path="/paySuccess" element={<OrderSuccess />} />
        <Route path="/huong-dan/1" element={<Introduction/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
