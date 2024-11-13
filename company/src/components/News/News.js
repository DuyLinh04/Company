import React from "react";
import "./News.scss";
import Icon from "../img/cf9c32243a25d2476a4d3906b83f3f54.png.png";
import New from "../img/image 590.png";
import Itemnews from "../img/medium_976x732_c5c0592394.png.png";
const News = () => {
  return (
    <div id="news" >

      <div className="Container-news">
        <div className="Intro">

          <img className="Icon" src={Icon} alt="Icon" />
          <h1>Tin tức - Sự kiện</h1>
        </div>

        <div className="image-news">
          <img className="news-img" src={New} alt="news" />
          <div className="Links">
            <h5>Nổi bật</h5>
            <h3>Betia Family's day: giúp con làm chủ kỹ năng anh ngữ✌️</h3>
          </div>
        </div>

        <div className="News-container">
          <div className="buttons">
            <button>Sự kiện</button>
            <button>Tin tức</button>
          </div>
          <div class="filter-container">
            <h4 class="dropdown-toggle">Bộ lọc</h4>
            <ul class="dropdown">
              <li><a href="#a">News 1</a></li>
              <li><a href="#b">News 2</a></li>
            </ul>
          </div>

          <div className="list-news">
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
            <div className="item1">
              <img className="img-Items" src={Itemnews} alt="news" />
              <h5>Tin hót</h5>
              <p>Betia English - sản phẩm chiến lược thời đại giáo dục số của...</p>
              <h5>2023.02.01 | 9233</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default News;
