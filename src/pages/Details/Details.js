import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMovieDetailAction } from "../../redux/actions/PhimAction";
import moment from "moment";

export default function Details(props) {
  // props giống this.props

  const { chiTietPhim } = useSelector((state) => state.PhimReducer);

  const dispatch = useDispatch();
  // Tự gọi API khi trang vừa load
  useEffect(() => {
    // Lấy tham số từ url
    let { id } = props.match.params;
    // Gọi action truyền vào id phim
    dispatch(getMovieDetailAction(id));
  }, []);
  return (
    <div className="container">
      {/* Id: {props.match.params.id} */}
      <div className="row mb-5 mt-5">
        <div className="col-6">
          <img
            src={chiTietPhim.hinhAnh}
            alt={chiTietPhim.tenPhim}
            className="w-100"
          />
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>Tên phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mô tả</th>
                <th>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  quidem dolorum consequuntur cupiditate magnam. Perferendis
                  minus praesentium amet distinctio aut error recusandae dolore
                  earum blanditiis? Aut, facere? Laboriosam, laborum error.
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
        <div className="nav flex-column nav-pills col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              let activeClass = index === 0 ? "active" : "";

              return (
                <a
                  key={index}
                  className={`nav-link ${activeClass}`}
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href={`#${heThongRap.maHeThongRap}`}
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img src={heThongRap.logo} width="50" />
                  {heThongRap.tenHeThongRap}
                </a>
              );
            })}
          </div>
          <div className="tab-content col-8" id="v-pills-tabContent">
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              const activeClass = index === 0 ? "show active" : "";

              return (
                <div
                  key={index}
                  className={`tab-pane fade ${activeClass}`}
                  id={heThongRap.maHeThongRap}
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {heThongRap.cumRapChieu?.map((cumRap, index) => {
                    return (
                      <div key={index}>
                        <h3>{cumRap.tenCumRap}</h3>
                        <div className="row">
                          {cumRap.lichChieuPhim ?.slice(0,8).map((lichChieu, index) => {
                            return (
                              <NavLink
                                key={index}
                                to={`/checkout/${lichChieu.maLichChieu}`}
                              >
                                {moment(lichChieu.ngayChieuGioChieu).format(
                                  "hh:mm A"
                                )}
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
