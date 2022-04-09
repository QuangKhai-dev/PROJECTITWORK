import { Col, Row } from 'antd';
import { CreateInfo, DemoCV } from 'Components';
import React from 'react'

const CreateCV: React.FC = () => {
    return (
        <div className='backgroundLayout'  >
            <Row >
                <Col span={15}>
                    <CreateInfo />
                </Col>
                <Col span={9}>
                    <DemoCV />
                </Col>
            </Row>
        </div >
    )
}

export default CreateCV;