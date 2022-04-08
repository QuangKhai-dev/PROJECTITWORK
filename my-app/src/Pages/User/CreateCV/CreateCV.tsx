import { Col, Row } from 'antd';
import React from 'react'
import CreateInfo from '../../../Components/CreateInfo/CreateInfo';
// import CreateInfo from '../../Component/CreateInfo/CreateInfo';
// import DemoCV from '../../Component/DemoCV/DemoCV';

const CreateCV: React.FC = () => {
    return (
        <div className='backgroundLayout'  >
            <Row >
                <Col span={15}>
                    <CreateInfo />
                </Col>
                <Col span={9}>
                    {/* <DemoCV /> */}
                </Col>
            </Row>
        </div >
    )
}

export default CreateCV;