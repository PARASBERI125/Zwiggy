// src/components/Login.js

import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { EntireContext } from "./Entirecontext";
function Login() {
  const { setOpenModal, sett } = useContext(EntireContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit1 = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successful");
          setOpenModal(false);
          sett("Logout");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };

  return (
    <div
      className="modal-container"
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        width: "100%",
        position: "relative",
      }}
    >
      <div style={{ minHeight: "120px" }}>
        <div className="card-body" style={{ width: "300px" }}>
          <form onSubmit={handleSubmit(onSubmit1)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
            <div className="logreg">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <div className="signup">
                <h4>Not yet registered?</h4>
                <a href="/signup">Signup</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
