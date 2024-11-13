import React from "react";
import './PaysDetail.scss';
import QR from '../img/download1.png';
import { Button } from 'react-bootstrap';
const PaysDetail = () => {
    return(
        <div id="Container-PayDetail">
            <div className="CheckPays">
                <div className="Box-Info">

                    <div className="donhang">
                        <div className="date-sell">
                            <span>Đơn hàng</span>
                            <h4>14:23:01 26/03/2024- 1421914</h4>
                        </div>
                
                        <div className="name-box">
                            <div className="tengoi">
                                <span>Tên gói</span>
                                <h4>Betia English 365 ngày</h4>
                                
                            </div>

                            <div className="hinhthuc">
                                <span>Hình thức</span>
                                <h4>Mua Coupon</h4>
                                
                            </div>

                            <div className="dongia">
                                <span>Đơn giá</span>
                                <h4>1,080,000 VNĐ</h4>
                                
                            </div>

                            <div className="voucher">
                                <span>Giảm giá</span>
                                <h4>0 VNĐ</h4>
                            </div>
                            
                            <div className="paied">
                                <span>Đã thanh toán</span>
                                <h4>0 VNĐ</h4>
                            </div>
                            
                        </div>
                        <div className="money-pays">
                            <div className="need-money">
                                <span>Số tiền cần thanh toán</span>
                                <h4>1,080,000 VNĐ</h4>
                            </div>
                            
                            <h4>Một triệu không trăm tám mươi nghìn đồng chẵn</h4>
                        </div>
                    </div>
                    

                    <div className="Info-give">
                        <span className="sp">Thông tin nhận đơn</span>
                        <div className="Info-detail">
                            <div className="emails">
                               <span>Email</span>
                                <h4>hainguyen8895@gmail.com</h4>
                             
                            </div>

                            <div className="sdt">
                                <span>Số điện thoại</span>
                                <h4>0979786994</h4>
                                
                            </div>

                            <div className="address">
                                <span>Địa chỉ gửi sách</span>
                                <h4>địa chỉ hiển thị tại đây</h4>
                            
                            </div>

                        </div>
                    </div>
                </div>

                <div className="Box-Pays">
                    <div className="Box-QR">
                        <div className="QR">
                            <h3>Quét mã QR trên App ngân hàng</h3>

                        </div>
                        <img src={QR} alt="QR"/>
                    
        
                        <div className="Box-detail">
                            <ul>*Kiểm tra lại thông tin sau quét mã QR</ul>
                            <li>Số tiền: <span>1,080,000 vnđ</span></li>
                            <li>Nội dung: <span>NAP NC5AD4 1307309316 1421914</span></li>
                            <li>CTK: <span>CTY CP VTC TRUYEN THONG TRUC TUYEN</span></li>
                            <li>STK: <span>33685599101</span></li>
                            <li style={{color: 'red'}}>Để đảm bảo giao dịch thành công, nội dung chuyển khoản phải đúng!</li>
                        </div>
                    </div>
                    <div className="button-submit">
                        <span>Bạn chưa nhận được Coupon?</span>
                        <button>KIỂM TRA THANH TOÁN</button>
                    </div>
                </div>
            </div>

        </div>



    );


}
export default PaysDetail;