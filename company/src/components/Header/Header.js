import React from "react";
import "./Header.css";
import imga from "../img/z5861431481422_22faf98b909e7f922104d9b1361dad39.jpg";

const Header = () => {
  

  return (
    <>
      <header class="header">
        <nav class="navbar">
          <a href="#" class="logo">
            <img src={imga} alt="Beta English Logo" />
          </a>

          <div class="nav-container">
            <ul class="nav-links">
              <li class="nav-item">
                <a href="#">Sản phẩm</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Sản phẩm 1</a>
                  </li>
                  <li>
                    <a href="#">Sản phẩm 2</a>
                  </li>
                  <li>
                    <a href="#">Sản phẩm 3</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#">Cửa hàng</a>
              </li>
              <li class="nav-item">
                <a href="#">Hướng dẫn</a>
                <ul class="dropdown">
                  <li>
                    <a href="#a">Hướng dẫn 1</a>
                  </li>
                  <li>
                    <a href="#b">Hướng dẫn 2</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#">Tin tức & Sự kiện</a>
              </li>
              <li class="nav-item">
                <a href="#">Giới thiệu</a>
              </li>
            </ul>
            <button class="btn-buy">
              Mua gói học
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
