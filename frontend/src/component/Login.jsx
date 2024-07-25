// src/components/Login.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit1 = (data) => {
    console.log(data);
    navigate("/");
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
