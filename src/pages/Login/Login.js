import React from "react";

export default function Login() {
  const handleChange = () => {};

  return (
    <form className="container mt-5">
      <h3>Đăng nhập</h3>
      <div className="form-group">
        <p>Tài khoản</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChang={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Mật khẩu</p>
        <input className="form-control" name="matKhau" onChange={handleChange} />
      </div>
      <button className="btn btn-success" type="submit">Đăng nhập</button>
    </form>
  );
}
