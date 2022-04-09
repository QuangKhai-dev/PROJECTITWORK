import React from "react";
import styles from "./FeedbackCompany.module.css";
import Slider from "react-slick";
import { Rate } from "antd";


export const FeedbackCompany: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="py-3" style={{ marginBottom: "55px" }}>
      <div className="container">
        <div className="col-12 my-5 text-center">
          <b style={{ fontSize: "18px" }} className={styles.gradient_text}>
            FeedbackCompany
          </b>
          <h2
            style={{
              fontSize: "35px",
              marginBottom: "13px",
              color: "#181818",
              lineHeight: 1.25,
              fontWeight: 700,
            }}
          >
            Review of companies you have applied
          </h2>
        </div>
        <Slider {...settings}>
          <div>
            <div
              className={styles.background_gradient}
              style={{
                width: "90%",
                height: "280px",
                padding: "25px 20px",
                display: "flex",
                textAlign: 'center',
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="image_company d-flex mb-4"
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Img/logo.jpg"
                  width={80}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(37, 37, 37, 0.445)",
                  }}
                  alt=""
                />
                <div
                  className="name_company d-flex"
                  style={{ flexDirection: "column" }}
                >
                  <h5 className="mt-2 ">
                    <b>Trương Tấn Khải</b>
                  </h5>
                  <Rate allowHalf defaultValue={4.9} />
                </div>
              </div>
              <b style={{ padding: "0 15px" }}>
                Lần đầu tôi được thấy cái design đẹp v.
              </b>
            </div>
          </div>
          <div>
            <div
              className={styles.background_gradient}
              style={{
                width: "90%",
                height: "280px",
                padding: "25px 20px",
                display: "flex",
                textAlign: 'center',
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="image_company d-flex mb-4"
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Img/logo.jpg"
                  width={80}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(37, 37, 37, 0.445)",
                  }}
                  alt=""
                />
                <div
                  className="name_company d-flex"
                  style={{ flexDirection: "column" }}
                >
                  <h5 className="mt-2">
                    <b>Sang Ròm</b>
                  </h5>
                  <Rate allowHalf defaultValue={4.9} />
                </div>
              </div>
              <div>
                <b style={{ padding: "0 15px" }} className="text-center">
                  Không ngờ có ngày được thấy mẫu design đẹp nv.
                </b>
              </div>
            </div>
          </div>
          <div>
            <div
              className={styles.background_gradient}
              style={{
                width: "90%",
                height: "280px",
                padding: "25px 20px",
                display: "flex",
                textAlign: 'center',
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="image_company d-flex mb-4"
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Img/logo.jpg"
                  width={80}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(37, 37, 37, 0.445)",
                  }}
                  alt=""
                />
                <div
                  className="name_company d-flex"
                  style={{ flexDirection: "column" }}
                >
                  <h5 className="mt-2">
                    <b>Quách Khải</b>
                  </h5>
                  <Rate allowHalf defaultValue={4.9} />
                </div>
              </div>
              <div>
                <b style={{ padding: "0 15px" }} className="text-center">
                  Ngại quá đi, ngại quá đi.
                </b>
              </div>
            </div>
          </div>
          <div>
            <div
              className={styles.background_gradient}
              style={{
                width: "90%",
                height: "280px",
                padding: "25px 20px",
                display: "flex",
                textAlign: 'center',
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="image_company d-flex mb-4"
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Img/logo.jpg"
                  width={80}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(37, 37, 37, 0.445)",
                  }}
                  alt=""
                />
                <div
                  className="name_company d-flex"
                  style={{ flexDirection: "column" }}
                >
                  <h5 className="mt-2">
                    <b>Quách Khải</b>
                  </h5>
                  <Rate allowHalf defaultValue={4.9} />
                </div>
              </div>
              <div>
                <b style={{ padding: "0 15px" }} className="text-center">
                  Ngại quá đi, ngại quá đi.
                </b>
              </div>
            </div>
          </div>
          <div>
            <div
              className={styles.background_gradient}
              style={{
                width: "90%",
                height: "280px",
                padding: "25px 20px",
                display: "flex",
                textAlign: 'center',
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="image_company d-flex mb-4"
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Img/logo.jpg"
                  width={80}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(37, 37, 37, 0.445)",
                  }}
                  alt=""
                />
                <div
                  className="name_company d-flex"
                  style={{ flexDirection: "column" }}
                >
                  <h5 className="mt-2">
                    <b>Quách Khải</b>
                  </h5>
                  <Rate allowHalf defaultValue={4.9} />
                </div>
              </div>
              <div>
                <b style={{ padding: "0 15px" }} className="text-center">
                  Ngại quá đi, ngại quá đi.
                </b>
              </div>
            </div>
          </div>
          <div>
            <div
              className={styles.background_gradient}
              style={{
                width: "90%",
                height: "280px",
                padding: "25px 20px",
                display: "flex",
                textAlign: 'center',
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="image_company d-flex mb-4"
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Img/logo.jpg"
                  width={80}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(37, 37, 37, 0.445)",
                  }}
                  alt=""
                />
                <div
                  className="name_company d-flex"
                  style={{ flexDirection: "column" }}
                >
                  <h5 className="mt-2">
                    <b>Quách Khải</b>
                  </h5>
                  <Rate allowHalf defaultValue={4.9} />
                </div>
              </div>
              <div>
                <b style={{ padding: "0 15px" }} className="text-center">
                  Ngại quá đi, ngại quá đi.
                </b>
              </div>
            </div>
          </div>
          <div>
            <div
              className={styles.background_gradient}
              style={{
                width: "90%",
                height: "280px",
                padding: "25px 20px",
                display: "flex",
                textAlign: 'center',
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="image_company d-flex mb-4"
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Img/logo.jpg"
                  width={80}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(37, 37, 37, 0.445)",
                  }}
                  alt=""
                />
                <div
                  className="name_company d-flex"
                  style={{ flexDirection: "column" }}
                >
                  <h5 className="mt-2">
                    <b>Quách Khải</b>
                  </h5>
                  <Rate allowHalf defaultValue={4.9} />
                </div>
              </div>
              <div>
                <b style={{ padding: "0 15px" }} className="text-center">
                  Ngại quá đi, ngại quá đi.
                </b>
              </div>
            </div>
          </div>
          <div>
            <div
              className={styles.background_gradient}
              style={{
                width: "90%",
                height: "280px",
                padding: "25px 20px",
                display: "flex",
                textAlign: 'center',
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="image_company d-flex mb-4"
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Img/logo.jpg"
                  width={80}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(37, 37, 37, 0.445)",
                  }}
                  alt=""
                />
                <div
                  className="name_company d-flex"
                  style={{ flexDirection: "column" }}
                >
                  <h5 className="mt-2">
                    <b>Quách Khải</b>
                  </h5>
                  <Rate allowHalf defaultValue={4.9} />
                </div>
              </div>
              <div>
                <b style={{ padding: "0 15px" }} className="text-center">
                  Ngại quá đi, ngại quá đi.
                </b>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default FeedbackCompany;
