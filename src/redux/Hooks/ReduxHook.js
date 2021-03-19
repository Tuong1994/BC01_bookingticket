import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch} from 'react-redux';
import {layDanhSachPhimAction} from '../actions/PhimAction';

export default function ReduxHook(props) {
    // useSelector là hook để lấy dữ liệu từ reducer về
    const arrFilm = useSelector(state => state.PhimReducer.mangPhim)

    // useDispatch tương tự this.props.dispatch
    const dispatch = useDispatch();

  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img
              className="card-img-top"
              src={film.hinhAnh}
              alt={film.hinhAnh}
            />
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
    dispatch(layDanhSachPhimAction());
    return () => {
      // Hàm này sẽ được kích hoạt khi component mất khỏi giao diện
    };
  }, []);


  return (
    <div className="container mt-5 text-center">
      <button
        className="btn btn-success"
        onClick={() => {
        
        }}
      >
        Lấy danh sách phim
      </button>
      <div className="display-4">Danh sách phim</div>
      <div className="row">{renderFilm()}</div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//     return {
//         arrFilm : state.PhimReducer.mangPhim,
//     }
// } 

// export default connect(mapStateToProps)(ReduxHook);