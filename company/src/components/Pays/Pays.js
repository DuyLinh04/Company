import React from "react";
import "./Pays.scss";
import LogoVTC from "../img/Logo VTC Online -01 1.png";
import Cards from "../img/image 30.png";
import { useNavigate } from 'react-router-dom';
const Pays = () => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/paydetail'); // Chuyển hướng đến trang pays.js
    };
        return(
            <div id="pays">
                <div className="Containers">
                    <div className="container-pays">
                        <div className="Imgs">
                            <img className="Logo" src={LogoVTC} alt="Logo" />
                            <img className="Card" src={Cards} alt="Card" />
                        </div>
                        <div className="Infor-price">
                        <div className="InfoBook">
                            <h1 className="intro-hook">Bộ sách và 1 ứng dụng Betia English 1</h1>
                            <p>Bộ sách 12 quyển Betia English 1</p>
                        </div>

                        <div className="Prices">
                            <h1>1.600.000vnđ</h1>
                            <div className="Voucher" >
                                <span>Ưu đãi còn 18:20:20</span>
                                <del>1.120.000vnđ</del>
                            </div>
                        </div>
                        </div>
                       
                    </div>

                    
                        <form method="POST" action="InputInfo">
                            <div className="huong-dan">
                                <h3>Mua Coupon không cần đăng nhập</h3>
                                <p>Điền đầy đủ, chính xác thông tin để nhận đơn hàng và lưu trữ thông tin đơn hàng của bạn</p>      
                            </div>
                            <div className="formInput">
                            <div id="inputID">
                                    <label class="formlabel">Nhập ID</label>
                                    <input type="text" name="id" placeholder="Nhập user ID hoặc goID" className="input-field"/>
                            </div>

                                <div id="inputEmail">
                                    <label  className="formlabel">Email</label>
                                    <input type="email" name="email" placeholder="Nhập email tại đây..."className="input-mail"/>                                   
                                </div>
                                <div id="inputPhone">
                                    <label  className="formlabel">Số điện thoại</label>
                                    <input type="text"  name="phone" placeholder="Nhập số điện thoại tại đây..." className="input-phone"/>                                    
                                </div>
                                <div id="inputAddress">
                                    <label  className="formlabel">Địa chỉ gửi sách</label>
                                    <input type="text"  name="address" placeholder="Nhập địa chỉ nhận sách tại đây..."className="input-address"/>                                    
                                </div>
                                <button type="submit" onClick={handleBuyClick} >MUA COUPON</button>
                            </div>
                            
                        </form>
                       
                    
                </div>
                
            </div>
        );


}
export default Pays;