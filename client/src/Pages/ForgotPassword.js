import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import toast from "toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:8080/api/v1/auth/forgot-password",
        {
          email,
          answer,
          newPassword,
        }
      );
      if (data.success) {
        setTimeout(() => {
          toast.success(data.message);
        }, 400);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="register w-75 mx-auto">
        <form className="p-4 " onSubmit={handleForgotPassword}>
          <h3 className="text-center">Forgot Password</h3>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Secret Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-outline-success w-100">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
