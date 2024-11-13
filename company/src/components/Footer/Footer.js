import React from "react";
import './Footer.scss';
import Logo from '../img/Logo VTC Online -01 1.png';
import Hodoo from '../img/Hodoolabs 1.png';


const Footer = () => {
    return (
        <footer>
            <div id="footers">
                <div className="Container">
                <div className="contacts">
                    <div className="Info">
                        <h5>Thông tin liên hệ</h5>
                    </div>
                    <div className="address">
                        <p className="item1">Hotline: 0832306226</p>
                        <p className="item2">Tổng đài: 1900 636876 (nhánh 4)</p>
                        <p className="item3">Địa chỉ: Tầng 12, Tòa nhà VTC Online, 18 Tam Trinh, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội, Việt Nam</p>
                    </div>

                    <div className="admins">
                         <p>Phát triển bởi Hodoo Labs - công ty giáo dục hàng đầu Hàn Quốc 
                            Phát hành bởi VTC Online - đơn vị tổ chức chương trình Olympic tiếng Anh trên Internet (IOE)
                         </p>
                         
                    </div>
                    <div className="policies">
                        <a href="#" className="item5">Chính sách</a>
                        
                        <a href="#" className="item6">Điều khoản</a>
                    </div>
                </div>

            

                
                <div className="logo-section">
                    <div className="logo-item1">
                        <h5 className="font1">Phát triển bởi</h5>
                        <img className="item7" src={Hodoo} alt="logo-hodoo" />
                    </div>
                    <div className="logo-item2">
                        <h5 className="font2">Phát hành bởi</h5>
                        <img className="item8" src={Logo} alt="logo-vtc" />
                    </div>
                </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
