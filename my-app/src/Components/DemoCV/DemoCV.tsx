import { Button, Col, Pagination, Row } from "antd";
import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";

export const DemoCV: React.FC = () => {
  return (
    <div className="container">
      <Row>
        <Col span={24}>
          <div className='background_gradient'>
            <Col
              style={{
                marginBottom: "10px",
                justifyContent: "center",
                right: 0,
              }}
            >
              <div>
                <Pagination
                  className='custom_inputPa'
                  simple
                  defaultCurrent={1}
                  total={2}
                  pageSize={1}
                />
              </div>
            </Col>
            <div className='form-CV'>

            </div>
            <Row>
              <Col span={24}>
                <div className="select">
                  <div>
                    <Button
                      className='select_template_button'
                      type="text"
                    >
                      <AppstoreOutlined
                        style={{ color: "#666d7a" }}
                        className="mr-2"
                      />
                      <b style={{ color: "#666d7a" }}>Select template</b>
                    </Button>
                  </div>
                  <div className='download_PDF'>
                    <Button style={{ marginRight: '10px' }} size="large" type="primary">
                      <b>Download PDF</b>
                    </Button>
                    <Button size="large" type="primary">
                      ...
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div >
  );
};

export default DemoCV;
