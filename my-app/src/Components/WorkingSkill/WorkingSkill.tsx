import { Col, Progress, Row } from 'antd';
import React from 'react'


export const WorkingSkill: React.FC = () => {

    return (
        <div>
            <div className='container'>
                <Row style={{ display: 'flex' }}>
                    <Col span={12} >
                        <b style={{ fontSize: '18px' }} className='gradient_text'>See My All Skill.</b>
                        <h2 style={{ fontSize: '44px', marginBottom: '13px', color: '#181818', lineHeight: 1.25, fontWeight: 700 }}>My Working Skill</h2>
                        <p style={{ color: '#65676b', fontSize: '18px', lineHeight: '1.67' }}>We provide company and finance service for <br />
                            startups and company business.</p>
                    </Col>
                    <Col span={12}>
                        <div className="webdev_progress_content d-flex" style={{ justifyContent: 'space-between', fontSize: '18px', color: '#65676b' }}>
                            <b>Web Development</b>
                        </div>
                        <Progress className='mb-3' showInfo={false} strokeColor={"#35357c"} percent={100} />
                        <div className="webdev_progress_content d-flex" style={{ justifyContent: 'space-between', fontSize: '18px', color: '#65676b' }}>
                            <b>Java Development</b>
                        </div>
                        <Progress className='mb-3' showInfo={false} strokeColor={"#35357c"} percent={100} />
                        <div className="webdev_progress_content d-flex" style={{ justifyContent: 'space-between', fontSize: '18px', color: '#65676b' }}>
                            <b>.Net Development</b>
                        </div>
                        <Progress className='mb-3' showInfo={false} strokeColor={"#35357c"} percent={100} />
                        <div className="webdev_progress_content d-flex" style={{ justifyContent: 'space-between', fontSize: '18px', color: '#65676b' }}>
                            <b>Web Development</b>
                        </div>
                        <Progress className='mb-3' showInfo={false} strokeColor={"#35357c"} percent={100} />
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default WorkingSkill;