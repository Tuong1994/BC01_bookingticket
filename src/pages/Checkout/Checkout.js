import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { taiKhoan } from "../../configs/setting";
import { getTicketAction } from "../../redux/actions/PhimAction";
import "./Checkout.css";

export default function Checkout(props) {
  const { thongTinPhongVe } = useSelector((state) => state.PhimReducer);

  const { danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  let { id } = props.match.params;

  console.log(thongTinPhongVe);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketAction(id));
  }, []);

  const renderGhe = () => {
    return thongTinPhongVe.danhSachGhe?.map((ghe, index) => {

        // Xác định ghế đang đặt
        let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

        let classGheDangDat = indexGheDD !== -1 ? 'gheDangDat' : '';

      // Xác định ghế đã đặt và chưa đặt
      let classGheDaDat = ghe.daDat ? "gheDaDat" : "";

      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";

      return (
        <Fragment key={index}>
          <button className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`} disabled={ghe.daDat} onClick={() => {
              dispatch({
                  type: 'DAT_GHE',
                  ghe
              })
          }}>
            {ghe.daDat === true ? "X" : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  const renderGheDangDat = () => {
    return danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <Fragment key={index}>
          <span className="text-success font-weight-bold">
            {gheDangDat.stt}{" "}
          </span>
        </Fragment>
      );
    });
  };

  const tinhTongTien = () => {
    return danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
      return (tongTien += gheDangDat.giaVe);
    }, 0);
  };

  if(!localStorage.getItem(taiKhoan)) {
    return <Redirect to ='/login' />
  }
  // console.log("thongTinPhongVe", thongTinPhongVe);

  return (
    <div className="container mt-5 ">
      <div className="row text-center d-flex align-items-center">
        <div className="col-8">
          <img
            className="logo w-100"
            src="https://tix.vn/app/assets/img/icons/screen.png"
          />
          {renderGhe()}
        </div>
        <div className="col-4">
          <div className="display-4 text-success text-center">
            {tinhTongTien().toLocaleString()} VNĐ
          </div>
          <hr />
          <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} height={200} />
          <hr />
          <div>
            <h3>{thongTinPhongVe.thongTinPhim?.tenPhim}</h3>
          </div>
          <div>
            <p>Địa chỉ : {thongTinPhongVe.thongTinPhim?.diaChi}</p>
          </div>
          <div>
            <p>
              Ngày giờ chiếu : {thongTinPhongVe.thongTinPhim?.ngayChieu} -{" "}
              {thongTinPhongVe.thongTinPhim?.gioChieu}
            </p>
          </div>
          <hr />
          <div className="text-warning text-left mb-5">
            <p>Ghế : {renderGheDangDat()}</p>
            <hr />
          </div>
          <div className="mb-5">
            <button className="w-100 btn btn-success display-4">ĐẶT VÉ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
