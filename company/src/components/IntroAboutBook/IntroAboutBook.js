import React from "react";
import "./IntroAboutBook.css"

const IntroAboutBook = ()=>{
    return(
        <div className="intro-about-book">
            <div className="Intro">
            <h2>Giới thiệu</h2>
            <p>Về sách Betia English 2</p>
            </div> 


            <div className="About-book">
                <div className="Item-book">
                    
                    <div className="item-img">
                        <img src="https://images.gr-assets.com/books/1582546594l/45188094.jpg" alt="book"/>
                    </div>
                    <div className="item-content">
                        <h3>Tiếp tục diễn biến câu chuyện</h3>
                        <p>Bước vào lục địa mới, học sinh tiếp tục khai phá đam mê và sự hứng thú bới tiếng Anh qua các câu chuyện hấp dẫn
                        . Với loạt hoạt cảnh và nhân vật mới, học sinh tiếp tục được tăng cường, củng cố toàn diện các kỹ năng nghe, nói, đọc, viết.
                        </p>
                    </div>
                
                
            </div>
                <div className="Item-book">

                    <div className="item-content">
                        <h3>Chuẩn hóa phát âm & sự tự tin trong giao tiếp</h3>
                        <p>Gói học giúp học sinh hiểu được nội dung của các hội thoại qua các từ vựng, mẫu câu ngắn, nghe hiểu được các cuộc hội thoại (5-7 từ/câu); có thể nói và viết
                         các câu ngắn với các chunk được học từ (4-6 từ/câu)
                        </p>
                    </div>

                    <div className="item-img">
                    <img src="https://images.gr-assets.com/books/1582546594l/45188094.jpg" alt="book"/>
                    </div>
                
                </div>

               


                <div className="Item-book">
                 <div className="item-img">
                    <img src="https://images.gr-assets.com/books/1582546594l/45188094.jpg" alt="book"/>
                </div>

                 <div className="item-content">
                    <h3>Chỉ từ 30 phút mỗi ngày để tiến bộ</h3>
                <p>Lộ trình học được thiết kế khoa học. Chỉ từ 30 phút mỗi ngày với " Nhiệm vụ học hôm nay" để phát triển toàn diện các kỹ năng tiếng Anh giao tiếp, Phối hợp học cùng sách Betia Readers để tăng cường hiệu quả học tập</p>
                
                </div>   

                </div>
            </div>

            

        </div>
        

    );
};
export default IntroAboutBook;


