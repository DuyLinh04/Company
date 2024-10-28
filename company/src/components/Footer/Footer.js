import React from "react";
import './Footer.css';
import Logo from '../img/Logo VTC Online -01 1.png';

import Hodoo from'../img/Hodoolabs 1.png';

const Footer = () => {
    return(
        <footer>
        <div className="contacts">
            <div>
                <h5>Thông tin liên hệ</h5>
                <p>Hotline: 096 123 4567</p>
                <p>Tổng đài: 1900 636876 (nhánh 4)</p>
                <p>Địa chỉ: Tầng 12 Tòa nhà VTC Online 18 Tam Chinh, Phường Minh Khai, Quận Hai Bà Trưng,Hà Nội, Việt Nam</p>
            </div>

            <div className="admins">
            <p>Phát triển bởi Hodoo Labs - công ty giáo dục hàng đầu Hàn Quốc</p>
            <p>Phát hành bởi VTC Online - đơn vị tổ chức chương trình Olympic tiếng Anh trên Internet(IOE)</p>                               
            </div>

            <div className="about">
            <h3>Chính sách</h3>
            <h3>Điều Khoản</h3>
            </div>
        </div>
            <div className="logo-hodoo" >
                <h5>Phát triển bởi</h5>
                <img  src={Hodoo} alt="logo-hodoo" />
            </div>
            <div className="logo-vtc">
                <h5>Phát hành bởi</h5>
                <img  src={Logo} alt="logo-vtc" />
            </div>
    </footer>



    );


}
export default Footer;