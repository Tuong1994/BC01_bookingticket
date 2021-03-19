import React, { Component } from "react";
// import axios from "axios";
import {layDanhSachPhimAction} from '../../redux/actions/PhimAction'; 
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Home extends Component {
  // state danh sách phim
  // state = {
  //   arrFilms: [],
  // };

  loadFlim = () => {
    this.props.dispatch(
      layDanhSachPhimAction()
    )
  };

  renderFlims = () => {
    return this.props.mangPhim.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img className="card-img-top w-100" src={film.hinhAnh} alt={film.hinhAnh} />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
              <NavLink className="btn btn-danger" to={`details/${film.maPhim}`}>Đặt vé</NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        {/* <button
          onClick={() => {
            this.loadFlim()
          }}
        >
          Lấy danh sách phim
        </button> */}
        <div className="text-center display-4">Danh sách phim</div>
        <div className="row">{this.renderFlims()}</div>
      </div>
    );
  }
  // Hàm giống hàm render của react component kế thừa nên có
  componentDidMount() {
    // Các API muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
    this.loadFlim();
  }
}

const mapStateToProps = (state) => {
  return {
    mangPhim: state.PhimReducer.mangPhim,
  };
};

export default connect(mapStateToProps)(Home);
