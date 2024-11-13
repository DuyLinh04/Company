import React from 'react';
import "./Product.scss";
import books from "../img/image 32.png";
import detailbook from "../img/Product Detail.png";
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/pays'); // Chuyển hướng đến trang pays.js
    };
    return (
        <div id="Products">
            <div className="Container-Product">
                <div className="Imgage-Product">
                    <img className="Booksmall" src={books} alt="Books" />
                    <img className="Bookbig" src={detailbook} alt="Details" />
                </div>

                <div className="box-right">
                    <div className="pays">
                        <div className="Hook">
                            <h1>Gói học Betia English</h1>
                            <p>Betia English cung cấp đa dạng lựa chọn
                                với học phí tối ưu cho cả gia đình
                            </p>
                        </div>

                        <div className="box-pays">
                            <h1>Betia English 365 ngày</h1>
                            <ul>
                                <li>Sử dụng không giới hạn nội dung Betia</li>
                                <li>Kèm 1 lượt khởi tạo lại tiến trình học</li>
                                <li>Thêm ô nhân vật người học miễn phí vĩnh viễn</li>
                            </ul>
                            <hr />
                            <div className="price">
                                <h1>1.600.000vnđ</h1>
                                 <div className="voucher">
                                <span>Ưu đãi còn 18:20:20</span>
                                <del>1.200.000vnđ</del>
                                </div>
                                
                            </div>
                            <button onClick={handleBuyClick}>Mua gói học</button>


                            
                        </div>


                    </div>
                </div>

            </div>
        </div>




    );
}
export default Product;

