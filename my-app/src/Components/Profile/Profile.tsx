import { Col, Menu, Popover, Row } from 'antd';
import React from 'react';


const { SubMenu } = Menu;
const content = (
    <div>HEHEHE</div>
)

export const Profile: React.FC = () => {
    return (
        <div  >
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Row className='profile_layout'>
                            <Col span={10}>
                                <div>
                                    <img width={'100%'} src="./Img/logo.jpg" alt="" />
                                </div>
                            </Col>
                            <Col span={14} style={{ display: 'flex', marginTop: '50px' }}>
                                <div className="content_user" style={{ width: '60%' }}>
                                    <div className="inner" style={{ padding: '0 20px' }}>
                                        <h4 >David</h4>
                                        <p >I'm Web Developer Web designer and developer working for lamborghini.com in Paris, France.</p>
                                        <ul className="contact-address">
                                            <li >
                                                <img width={20} src="./Img/edit.png" alt="" />
                                                Web designer &amp; developer
                                            </li>
                                            <li >
                                                <img width={20} src="./Img/edit.png" alt="" />
                                                0823858955
                                            </li>
                                            <li >
                                                <img width={20} src="./Img/edit.png" alt="" />
                                                Hồ Chí Minh, Việt Nam
                                            </li>
                                        </ul>
                                        <div className='download_button'>
                                            <a href="#">
                                                <span>Download My CV</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rank_score" style={{ flexDirection: 'column', alignItems: 'center', paddingTop: '50px', width: '40%' }}>
                                    <h2 >Rank Score
                                        <Popover trigger="click" placement='topLeft' content={content}>

                                        </Popover>
                                    </h2>
                                    <h4 className='text-center text-success'>9.9</h4>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div >

    )
}

export default Profile;