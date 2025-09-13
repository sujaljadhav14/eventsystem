import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // alert("User Registered Successfully");
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        { name, email, password, phone, answer }
      );
      if (data?.success) {
        alert("User Registered Successfully");
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setAnswer("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="mt-4 container-fluid w-50 border p-4 text-center">
          <h3 className="pt-0 p-4">Register Here</h3>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Secret Answer"
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <button className="btn btn-outline-success w-100">Register</button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
