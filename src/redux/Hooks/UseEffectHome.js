import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function UseEffectHome() {
  const [arrFilm, setArrFilm] = useState([]); // Tạo ra state cho mảng phim => load ra trang chủ

  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
              <p className="card-text">Book ticket</p>
            </div>
          </div>
        </div>
      );
    });
  };

  // useEffect phải đặt trước return,
  // Nhận vào 2 tham số :
  // + Tham số 1 : Là hàm chạy sau khi component render
  // + Tham số 2 : Chứa state (khi nào state thay đổi thì tham số 1 sẽ chạy)
  // Ghi chú : 1 component có thể gọi nhiều useEffect
useEffect(() => {
    getMovieList();
    
    return () => {
        // Hàm này sẽ được kích hoạt khi component mất khỏi giao diện
    }
}, [])

  const getMovieList = async () => {
      try {
        let result = await axios ({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });
        setArrFilm(result.data);
      }catch (error) {
        console.log('error', error);
      }
  }

  return (
    <div className="container mt-5 text-center">
      <button className="btn btn-success" onClick={() => {
          getMovieList()
      }}>Lấy danh sách phim</button>
      <div className="display-4">Danh sách phim</div>
      <div className="row">
          {renderFilm()}
      </div>
    </div>
  );
}
