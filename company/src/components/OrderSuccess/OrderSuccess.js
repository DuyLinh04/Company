import React from "react";
import "./PaymentSuccess.scss";
import tultle from "../img/test 1.png";
import stiker from "../img/ticket-expired.png";
import Button from "react-bootstrap/Button";

import {useRef} from "react";
const OrderSuccess = () => {
    const codeRef = useRef(null); 

  const copyCode = () => {
    const code = codeRef.current.textContent; 
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert(`Copied: ${code}`);
      })
      .catch((err) => {
        alert(`Failed to copy: ${err}`);
      });
  };
    return(
        <div id="Container-success">
            <div className="Box">
                <div className="Item-box">
                    <h4>Thanh toán thành công</h4>
                    <img src={tultle} alt="tultle" />
                    
                        <div className="code-sign">
                            <div className="codes">
                                <span className="intro-code">Mã Coupon</span>
                                <div className="card-code">
                                    <img src={stiker} alt="stiker" />
                                    <div className="divider"></div>
                                    <span className="Voucher" ref={codeRef}>BEV327923</span>
                                    <h4 className="copy" onClick={copyCode}>Copy</h4>
                                
                                </div>
                            </div>
                            
                            <div className="Notification">
                                <span>Mã để nhập vào ứng dụng Betia English</span>
                                <p>Hoặc mã gói gửi vể điện thoại và email của bạn sẽ dùng để nhập trong ứng dụng Betia English,
                                    vui lòng không cung cấp mã cho bất kì ai sử dụng trước
                                </p>
                            </div>

                        </div>
                        <div className="Information-order">
                            <div className="Order">
                                <h4>Thông tin đơn hàng được gửi về</h4>
                                <div className="Order-detail">
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
                        <Button variant="primary">XEM HƯỚNG DẪN NHẬP COUPON</Button>
                            
                    </div>
                </div>
            
        </div>
    );

}
export default OrderSuccess;