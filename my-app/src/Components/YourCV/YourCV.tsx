import { Button, Col, Menu, Popover, Row, Switch } from 'antd';
import React from 'react';




export const YourCV: React.FC = () => {
    return (
        <div style={{ paddingTop: '10px' }}  >
            <div className="container">
                <Row className='blur_bg' >
                    <h4 className='cv_title' >YOUR CV </h4>
                    <Col span={12} style={{ display: 'flex' }}>
                        <div className="cv_place"  ></div>
                        <div className='resume_cv_content'>
                            <h5>CV FrontEnd</h5>
                            <p>01/01/2022</p>
                            <b className='text-danger'>30% BAD</b>
                            <div >
                                <Switch defaultChecked />
                                <b>Online</b>
                            </div>
                            <p >25 View</p>
                            <Button style={{ width: '50px', marginBottom: '10px' }} type='primary' >
                                <img width={20} src="./Img/edit.png" alt="" />
                            </Button>
                            <Button style={{ width: '50px', marginBottom: '10px' }} type='primary' danger>
                                <img width={20} src="./Img/edit.png" alt="" />
                            </Button>
                            <Button style={{ width: '50px', marginBottom: '10px' }} type='primary'>
                                <img width={20} src="./Img/edit.png" alt="" />
                            </Button>
                        </div>
                    </Col>
                    <Col span={12} style={{ display: 'flex' }}>
                        <div className="cv_place"  ></div>
                        <div className='resume_cv_content' >
                            <h5>CV FrontEnd</h5>
                            <p>01/01/2022</p>
                            <b className='text-danger'>30% BAD</b>
                            <div >
                                <Switch defaultChecked />
                                <b>Online</b>
                            </div>
                            <p >25 View</p>
                            <Button style={{ width: '50px', marginBottom: '10px' }} type='primary' >
                                <img width={20} src="./Img/edit.png" alt="" />
                            </Button>
                            <Button style={{ width: '50px', marginBottom: '10px' }} type='primary' danger>
                                <img width={20} src="./Img/edit.png" alt="" />
                            </Button>
                            <Button style={{ width: '50px', marginBottom: '10px' }} type='primary'>
                                <img width={20} src="./Img/edit.png" alt="" />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div >
        </div >
    )
}

export default YourCV;