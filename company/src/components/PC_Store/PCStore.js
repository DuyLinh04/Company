import React from 'react';
import "./PCStore.scss";
import Logo from '../img/Logo VTC Online -01 1.png';
import cards from '../img/image 30.png';
import { useNavigate } from 'react-router-dom';
const PCStore = () => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/pays'); // Chuyển hướng đến trang pays.js
    };
    return (

        <div id="Pc-stores">
            <div className="Container-book">

                <div className="book-store1">
                    <p>Gói học</p>
                    <h1>Betia English 1</h1>
                </div>

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
                            <h2>1.600.000vnđ <del>1.120.000vnđ</del></h2>
                            <h4><i>Xem chi tiết</i></h4>
                            <div className="btn">
                                <button onClick={handleBuyClick}>Mua gói học</button>
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
                                <button onClick={handleBuyClick}>Mua gói học</button>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="book-store1">
                    <p>Gói học</p>
                    <h1>Betia English 2</h1>
                </div>
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
                            <h2>1.600.000vnđ <del>1.120.000vnđ</del></h2>
                            <h4><i>Xem chi tiết</i></h4>
                            <div className="btn">
                                <button onClick={handleBuyClick}>Mua gói học</button>
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
                                <button onClick={handleBuyClick}>Mua gói học</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


        </div>







    );


}
export default PCStore;