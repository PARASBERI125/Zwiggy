import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit1 = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successful");
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
          navigate("/");
        }
      });
  };

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.1)", // semi-transparent background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensure it appears above other content
      }}
    >
      <div
        className="modal-container"
        style={{
          backgroundColor: "#fff",
          padding: "30px", // Increased padding for more space inside the modal
          borderRadius: "8px", // Slightly rounded corners
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Enhanced shadow for depth
          maxWidth: "500px", // Increased width for larger modal
          width: "100%",
          position: "relative",
          boxSizing: "border-box", // Ensure padding is included in width
        }}
      >
        <form onSubmit={handleSubmit(onSubmit1)}>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

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
            <button type="submit" className="btn btn-primary registerbtn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
