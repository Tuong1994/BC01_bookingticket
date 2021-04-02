import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { useFormik, withFormik } from "formik";
import * as yup from "yup";
import { dangNhapAction } from "../../redux/actions/UserAction";

export default function Login(props) {

  const dispatch = useDispatch();

  const { handleChange, handleSubmit, errors, handleBlur, touched, isValid } = useFormik(
    {
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      validationSchema: yup.object().shape({
        taiKhoan: yup.string().required("Tài khoản không được để trống"), // min(6,'Tài khoản tối thiểu 6 ký tự'),
        matKhau: yup.string().required("Mật khẩu không được để trống"),
      }),
      onSubmit: (values) => { //values <=> this.state.values (react class component)
        // console.log(values);
        // Gọi API hoặc action để đưa dữ liệu về server
        dispatch(dangNhapAction(values));
      },
    }
  );

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <h3>Đăng nhập</h3>
      <div className="form-group">
        <p>Tài khoản</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.taiKhoan && errors.taiKhoan ? (
          <p className="text-danger">{errors.taiKhoan}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Mật khẩu</p>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.matKhau && errors.matKhau ? (
          <p className="text-danger">{errors.matKhau}</p>
        ) : (
          ""
        )}
      </div>
      <button className="btn btn-success" type="submit" disabled={!isValid}>
        Đăng nhập
      </button>
    </form>
  );
}
