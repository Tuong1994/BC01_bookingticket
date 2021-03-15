import React, { useState } from "react";

export default function BTChonXe(props) {

  const [imgCar, setImgCar] = useState('./img/car/products/black-car.jpg');
    const changeColor = (color) => {
        setImgCar(`./img/car/products/${color}-car.jpg`)
    }
  return (
    <div className="container">
      <h1 className="text-center display-4">Chọn màu xe</h1>
      <div className="row mt-4">
        <div className="col-6">
          <img
            src={imgCar}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col-6">
          <div className="row d-flex flex-column align-items-center">
            <div className="col-4 mb-3">
              <button className="btn btn-danger" style={{ width: "100%" }} onClick={() => {
                  changeColor('red');
              }}>
                Đỏ
              </button>
            </div>
            <div className="col-4 mb-3">
              <button className="btn btn-dark" style={{ width: "100%" }} onClick={() => {
                  changeColor('black');
              }}>
                Đen
              </button>
            </div>
            <div className="col-4 mb-3">
              <button className="btn btn-secondary" style={{ width: "100%" }} onClick={() => {
                  changeColor('silver')
              }}>
                Bạc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
