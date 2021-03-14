import React, { Component } from "react";

export default class Register extends Component {
  state = {
    value: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
    },
    error: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
    },
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    // Xử lý lấy dữ liệu trên value
    let newValue = {...this.state.value};

    newValue[name] = value;

     // Xử lấy dữ liệu trên error
    let newError = {...this.state.error};
    let error = '';
    if (value === ''){
        error = name +  'Không được bỏ trống !'
    }
    newError[name] = error;
    this.setState({
        value: newValue,
        error: newError
    })
  };

  handleSubmit = (event) => {
      // Chặn sự kiện reload của browser
      event.preventDefault();

      let valid = true;
      // Lỗi khi valid không hợp lệ
      // + Khi bất kì thuộc tính nào của error != '' => bị lỗi  
    for (let keyError in this.state.error) {
        if (this.state.error[keyError] !== '') {
            valid = false;
        }
    }

      // Hoặc bất kỳ thuộc tính nào của value = ''
      for (let keyValue in this.state.value) {
        if (this.state.error[keyValue] === '') {
            valid = false;
        }
    }
        if (!valid) {
            alert('Dữ liệu không hợp lệ')
            return;
        }
    }

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="display-4">Đăng ký</div>
          <div className="form-group">
            <p>Tài khoản</p>
            <input
              name="taiKhoan"
              className="form-control"
              onChange={this.handleChange}
            />
            <p className='text-danger'>{this.state.error.taiKhoan}</p>
          </div>
          <div className="form-group">
            <p>Họ tên</p>
            <input
              name="hoTen"
              className="form-control"
              onChange={this.handleChange}
            />
            <p className='text-danger'>{this.state.error.hoTen}</p>
          </div>
          <div className="form-group">
            <p>Mật khẩu</p>
            <input
              name="matKhau"
              className="form-control"
              onChange={this.handleChange}
            />
            <p className='text-danger'>{this.state.error.matKhau}</p>
          </div>
          <div className="form-group">
            <p>Email</p>
            <input
              name="email"
              className="form-control"
              onChange={this.handleChange}
            />
            <p className='text-danger'>{this.state.error.email}</p>
          </div>
          <div className="form-group">
            <p>Số điện thoại</p>
            <input
              name="soDienThoai"
              className="form-control"
              onChange={this.handleChange}
            />
            <p className='text-danger'>{this.state.error.soDienThoai}</p>
          </div>
          <div className="form-group">
            <button type='submit' className="btn btn-success">Đăng ký</button>
          </div>
        </form>
      </div>
    );
  }
}
