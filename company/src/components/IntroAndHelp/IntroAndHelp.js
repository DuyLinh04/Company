import React from "react";
import "./IntroAndHelp.css";

function IntroAndHelp() {
  return (
    <div className="Intro-container">
      {/* Introduction section */}
      <div className="Intro">
        <h4>Giới thiệu và hướng dẫn</h4>
        <h1>Betia English 2</h1>
      </div>

      {/* Video and text content */}
      <div className="slide-video-container">
        <div className="video">
          <video controls>
            <source src="video/intro_betia_english_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="Betia">
          <h2>Betia Family's day: giúp con làm chủ kỹ năng anh ngữ</h2>
          <p>
            Ngày tháng năm <br />
            Betia Family's day: giúp con làm chủ kỹ năng anh ngữ. Betia Family's
            day giúp con làm chủ kỹ năng anh ngữ.
          </p>
        </div>
      </div>

      {/* Thumbnail image section */}
      <div className="thumbnail-container">
        <img src="image1.jpg" alt="thumbnail1" />
        <img src="image2.jpg" alt="thumbnail2" />
        <img src="image3.jpg" alt="thumbnail3" />
        <img src="image4.jpg" alt="thumbnail4" />
      </div>

      
    </div>
  );
}

export default IntroAndHelp;
