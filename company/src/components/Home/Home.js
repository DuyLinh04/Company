import React from 'react';
import {Button} from 'react-bootstrap';
import imga from '../img/z5861431481422_22faf98b909e7f922104d9b1361dad39.jpg';
import './Home.scss';
const Home = () =>{
    return (
        <div id="Homes">
            <div className="Home-container">
                <img className="logo" src={imga} alt='Logo betia english'/>
                <div className="intro">
                        <h2>Tiếp tục hành trình học tiếng Anh sáng tạo</h2>
                        <h1>Betia English 2</h1>
                </div>
                <div className="buttons">
                    <Button variant="primary" className="btn-buys">Mua ngay</Button>
                    <Button variant="primary" className="btn-dowload">Tải ngay</Button>
                </div>
            </div>
            
        </div>
    );
}

export default Home;