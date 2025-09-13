import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // alert("User Registered Successfully");
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        { email, password }
      );
      if (data?.success) {
        alert("User Logged In Successfully");
        setEmail("");
        setPassword("");
        navigate("/");
        setAuth({
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("auth", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="mt-4 container-fluid w-50 border p-4 text-center">
          <h3 className="pt-0 p-4">Login Here</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-outline-success w-100">LOGIN</button>
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-outline-warning w-100"
                onClick={() => navigate("/forgot-password")}
              >
                FORGOT PASSWORD
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
