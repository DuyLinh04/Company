import React from "react";
import './Cousera.css';
import Logo from '../img/Logo VTC Online -01 1.png';
import cards from'../img/image 30.png';

const Coursera = () => {
        return(

            <div className="Container">
                <h1>GÓI HỌC BETIA ENGLISH 2</h1>
            <div className="box" >
                <div className="box-buy1">
                    <div className="logoVTC">
                    <img src={Logo} alt="Logo" />
                    </div>
                     <div className="card">
                        <img src={cards} alt="Card" />
                    </div>   
                    <div className="infor">
                        <h3>Betia English (2) 365 ngày</h3>
                    <h5>Sử dụng Betia English 2 365 ngày không giới hạn</h5>
                    <h6>Ưu đãi còn 18:20:20</h6>
                    <h2>1.600.000vnđ   <del>1.120.000vnđ</del></h2>
                    <h4><i>Xem chi tiết</i></h4>
                    <div className="btn">
                        <button >Mua gói học</button>
                    </div>
                    
                    </div>

                    
                </div>
                <div className="box-buy1">
                    <div className="logoVTC">
                    <img src={Logo} alt="Logo" />
                    </div>
                     <div className="card">
                        <img src={cards} alt="Card" />
                    </div> 
                    <div className="infor">
                        <h3>Trọn bộ sách và ứng dụng Betia English(2)</h3>
                    <h5>365 ngày dùng không giới hạn Betia English 2 và bộ sách Reader 12 cuốn</h5>
                    <h6>Ưu đãi còn 18:20:20</h6>
                    <h2>1.600.000vnđ   <del>1.120.000vnđ</del></h2>
                    <h4><i>Xem chi tiết</i></h4>
                    <div className="btn">
                      <button>Mua gói học</button>  
                    </div>
                    
                    </div>
                    
                </div>
            </div>
                
           
            </div>
            






        );



}
export default Coursera;