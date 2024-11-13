import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import imga from "../img/z5861431481422_22faf98b909e7f922104d9b1361dad39.jpg";
const Header = () => {
  return (
    <>
      <header id="headers" className="header">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={imga} alt="Beta English Logo" />
          </Link>
          <div className="nav-container">
            <ul className="nav-links">
              <li className="nav-item">
                <Link to="/san-pham">Sản phẩm</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/san-pham/1">Sản phẩm 1</Link>
                  </li>
                  <li>
                    <Link to="/san-pham/2">Sản phẩm 2</Link>
                  </li>
                  <li>
                    <Link to="/san-pham/3">Sản phẩm 3</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/cua-hang">Cửa hàng</Link>
              </li>
              <li className="nav-item">
                <Link to="/huong-dan">Hướng dẫn</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/huong-dan/1">Hướng dẫn 1</Link>
                  </li>
                  <li>
                    <Link to="/huong-dan/2">Hướng dẫn 2</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/tin-tuc-su-kien">Tin tức & Sự kiện</Link>
              </li>
              <li className="nav-item">
                <Link to="/gioi-thieu">Giới thiệu</Link>
              </li>
            </ul>
            <button className="btn-buy1">Mua gói học</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

