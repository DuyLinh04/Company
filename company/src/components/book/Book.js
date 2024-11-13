import React from "react";
import './Book.scss';
import imga from '../img/readers 1.png';
import top from '../img/Top.png';
const Book = () => {
    return (
        <div id="books" >

            <div className="Book-container">
                <div className="book-intro">
                    <h3>Nâng cao trải nghiệm học tiếng Anh với Betia qua bộ sách</h3>
                    <h1>BETIA READERS</h1>
                    <h1>Cube 1.2</h1>

                </div>
                <img className="book" src={imga} alt="book" />
                <div class="container">
                    <h1>Betia Readers cube 1.2: Tiếp tục hành trình phiêu lưu đầy sáng tạo</h1>
                    <p>12 cuốn sách tương đương 12 câu chuyện trong thế giới Betia</p>
                    <div class="content">
                        <div class="left-section">
                            <img src={top} alt="Cube icon" />

                        </div>
                        <div class="right-section">
                            <div class="reader-info">
                                <div class="reader-label">Betia Readers</div>
                                <div class="cube-version">Cube 1.1</div>
                            </div>
                            <div class="info-list">
                                <div class="info-item">
                                    <span>CEFR</span>
                                    <span>A1 Mid</span>
                                </div>
                                <div class="info-item">
                                    <span>Từ vựng</span>
                                    <span>100</span>
                                </div>
                                <div class="info-item">
                                    <span>Cụm từ</span>
                                    <span>450</span>
                                </div>
                                <div class="info-item">
                                    <span>Số câu trong mỗi hội thoại</span>
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-read">Đọc thử ngay</button>
                </div>
            </div>

        </div>





    );

}

export default Book;