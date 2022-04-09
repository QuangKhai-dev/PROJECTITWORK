import { Col, Progress, Row } from 'antd';
import React from 'react'

export const FeedbackSummary: React.FC = () => {
    return (
        <div className='pt-5'>
            <div className='container mt-5'>
                <Row>
                    <Col span={12}>
                        <b style={{ fontSize: '18px', paddingLeft: '3px' }} className='gradient_text'>Feedback Summary</b>
                        <h2 style={{ fontSize: '44px', marginBottom: '13px', color: '#181818', lineHeight: 1.25, fontWeight: 700 }}>Review Your Skills</h2>
                        <p style={{ color: '#65676b', fontSize: '18px', lineHeight: '1.67' }}>We provide company and finance service for <br />
                            startups and company business.</p>
                    </Col>
                    <Col span={12}>
                        <div className="webdev_progress_content d-flex" style={{ justifyContent: 'space-between', fontSize: '18px', color: '#65676b' }}>
                            <b>HTML</b>
                        </div>
                        <Progress className='mb-3' showInfo={false} strokeColor={"#35357c"} percent={100} />
                        <div className="webdev_progress_content d-flex" style={{ justifyContent: 'space-between', fontSize: '18px', color: '#65676b' }}>
                            <b>JS6</b>
                        </div>
                        <Progress className='mb-3' showInfo={false} strokeColor={"#35357c"} percent={100} />
                        <div className="webdev_progress_content d-flex" style={{ justifyContent: 'space-between', fontSize: '18px', color: '#65676b' }}>
                            <b>React</b>
                        </div>
                        <Progress className='mb-3' showInfo={false} strokeColor={"#35357c"} percent={100} />
                        <div className="webdev_progress_content d-flex" style={{ justifyContent: 'space-between', fontSize: '18px', color: '#65676b' }}>
                            <b>Angular</b>
                        </div>
                        <Progress className='mb-3' showInfo={false} strokeColor={"#35357c"} percent={100} />
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default FeedbackSummary;